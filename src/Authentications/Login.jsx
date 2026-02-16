import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../Authentications/AuthContext";

const Login = () => {
  const { Login, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [firebaseError, setFirebaseError] = useState("");

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFirebaseError("");

    const form = event.target;
    const email = form.email.value.trim();
    const password = form.password.value;

    let newErrors = {};

    if (!email.endsWith("@gmail.com")) {
      newErrors.email = "Please enter a valid Gmail address";
    }

    if (!passwordRegex.test(password)) {
      newErrors.password =
        "Weak password (8+ chars, upper/lowercase, number & symbol required)";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        const result = await Login(email, password);

        // 🔥 IMPORTANT — reload user
        await result.user.reload();

        if (!result.user.emailVerified) {
          setFirebaseError("Please verify your email before logging in.");
          await logout(); // auto logout if not verified
          return;
        }

        navigate("/");
        form.reset();

      } catch (error) {
        setFirebaseError("Invalid email or password.");
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">

      <div className="bg-white rounded-lg shadow-sm border w-full max-w-md p-8">
        <h1 className="text-2xl text-center mb-8 font-bold">
          Sign in
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">

          <div>
            <input
              type="email"
              name="email"
              placeholder="Email address"
              required
              className="input-style"
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              required
              className="input-style pr-16"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-500"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          {errors.password && <p className="error">{errors.password}</p>}

          {firebaseError && (
            <p className="error text-center">{firebaseError}</p>
          )}

          <button
            type="submit"
            className="w-full bg-gray-900 hover:bg-black text-white font-medium py-3 rounded-full transition"
          >
            Log in
          </button>

          <div className="text-sm text-center">
            <Link to="/forgot-password" className="underline">
              Forget your password?
            </Link>
          </div>

        </form>
      </div>

      <div className="mt-6 w-full max-w-md">
        <Link to="/signup">
          <button className="w-full bg-white border-2 border-gray-300 text-gray-700 font-medium py-3 rounded-full transition">
            Create an account
          </button>
        </Link>
      </div>

      {/* ✅ FIXED STYLE BLOCK */}
      <style>{`
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
