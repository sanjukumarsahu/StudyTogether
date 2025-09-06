import React, { useState } from "react";
import SignUpImage from "../assets/Images/signup.webp";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "Student",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleRoleSelect = (role) => {
    setFormData((prev) => ({ ...prev, role }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <div className="w-11/12  max-w-maxContent mx-auto flex flex-col-reverse md:flex-row justify-between items-center gap-10 py-10 lg:px-26">
      {/* Left side */}
      <form
        onSubmit={handleSubmit}
        className="w-full md:w-[55%] flex flex-col gap-6"
      >
        <h2 className="text-3xl text-white font-bold">
          Join the millions learning to code with StudyTogether for free
        </h2>
        <p className="text-lg text-gray-400 font-medium">
          Build skills for today, tomorrow, and beyond.
        </p>
        <i className="text-blue-500 font-semibold text-md">
          Education to future-proof your career.
        </i>

        {/* Role Selector */}
        <div className="bg-emerald-800 py-2 px-3 w-fit rounded-full flex gap-2 text-white text-sm sm:text-base transition-all">
          {["Student", "Instructor"].map((role) => (
            <div
              key={role}
              className={`py-1 px-4 rounded-full cursor-pointer transition-all duration-300 ${
                formData.role === role
                  ? "bg-emerald-950 font-bold"
                  : "hover:bg-emerald-950"
              }`}
              onClick={() => handleRoleSelect(role)}
            >
              {role}
            </div>
          ))}
        </div>

        {/* Name Fields */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex flex-col w-full">
            <label className="text-white mb-1">
              First Name <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="firstName"
              placeholder="Enter first name"
              value={formData.firstName}
              onChange={handleChange}
              className="bg-emerald-800 py-2 px-3 rounded-lg text-white font-medium outline-none focus:ring-2 focus:ring-emerald-500"
              required
            />
          </div>
          <div className="flex flex-col w-full">
            <label className="text-white mb-1">
              Last Name <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="lastName"
              placeholder="Enter last name"
              value={formData.lastName}
              onChange={handleChange}
              className="bg-emerald-800 py-2 px-3 rounded-lg text-white font-medium outline-none focus:ring-2 focus:ring-emerald-500"
              required
            />
          </div>
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label className="text-white mb-1">
            Email <span className="text-red-600">*</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter email address"
            value={formData.email}
            onChange={handleChange}
            className="bg-emerald-800 py-2 px-3 rounded-lg text-white font-medium outline-none focus:ring-2 focus:ring-emerald-500"
            required
          />
        </div>

        {/* Passwords */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex flex-col w-full relative">
            <label className="text-white mb-1">
              Password <span className="text-red-600">*</span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              className="bg-emerald-800 py-2 px-3 rounded-lg text-white font-medium outline-none focus:ring-2 focus:ring-emerald-500"
              required
            />
            <span
              className="absolute right-3 top-10 text-sm text-blue-300 cursor-pointer"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? "Hide" : "Show"}
            </span>
          </div>
          <div className="flex flex-col w-full relative">
            <label className="text-white mb-1">
              Confirm Password <span className="text-red-600">*</span>
            </label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="bg-emerald-800 py-2 px-3 rounded-lg text-white font-medium outline-none focus:ring-2 focus:ring-emerald-500"
              required
            />
            <span
              className="absolute right-3 top-10 text-sm text-blue-300 cursor-pointer"
              onClick={() => setShowConfirmPassword((prev) => !prev)}
            >
              {showConfirmPassword ? "Hide" : "Show"}
            </span>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-yellow-500 py-2 px-5 rounded-lg text-black font-semibold text-lg hover:bg-yellow-400 transition-all w-full sm:w-full cursor-pointer"
        >
          Create Account
        </button>
      </form>

      {/* Right Side Image */}
      <div className="w-full md:w-[45%] flex justify-center items-center">
        <div className="absolute w-96 h-96 bg-green-300 blur-3xl opacity-50 rounded-full  z-0 lg:-right-0.5 lg:top-30  -translate-x-1/2"></div>
        <img
          src={SignUpImage}
          alt="Sign Up"
          className="rounded-xl w-[90%] max-w-md shadow-xl z-10"
        />
      </div>
    </div>
  );
};

export default SignUp;
