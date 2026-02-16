import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  // Strong password regex
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const email = form.email.value.trim();
    const password = form.password.value;

    let newErrors = {};

    // Gmail validation
    if (!email.endsWith("@gmail.com")) {
      newErrors.email = "Please enter a valid Gmail address";
    }

    // Password validation
    if (!passwordRegex.test(password)) {
      newErrors.password =
        "Weak password (8+ chars, upper/lowercase, number & symbol required)";
    }

    setErrors(newErrors);

    // Success
    if (Object.keys(newErrors).length === 0) {
      const user = { email, password };
      console.log("Login attempted with:", user);

      alert("✅ Login successful!");
      form.reset();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">

      {/* Avatar */}
      <div className="w-16 h-16 bg-gray-300 rounded-full mb-6"></div>

      {/* Sign In Card */}
      <div className="bg-white rounded-lg shadow-sm border w-full max-w-md p-8">

        <h1 className="text-2xl text-center mb-8 font-bold">
          Sign in
        </h1>

        <form onSubmit={handleSubmit} autoComplete="off" className="space-y-4">

          {/* Email */}
          <div>
            <label className="block text-sm text-gray-600 mb-2">
              Email address
            </label>

            <input
              type="email"
              name="email"
              autoComplete="off"
              defaultValue=""
              required
              className="input-style"
            />

            {errors.email && (
              <p className="error">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm text-gray-600 mb-2">
              Your password
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                autoComplete="new-password"
                defaultValue=""
                required
                className="input-style pr-16"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-500 hover:text-gray-700"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            {errors.password && (
              <p className="error">{errors.password}</p>
            )}
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-gray-900 hover:bg-black text-white font-medium py-3 rounded-full transition"
          >
            Log in
          </button>

          {/* Terms */}
          <p className="text-xs text-center text-gray-600">
            By continuing, you agree to the{" "}
            <span className="underline font-medium cursor-pointer">
              Terms of use
            </span>{" "}
            and{" "}
            <span className="underline font-medium cursor-pointer">
              Privacy Policy
            </span>
            .
          </p>

          {/* Help Links */}
          <div className="flex justify-between text-sm pt-2">
            <span className="underline cursor-pointer hover:text-gray-900">
              Other issue with sign in
            </span>

            <span className="underline cursor-pointer hover:text-gray-900">
              Forget your password
            </span>
          </div>

        </form>
      </div>

      {/* New User */}
      <div className="mt-8 w-full max-w-md">

        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t"></div>
          </div>

          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-gray-50 text-gray-500">
              New to our community
            </span>
          </div>
        </div>

        <Link to="/signup">
          <button className="w-full bg-white hover:bg-gray-50 border-2 border-gray-300 text-gray-700 font-medium py-3 rounded-full transition">
            Create an account
          </button>
        </Link>

      </div>

      {/* Footer */}
      <div className="mt-12 flex gap-6 text-xs text-gray-500">
        <span className="hover:underline cursor-pointer">
          Help Center
        </span>

        <span className="hover:underline cursor-pointer">
          Terms of Service
        </span>

        <span className="hover:underline cursor-pointer">
          Privacy Policy
        </span>

        <span>@2025mindmate</span>
      </div>

      {/* Styles */}
      <style jsx>{`
        .input-style {
          width: 100%;
          padding: 12px;
          border: 1px solid #d1d5db;
          border-radius: 8px;
          outline: none;
        }

        .input-style:focus {
          border-color: black;
        }

        .error {
          color: red;
          font-size: 12px;
          margin-top: 4px;
        }
      `}</style>

    </div>
  );
};

export default Login;
