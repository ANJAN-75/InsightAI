import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <main className="relative bg-zinc-950 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-cyan-500 opacity-20 blur-[140px] rounded-full"></div>

      <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-[#31b8c6] opacity-20 blur-[140px] rounded-full"></div>
      <div className="register-container w-[450px] flex flex-col gap-5 items-center">
        <h2 className="text-gray-300 text-3xl text-center font-bold ">
          Start your journey with a free account.
        </h2>
        <div
          className="form-container text-gray-300 flex flex-col gap-4   w-[400px] rounded-2xl 
                  bg-white/10 
                  backdrop-blur-lg 
                  border border-white/20 
                  p-8 text-white shadow-2xl"
        >
          <input
            className="p-3 bg-white/5 border border-white/10 rounded-lg outline-none focus:border-cyan-400 transition-all"
            type="text"
            placeholder="Enter your username"
          />
          <input
            className="p-3 bg-white/5 border border-white/10 rounded-lg outline-none focus:border-cyan-400 transition-all"
            type="email"
            placeholder="Enter your email"
          />
          <input
            className="p-3 bg-white/5 border border-white/10 rounded-lg outline-none focus:border-cyan-400 transition-all"
            type="password"
            placeholder="Enter your password"
          />
          <button className="p-3 text-lg font-bold text-zinc-950 rounded-lg bg-[#31b8c6] cursor-pointer hover:scale-[1.02] transition-all">
            SUBMIT
          </button>
          <p>
            if you Already have an Account !
            <Link
              to="/login"
              className="text-cyan-400 hover:text-cyan-300 transition-all pl-1"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Register;
