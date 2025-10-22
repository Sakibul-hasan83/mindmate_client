import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "./AuthContext";

const Login = () => {
  const { loginUser } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then((res) => {
        console.log(res.user);
        alert("Successfully Login");
      })
      .catch((err) => {
        alert("User not Login: " + err.message);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100 dark:bg-gray-900 text-base-content dark:text-gray-200 px-4 transition-colors duration-300">
      <div className="flex flex-col lg:flex-row-reverse items-center gap-12 w-full max-w-6xl">

        {/* Hero Text */}
        <div className="text-center lg:text-left max-w-lg">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500">
            Welcome to <span className="text-indigo-700 dark:text-indigo-400">MindMate</span>
          </h1>
          <p className="mt-4 text-gray-700 dark:text-gray-300">
            Log in to your MindMate account and continue your journey towards better productivity and connection. Stay inspired and organized every day.
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-base-100 dark:bg-gray-800/95 backdrop-blur-lg rounded-3xl shadow-2xl w-full max-w-sm p-8 sm:p-10 border border-gray-200 dark:border-gray-700 transition-colors duration-300">
          <form onSubmit={handleLogin} className="space-y-6">

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
              <label className="label">
                <a
                  href="#"
                  className="text-indigo-500 dark:text-indigo-400 hover:text-pink-500 dark:hover:text-pink-400 link link-hover transition-colors"
                >
                  Forgot password?
                </a>
              </label>
            </div>

            {/* Login Button */}
            <div className="form-control mt-4">
              <button className="btn w-full bg-gradient-to-r from-indigo-600 to-pink-500 text-white border-none rounded-xl hover:scale-[1.04] hover:shadow-lg transition-all duration-300">
                Log In
              </button>
            </div>

            {/* Or Divider */}
            <div className="flex items-center justify-center gap-3 my-2">
              <hr className="border-gray-300 dark:border-gray-600 w-full" />
              <span className="text-gray-400 dark:text-gray-500 text-sm">or</span>
              <hr className="border-gray-300 dark:border-gray-600 w-full" />
            </div>

            {/* Social Login Buttons */}
            <div className="flex flex-col gap-3">
              <button className="btn btn-outline w-full border-indigo-500 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-700/40 rounded-xl transition-colors">
                Continue with Google
              </button>
              <button className="btn btn-outline w-full border-pink-500 text-pink-500 dark:text-pink-400 dark:border-pink-400 hover:bg-pink-50 dark:hover:bg-pink-700/40 rounded-xl transition-colors">
                Continue with Facebook
              </button>
            </div>

            {/* Register Link */}
            <p className="text-center text-gray-600 dark:text-gray-300 text-sm mt-4">
              Don’t have an account?{" "}
              <Link
                to="/signup"
                className="text-indigo-600 dark:text-indigo-400 hover:text-pink-500 dark:hover:text-pink-400 font-semibold transition-colors"
              >
                Register Now
              </Link>
            </p>

          </form>
        </div>

      </div>
    </div>
  );
};

export default Login;
