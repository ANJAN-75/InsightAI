import { useDispatch } from "react-redux";
import { register, login, getme } from "../services/auth.service.js";
import { setUser, setLoading, setError } from "../auth.slice.js";

export const useAuth = () => {
  const dispatch = useDispatch();
  const handleRegister = async ({ username, email, password }) => {
    try {
      dispatch(setLoading(true));
      const data = await register({ username, email, password });
    } catch (error) {
      dispatch(
        setError(error.response?.data?.message || "registration failed"),
      );
    } finally {
      dispatch(setLoading(false));
    }
  };

  const handleLogin = async ({ email, password }) => {
    try {
      dispatch(setLoading(true));
      const data = await login({ email, password });
      dispatch(setUser(data.user));
    } catch (error) {
      dispatch(setError(error.response?.data?.message || "login failed"));
    } finally {
      dispatch(setLoading(false));
    }
  };
  const handlegetMe = async () => {
    try {
      dispatch(setLoading(true));
      const data = await getme();
      console.log(data+"getme")
      dispatch(setUser(data.user));
    } catch (err) {
      dispatch(
        setError(err.response?.data?.message || "Failed to fetch user data"),
      );
    } finally {
      dispatch(setLoading(false));
    }
  };
  return {
    handleRegister,
    handleLogin,
    handlegetMe
  }
};
