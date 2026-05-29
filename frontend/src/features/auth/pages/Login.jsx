import React  from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../hook/useAuth";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const Navigate=useNavigate()

  const {handleLogin} =useAuth()

  const handleSubmit= async(e)=>{
    e.preventDefault()
    const payLoad={
      email,
      password
    }
    await handleLogin(payLoad)
    Navigate("/")
  }
  return (
    <main className="relative bg-zinc-950 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-cyan-500 opacity-20 blur-[140px] rounded-full"></div>

      <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-[#31b8c6] opacity-20 blur-[140px] rounded-full"></div>
      <div className="register-container w-[450px] flex flex-col gap-5 items-center">
        <h2 className="text-gray-300 text-3xl text-center font-bold ">
          Welcome back

        </h2>
        <form
          onSubmit={handleSubmit}
          className="form-container text-gray-300 flex flex-col gap-4   w-[400px] rounded-2xl 
                  bg-white/10 
                  backdrop-blur-lg 
                  border border-white/20 
                  p-8 text-white shadow-2xl"
        >
         
          <input
            className="p-3 bg-white/5 border border-white/10 rounded-lg outline-none focus:border-cyan-400 transition-all"
            type="email"
            value={email}
            onChange={(e)=>{
              setEmail(e.target.value)
            }}
            placeholder="you@example.com"
          />
          <input
            className="p-3 bg-white/5 border border-white/10 rounded-lg outline-none focus:border-cyan-400 transition-all"
            type="password"
            value={password}
            onChange={(e)=>{
              setPassword(e.target.value)
            }}
            placeholder="Enter your password"
          />
          <button className="p-3 text-lg font-bold text-zinc-950 rounded-lg bg-[#31b8c6] cursor-pointer hover:scale-[1.02] transition-all">
            SUBMIT
          </button>
          <p>New here? Create an account.
            <Link
            to="/register"
            className="text-cyan-400 hover:text-cyan-300 transition-all pl-1"
          >
            Register
          </Link>
          </p>
        </form>
      </div>
    </main>
  );
};

export default Login;
