import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
// NOTE: Kept curly braces for AuthContext named export to prevent 'null' errors
import { AuthContext } from "../Authentications/AuthProvider"; 

const Login = () => {
  // NOTE: Logic functions remained unchanged to ensure everything works
  const { Login, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [firebaseError, setFirebaseError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFirebaseError("");
    setErrors({});

    const form = event.target;
    const email = form.email.value.trim();
    const password = form.password.value;

    try {
      setLoading(true);
      const result = await Login(email, password);

      // NOTE: Logic for email verification check preserved
      await result.user.reload();

      if (!result.user.emailVerified) {
        setFirebaseError("Please verify your email before logging in.");
        await logout(); 
        return;
      }

      navigate("/");
      form.reset();

    } catch (error) {
      setFirebaseError("Invalid email or password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f3f4f6] flex flex-col items-center justify-center p-4 font-sans">
      
      {/* NOTE: Gray circle logo at the very top as seen in screenshot */}
      <div className="w-16 h-16 bg-[#d1d5db] rounded-full mb-6"></div>

      {/* NOTE: Login Card with specific border and shadow from screenshot */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 w-full max-w-[440px] p-10">
        <h1 className="text-2xl font-bold text-center text-gray-900 mb-8">Sign in</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Email Input Field */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">Email or mobile phone number</label>
            <input 
              name="email" 
              type="email" 
              required 
              defaultValue="sakibvai80@gamil.com"
              className="w-full border border-gray-300 rounded-md p-3 text-sm outline-none focus:border-[#14b8a6] focus:ring-1 focus:ring-[#14b8a6]" 
            />
          </div>

          {/* Password Input Field */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">Your password</label>
            <div className="relative">
              <input 
                name="password" 
                type={showPassword ? "text" : "password"} 
                required 
                className="w-full border border-gray-300 rounded-md p-3 text-sm outline-none focus:border-[#14b8a6] focus:ring-1 focus:ring-[#14b8a6]" 
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-500 hover:text-gray-700"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {/* Firebase Error Message Display */}
          {firebaseError && (
            <p className="text-red-500 text-xs text-center font-medium bg-red-50 py-2 rounded">
              {firebaseError}
            </p>
          )}

          {/* NOTE: Teal Login Button matching screenshot #14b8a6 */}
          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-[#14b8a6] hover:bg-[#0d9488] text-white font-bold py-3 rounded-full transition duration-300"
          >
            {loading ? "Signing in..." : "Log in"}
          </button>

          {/* Terms and Privacy Text from screenshot */}
          <p className="text-[11px] text-center text-gray-500 px-4">
            By continuing, you agree to the <span className="text-[#14b8a6] cursor-pointer hover:underline">Terms of use</span> and <span className="text-[#14b8a6] cursor-pointer hover:underline">Privacy Policy</span>.
          </p>

          {/* Link Section */}
          <div className="flex justify-between items-center pt-2 text-[13px]">
            <Link to="/issues" className="text-black font-medium underline">Other issue with sign in</Link>
            <Link to="/forgot-password" size="sm" className="text-black font-medium underline">
              Forget your password
            </Link>
          </div>
        </form>
      </div>

      {/* NOTE: "New to our community" divider section */}
      <div className="w-full max-w-[440px] flex items-center gap-4 my-8">
        <div className="flex-1 h-[1px] bg-gray-300"></div>
        <span className="text-xs text-gray-500 whitespace-nowrap">New to our community</span>
        <div className="flex-1 h-[1px] bg-gray-300"></div>
      </div>

      {/* NOTE: White "Create an account" button at the bottom */}
      <div className="w-full max-w-[440px]">
        <Link to="/signup">
          <button className="w-full bg-white border border-gray-300 text-gray-800 font-bold py-3 rounded-full hover:bg-gray-50 transition shadow-sm">
            Create an account
          </button>
        </Link>
      </div>

      {/* FOOTER SECTION: Matching screenshot language and links */}
      <div className="w-full max-w-6xl mt-12 pt-8 border-t border-gray-100 flex justify-between text-xs text-gray-500 px-4">
        <p>English (United States)</p>
        <div className="flex gap-8">
          <a href="#" className="hover:underline">Help</a>
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Terms</a>
        </div>
      </div>
    </div>
  );
};

export default Login;