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

    //  Check if passwords match
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    //  Create a new user using Firebase Auth
    newUser(email, password)
      .then((res) => {
        const user = res.user;
        console.log(" User created successfully:", user);

        //  Prepare user data to send to the backend (excluding password)
        const userData = {
          email: user.email,
          uid: user.uid,
        };

        //  Save user data to MongoDB
        axios
          .post("http://localhost:5000/users", userData)
          .then((response) => {
            console.log(" User saved to database:", response.data);
            alert("Account created successfully!");

            //  Logout user after successful signup
            logOut()
              .then(() => {
              
                form.reset();
                //  Redirect user to login page
                navigate("/login");
              })
              .catch((error) => {
                console.error(" Error logging out:", error.message);
              });
          })
          .catch((error) => {
            console.error(" Error saving user to DB:", error.message);
            alert("Failed to save user in database!");
          });
      })
      .catch((err) => {
        console.error(" Error creating user:", err.message);
        alert(err.message);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-purple-50 via-indigo-50 to-pink-50 px-4">
      <div className="flex flex-col lg:flex-row items-center gap-12 w-full max-w-6xl">

        {/* ====== Hero Text Section ====== */}
        <div className="text-center lg:text-left max-w-lg">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500">
            Join <span className="text-indigo-700">MindMate</span>
          </h1>
          <p className="mt-4 text-gray-700">
            Create your MindMate account to start organizing, connecting, and achieving your goals every day. It’s free and easy!
          </p>
        </div>

        {/* ====== Sign Up Form Section ====== */}
        <div className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl w-full max-w-sm p-8 sm:p-10 border border-indigo-100">
          <form onSubmit={handleSignUp} className="space-y-6">

            {/* Email Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-gray-700">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered rounded-xl focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                required
              />
            </div>

            {/* Password Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-gray-700">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="input input-bordered rounded-xl focus:ring-2 focus:ring-pink-400 focus:outline-none"
                required
              />
            </div>

            {/* Confirm Password Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-gray-700">Confirm Password</span>
              </label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm your password"
                className="input input-bordered rounded-xl focus:ring-2 focus:ring-indigo-400 focus:outline-none"
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
              <hr className="border-gray-300 w-full" />
              <span className="text-gray-400 text-sm">or</span>
              <hr className="border-gray-300 w-full" />
            </div>

            {/* Social Sign In Buttons */}
            <div className="flex flex-col gap-3">
              <button
                type="button"
                className="btn btn-outline w-full border-indigo-500 text-indigo-600 hover:bg-indigo-50 rounded-xl"
              >
                Continue with Google
              </button>
              <button
                type="button"
                className="btn btn-outline w-full border-pink-500 text-pink-500 hover:bg-pink-50 rounded-xl"
              >
                Continue with Facebook
              </button>
            </div>

            {/* Login Link */}
            <p className="text-center text-gray-600 text-sm mt-4">
              Already have an account?{" "}
              <a href="/login" className="text-indigo-600 hover:text-pink-500 font-semibold">
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
