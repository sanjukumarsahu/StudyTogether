import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import LoginImage from "../assets/Images/login.jpg";
import CTAButton from "../components/cores/HomePage/CTAButton";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-11/12 max-w-[1200px] mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10 py-10 mt-20">
      {/* Left Side */}
      <div className="w-full md:w-1/2">
        <h2 className="text-3xl text-white font-bold mb-4">Welcome Back</h2>
        <p className="text-gray-300 font-medium text-base mb-2">
          Build skills for today, tomorrow, and beyond.
        </p>
        <i className="text-blue-500 text-base font-semibold mb-6 block">
          Education to future-proof your career.
        </i>

        <form className="mt-4">
          {/* Email Field */}
          <label htmlFor="email" className="text-white text-sm font-medium">
            Email Address <span className="text-red-600">*</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter email address"
            required
            className="w-full p-3 text-white bg-emerald-900 font-semibold mt-1 mb-5 rounded-lg outline-none focus:ring-2 focus:ring-emerald-500"
          />

          {/* Password Field with toggle */}
          <label htmlFor="password" className="text-white text-sm font-medium">
            Password <span className="text-red-600">*</span>
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter password"
              required
              className="w-full p-3 text-white bg-emerald-900 font-semibold mt-1 rounded-lg outline-none focus:ring-2 focus:ring-emerald-500 pr-10"
            />
            <span
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer text-2xl"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {/* Forgot Password */}
          <div className="text-right mb-8 mt-2">
            <Link to="/" className="text-sm text-blue-400 hover:underline">
              Forgot Password?
            </Link>
          </div>

          {/* CTA Button */}
          <button
            type="submit"
            className="text-black bg-amber-500 w-full py-3 cursor-pointer text-xl font-semibold px-4  rounded-lg"
          >
            Login
          </button>
        </form>
      </div>

      {/* Right Side with Light Effect */}
      <div className="w-full md:w-1/2 flex justify-center relative">
        {/* Light Green Glow */}
        <div className="absolute w-96 h-96 bg-green-300 blur-3xl opacity-50 rounded-full -top-15 left-1/2 -translate-x-1/2"></div>

        {/* Image */}
        <img
          src={LoginImage}
          alt="Login"
          className="w-[90%] max-w-sm rounded-lg shadow-lg relative z-10"
        />
      </div>
    </div>
  );
};

export default Login;
