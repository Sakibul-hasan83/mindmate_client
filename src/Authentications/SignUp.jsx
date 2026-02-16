import React, { useState } from "react";
import { Link } from "react-router-dom";
import registerLogo from "../assets/Illustration.png";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  // Strong password regex
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const firstName = form.firstName.value.trim();
    const lastName = form.lastName.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    let newErrors = {};

    // Gmail validation
    if (!email.endsWith("@gmail.com")) {
      newErrors.email = "Please enter a valid Gmail address";
    }

    // Strong password validation
    if (!passwordRegex.test(password)) {
      newErrors.password =
        "Password must be 8+ chars with uppercase, lowercase, number & symbol";
    }

    // Confirm password match
    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);

    // Success
    if (Object.keys(newErrors).length === 0) {
      const user = { firstName, lastName, email, password };
      console.log(user);

      alert("✅ Account created successfully!");
      form.reset();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-sm w-full max-w-4xl p-12 relative">

        {/* FORM */}
        <form onSubmit={handleSubmit} autoComplete="off">

          <div className="flex gap-12">

            {/* LEFT FORM */}
            <div className="flex-1">

              <div className="w-12 h-12 rounded-full bg-gray-300 mb-6"></div>

              <h1 className="text-3xl font-semibold mb-2">
                Create an account
              </h1>

              <p className="text-sm text-gray-600 mb-8">
                Already have an account?{" "}
                <Link to="/login" className="underline font-medium">
                  Log in
                </Link>
              </p>

              <div className="space-y-5">

                {/* Name */}
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstName"
                    autoComplete="off"
                    defaultValue=""
                    placeholder="First name"
                    required
                    className="input-style"
                  />

                  <input
                    type="text"
                    name="lastName"
                    autoComplete="off"
                    defaultValue=""
                    placeholder="Last name"
                    required
                    className="input-style"
                  />
                </div>

                {/* Email */}
                <div>
                  <input
                    type="email"
                    name="email"
                    autoComplete="off"
                    defaultValue=""
                    placeholder="Email address"
                    required
                    className="input-style"
                  />
                  {errors.email && (
                    <p className="error">{errors.email}</p>
                  )}
                </div>

                {/* Password */}
                <div className="grid grid-cols-2 gap-4">

                  <div>
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      autoComplete="new-password"
                      defaultValue=""
                      placeholder="Password"
                      required
                      className="input-style"
                    />
                    {errors.password && (
                      <p className="error">{errors.password}</p>
                    )}
                  </div>

                  <div>
                    <input
                      type={showPassword ? "text" : "password"}
                      name="confirmPassword"
                      autoComplete="new-password"
                      defaultValue=""
                      placeholder="Confirm password"
                      required
                      className="input-style"
                    />
                    {errors.confirmPassword && (
                      <p className="error">{errors.confirmPassword}</p>
                    )}
                  </div>

                </div>

                <p className="text-xs text-gray-500">
                  Use 8+ characters with uppercase, lowercase, number & symbol
                </p>

                {/* Show password */}
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    onChange={() => setShowPassword(!showPassword)}
                  />
                  Show password
                </label>

              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="hidden lg:flex flex-1 justify-center items-center">
              <img
                src={registerLogo}
                alt="Register"
                className="w-[360px] h-[360px] object-contain"
              />
            </div>

          </div>

          {/* BOTTOM */}
          <div className="flex flex-col-reverse lg:grid lg:grid-cols-4 pt-4 gap-4">

            <Link
              to="/login"
              className="underline text-sm text-center lg:text-left"
            >
              Log in instead
            </Link>

            <div className="flex justify-center lg:justify-end lg:col-span-2">
              <button
                type="submit"
                className="bg-gray-900 hover:bg-black text-white py-3 px-16 rounded-full transition"
              >
                Create an account
              </button>
            </div>

          </div>

        </form>

        {/* FOOTER */}
        <div className="absolute bottom-6 left-12 text-sm text-gray-600">
          English (United States)
        </div>

        <div className="absolute bottom-6 right-12 text-sm text-gray-600 flex gap-6">
          <span className="hover:underline">Help</span>
          <span className="hover:underline">Privacy</span>
          <span className="hover:underline">Terms</span>
        </div>

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

export default SignUp;
