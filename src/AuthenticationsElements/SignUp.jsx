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

    // 1️⃣ Create user in Firebase
    newUser(email, password)
      .then((res) => {
        const user = res.user;
        console.log("User created successfully:", user);

        // 2️⃣ Prepare user data to save in MongoDB
        const userData = {
          email: user.email,
          uid: user.uid,
          displayName: user.displayName || "", // optional
          photoURL: user.photoURL || "",       // optional
        };

        // 3️⃣ Send POST request to backend
        axios
          .post("https://mindmate-chi.vercel.app/users", userData)
          .then((response) => {
            console.log("User saved to database:", response.data);
            alert("Account created successfully!");

            // 4️⃣ Logout user and navigate to login
            logOut()
              .then(() => {
                form.reset();
                navigate("/login");
              })
              .catch((error) =>
                console.error("Error logging out:", error.message)
              );
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

        {/* Hero Text */}
        <div className="text-center lg:text-left max-w-lg">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500">
            Join <span className="text-indigo-700 dark:text-indigo-400">MindMate</span>
          </h1>
          <p className="mt-4 text-gray-700 dark:text-gray-300">
            Create your MindMate account to start organizing, connecting, and achieving your goals every day. It’s free and easy!
          </p>
        </div>

        {/* Sign Up Form */}
        <div className="bg-base-100 dark:bg-gray-800/95 backdrop-blur-lg rounded-3xl shadow-2xl w-full max-w-sm p-8 sm:p-10 border border-gray-200 dark:border-gray-700 transition-colors duration-300">
          <form onSubmit={handleSignUp} className="space-y-6">
            {/* Email */}
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

            {/* Password */}
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

            {/* Confirm Password */}
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
