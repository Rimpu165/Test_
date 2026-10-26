
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [login, setLogin] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  // Switch between Login and Signup
  const handleClick = () => {
    setLogin(!login);

    setFormData({
      name: "",
      email: "",
      phone: "",
      password: "",
    });
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Get users from localStorage
    const users = JSON.parse(localStorage.getItem("user")) || [];

    // Signup
    if (!login) {
      if (
        !formData.name.trim() ||
        !formData.email.trim() ||
        !formData.phone.trim() ||
        !formData.password
      ) {
        alert("All fields are required");
        return;
      }

      // Check if email already exists
      const userExists = users.some(
        (user) =>
          user.email.toLowerCase() ===
          formData.email.trim().toLowerCase()
      );

      if (userExists) {
        alert("Email already exists");
        return;
      }

      // Save new user
      const newUser = {
        name: formData.name.trim(),
        email: formData.email.trim().toLowerCase(),
        phone: formData.phone.trim(),
        password: formData.password,
      };

      const updatedUsers = [...users, newUser];

      localStorage.setItem("user", JSON.stringify(updatedUsers));

      alert("Signup successful!");

      // Switch to Login
      setFormData({
        name: "",
        email: "",
        phone: "",
        password: "",
      });

      setLogin(true);
    } 
    
    // Login
    else {
      if (!formData.email.trim() || !formData.password) {
        alert("Email and password are required");
        return;
      }

      // Find matching user in the array
      const user = users.find(
        (user) =>
          user.email.toLowerCase() ===
            formData.email.trim().toLowerCase() &&
          user.password === formData.password
      );

      if (user) {
        alert("Login successful!");

        // Save logged-in user information
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({
            name: user.name,
            email: user.email,
            phone: user.phone,
          })
        );

        navigate("/");
      } else {
        alert("Incorrect email or password");
      }
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
        
        {/* Header */}
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold text-gray-800">
            {login ? "Login" : "Signup"}
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Access your account details
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            
            {/* Name */}
            {!login && (
              <div>
                <label
                  htmlFor="name"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
                />
              </div>
            )}

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>

              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
              />
            </div>

            {/* Phone */}
            {!login && (
              <div>
                <label
                  htmlFor="phone"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Mobile Number
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your mobile number"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
                />
              </div>
            )}

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Password
              </label>

              <input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Additional Options */}
          {login && (
            <div className="mb-6 mt-4 flex items-center justify-between">
              <label className="flex cursor-pointer items-center text-sm text-gray-600">
                <input
                  type="checkbox"
                  className="mr-2 h-4 w-4"
                />
                Remember me
              </label>

              <button
                type="button"
                onClick={() => alert("Please contact support to reset your password.")}
                className="text-sm text-blue-600 hover:underline"
              >
                Forgot password?
              </button>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full rounded-md bg-blue-600 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            {login ? "Login" : "Signup"}
          </button>
        </form>

        {/* Switch Login / Signup */}
        <p className="mt-6 text-center text-sm text-gray-600">
          {login
            ? "Don't have an account? "
            : "Already have an account? "}

          <button
            type="button"
            onClick={handleClick}
            className="font-medium text-blue-600 hover:underline"
          >
            {login ? "Signup" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
