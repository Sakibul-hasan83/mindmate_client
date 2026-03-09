import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import registerLogo from "../assets/Illustration.png"; 
import { AuthContext } from "../Authentications/AuthProvider";
import { updateProfile, sendEmailVerification } from "firebase/auth"; 

const SignUp = () => {
  const { newUser, logout } = useContext(AuthContext);

  const [showPassword, setShowPassword] = useState(false);
  const [firebaseError, setFirebaseError] = useState("");
  const [verifyMessage, setVerifyMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFirebaseError("");
    setVerifyMessage(""); // নতুন সাবমিটের আগে মেসেজ ক্লিয়ার করা
    
    const form = event.target;
    const firstName = form.firstName.value.trim();
    const lastName = form.lastName.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    if (password !== confirmPassword) {
      setFirebaseError("Passwords do not match");
      return;
    }

    try {
      setLoading(true);
      
      // ১. Firebase-এ ইউজার তৈরি করা
      const result = await newUser(email, password);
      
      // ২. ভেরিফিকেশন মেইল পাঠানো
      await sendEmailVerification(result.user);
      
      // ৩. প্রোফাইল নাম আপডেট করা
      await updateProfile(result.user, {
        displayName: `${firstName} ${lastName}`,
      });

      // ৪. ইউজারকে লগআউট করিয়ে দেওয়া যাতে ভেরিফাই না করা পর্যন্ত ঢুকতে না পারে
      await logout();
      
      setVerifyMessage("📩 Account created! Please check your email to verify.");
      form.reset();
    } catch (error) {
      console.error(error); // কনসোলে এরর চেক করুন
      setFirebaseError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 font-sans">
      <div className="w-full max-w-[1000px] bg-white rounded-3xl p-8 lg:p-16 flex flex-col lg:flex-row items-center gap-16 border border-gray-50 shadow-sm">
        
        <div className="flex-1 w-full max-w-md">
          <div className="mb-10 text-left">
            <div className="w-14 h-14 bg-[#d1d5db] rounded-full mb-8"></div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Create an account</h1>
            <p className="text-[15px] text-gray-600">
              Already have an account? <Link to="/login" className="text-black font-semibold underline decoration-1 underline-offset-4">Log in</Link>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-medium text-gray-700">First name</label>
                <input name="firstName" required className="border border-gray-300 rounded-md p-3 text-sm outline-none focus:border-[#14b8a6] focus:ring-1 focus:ring-[#14b8a6]" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-medium text-gray-700">Last name</label>
                <input name="lastName" required className="border border-gray-300 rounded-lg p-3 text-sm outline-none focus:border-[#14b8a6] focus:ring-1 focus:ring-[#14b8a6]" />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-medium text-gray-700">Email address</label>
              <input name="email" type="email" required className="border border-gray-300 rounded-md p-3 text-sm outline-none focus:border-[#14b8a6] focus:ring-1 focus:ring-[#14b8a6]" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-medium text-gray-700">Password</label>
                <input name="password" type={showPassword ? "text" : "password"} required className="border border-gray-300 rounded-md p-3 text-sm outline-none focus:border-[#14b8a6] focus:ring-1 focus:ring-[#14b8a6]" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-medium text-gray-700">Confirm your password</label>
                <input name="confirmPassword" type={showPassword ? "text" : "password"} required className="border border-gray-300 rounded-md p-3 text-sm outline-none focus:border-[#14b8a6] focus:ring-1 focus:ring-[#14b8a6]" />
              </div>
            </div>

            <div className="flex items-center gap-3 mt-4">
              <input type="checkbox" id="show" onChange={() => setShowPassword(!showPassword)} className="w-4 h-4 rounded border-gray-300 text-[#14b8a6] focus:ring-[#14b8a6]" />
              <label htmlFor="show" className="text-[13px] text-gray-700 cursor-pointer">Show password</label>
            </div>

            <div className="pt-6 flex flex-col items-start gap-6">
              <button type="submit" disabled={loading} className="w-full lg:w-auto px-12 bg-[#14b8a6] hover:bg-[#0d9488] text-white font-bold py-3.5 rounded-full transition-all duration-300 text-[15px] shadow-sm">
                {loading ? "Creating..." : "Create an account"}
              </button>
              <Link to="/login" className="text-[14px] text-black font-semibold underline decoration-1 underline-offset-4">log in instead</Link>
            </div>
          </form>

          {verifyMessage && <p className="mt-6 text-teal-600 text-sm font-medium bg-teal-50 p-3 rounded-lg text-center">{verifyMessage}</p>}
          {firebaseError && <p className="mt-6 text-red-500 text-sm font-medium bg-red-50 p-3 rounded-lg text-center">{firebaseError}</p>}
        </div>

        <div className="flex-1 hidden lg:flex justify-center items-center">
          <img src={registerLogo} alt="Illustration" className="max-w-[450px] w-full h-auto object-contain" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;