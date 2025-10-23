import React, { useContext } from "react";
import AuthContext from "./AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const { newUser, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    newUser(email, password)
      .then((res) => {
        const user = res.user;
        console.log("User created successfully:", user);

        const userData = { email: user.email, uid: user.uid };

        axios
          .post("https://your-backend-name.vercel.app/jobs", userData)
          .then((response) => {
            console.log("User saved to database:", response.data);
            alert("Account created successfully!");

            logOut()
              .then(() => {
                form.reset();
                navigate("/login");
              })
              .catch((error) => console.error("Error logging out:", error.message));
          })
          .catch((error) => {
            console.error("Error saving user to DB:", error.message);
            alert("Failed to save user in database!");
          });
      })
      .catch((err) => {
        console.error("Error creating user:", err.message);
        alert(err.message);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100 dark:bg-gray-900 text-base-content dark:text-gray-200 px-4 transition-colors duration-300">
      <div className="flex flex-col lg:flex-row items-center gap-12 w-full max-w-6xl">

        {/* ====== Hero Text Section ====== */}
        <div className="text-center lg:text-left max-w-lg">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500">
            Join <span className="text-indigo-700 dark:text-indigo-400">MindMate</span>
          </h1>
          <p className="mt-4 text-gray-700 dark:text-gray-300">
            Create your MindMate account to start organizing, connecting, and achieving your goals every day. It’s free and easy!
          </p>
        </div>

        {/* ====== Sign Up Form Section ====== */}
        <div className="bg-base-100 dark:bg-gray-800/95 backdrop-blur-lg rounded-3xl shadow-2xl w-full max-w-sm p-8 sm:p-10 border border-gray-200 dark:border-gray-700 transition-colors duration-300">
          <form onSubmit={handleSignUp} className="space-y-6">

            {/* Email Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered rounded-xl focus:ring-2 focus:ring-indigo-400 focus:outline-none dark:bg-gray-700 dark:text-gray-200"
                required
              />
            </div>

            {/* Password Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="input input-bordered rounded-xl focus:ring-2 focus:ring-pink-400 focus:outline-none dark:bg-gray-700 dark:text-gray-200"
                required
              />
            </div>

            {/* Confirm Password Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Confirm Password</span>
              </label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm your password"
                className="input input-bordered rounded-xl focus:ring-2 focus:ring-indigo-400 focus:outline-none dark:bg-gray-700 dark:text-gray-200"
                required
              />
            </div>

            {/* Sign Up Button */}
            <div className="form-control mt-4">
              <button className="btn w-full bg-gradient-to-r from-indigo-600 to-pink-500 text-white border-none rounded-xl hover:scale-[1.04] hover:shadow-lg transition-all duration-300">
                Sign Up
              </button>
            </div>

            {/* Divider */}
            <div className="flex items-center justify-center gap-3 my-2">
              <hr className="border-gray-300 dark:border-gray-600 w-full" />
              <span className="text-gray-400 dark:text-gray-500 text-sm">or</span>
              <hr className="border-gray-300 dark:border-gray-600 w-full" />
            </div>

            {/* Social Sign In Buttons */}
            <div className="flex flex-col gap-3">
              <button
                type="button"
                className="btn btn-outline w-full border-indigo-500 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-700/40 rounded-xl transition-colors"
              >
                Continue with Google
              </button>
              <button
                type="button"
                className="btn btn-outline w-full border-pink-500 text-pink-500 dark:text-pink-400 dark:border-pink-400 hover:bg-pink-50 dark:hover:bg-pink-700/40 rounded-xl transition-colors"
              >
                Continue with Facebook
              </button>
            </div>

            {/* Login Link */}
            <p className="text-center text-gray-600 dark:text-gray-300 text-sm mt-4">
              Already have an account?{" "}
              <a
                href="/login"
                className="text-indigo-600 dark:text-indigo-400 hover:text-pink-500 dark:hover:text-pink-400 font-semibold"
              >
                Log In
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
