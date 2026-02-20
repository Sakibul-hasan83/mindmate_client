import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import registerLogo from "../assets/Illustration.png";
import AuthContext from "../Authentications/AuthContext";

const SignUp = () => {
  const { newUser, logout } = useContext(AuthContext);

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [firebaseError, setFirebaseError] = useState("");
  const [verifyMessage, setVerifyMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

  const handleSubmit = async (event) => {
    event.preventDefault();

    setFirebaseError("");
    setErrors({});
    setVerifyMessage("");

    const form = event.target;
    const email = form.email.value.trim();
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    let newErrors = {};

    // Email validation
    if (!email.endsWith("@gmail.com")) {
      newErrors.email = "Please enter a valid Gmail address";
    }

    // Password validation
    if (!passwordRegex.test(password)) {
      newErrors.password =
        "Password must be 8+ chars with uppercase, lowercase, number & symbol";
    }

    // Confirm password validation
    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length !== 0) return;

    try {
      setLoading(true);

      await newUser(email, password);

      // logout after account creation
      await logout();

      setVerifyMessage(
        "📩 Account created! Please check your email and verify before logging in."
      );

      form.reset();

    } catch (error) {
      console.log("Firebase Error:", error.code);

      switch (error.code) {
        case "auth/email-already-in-use":
          setFirebaseError("This email is already registered. Please login.");
          break;

        case "auth/invalid-email":
          setFirebaseError("Invalid email format.");
          break;

        case "auth/weak-password":
          setFirebaseError("Password is too weak.");
          break;

        case "auth/too-many-requests":
          setFirebaseError(
            "Too many attempts. Please wait a few minutes and try again."
          );
          break;

        default:
          setFirebaseError("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-sm w-full max-w-4xl p-12">
        <form onSubmit={handleSubmit} autoComplete="off">
          <div className="flex gap-12">
            <div className="flex-1">
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

                <div>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
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
                    placeholder="Confirm password"
                    required
                    className="input-style"
                  />
                  {errors.confirmPassword && (
                    <p className="error">{errors.confirmPassword}</p>
                  )}
                </div>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    onChange={() => setShowPassword(!showPassword)}
                  />
                  Show password
                </label>

                {firebaseError && (
                  <p className="error text-center">{firebaseError}</p>
                )}

                {verifyMessage && (
                  <div className="bg-green-100 text-green-700 p-3 rounded text-sm">
                    {verifyMessage}
                  </div>
                )}
              </div>
            </div>

            <div className="hidden lg:flex flex-1 justify-center items-center">
              <img
                src={registerLogo}
                alt="Register"
                className="w-[360px] h-[360px] object-contain"
              />
            </div>
          </div>

          <div className="flex justify-center pt-8">
            <button
              type="submit"
              disabled={loading}
              className="bg-gray-900 hover:bg-black text-white py-3 px-16 rounded-full transition disabled:opacity-50"
            >
              {loading ? "Creating..." : "Create an account"}
            </button>
          </div>
        </form>
      </div>

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

export default SignUp;
