import React, { useState } from "react";
import registerLogo from '../assets/Illustration.png';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    // Validate passwords match
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    const user = { firstName, lastName, email, password };
    console.log(user);

    // Here you can add your API call or any other logic
    alert("Account created successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-sm w-full max-w-4xl p-12 relative">
        <div className="flex gap-12">
          {/* Left Section - Form */}
          <div className="flex-1">
            <div className="w-12 h-12 rounded-full bg-gray-300 mb-6"></div>

            <h1 className="text-3xl font-semibold text-gray-900 mb-2">Create an account</h1>
            <p className="text-sm text-gray-600 mb-8">
              Already have an account?{" "}
              <a href="#" className="text-gray-900 underline font-medium">Log in</a>
            </p>

            {/* Form */}
            <div className="space-y-5">
              
              {/* First Name & Last Name */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-xs text-gray-600 mb-2">First name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-xs text-gray-600 mb-2">Last name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-xs text-gray-600 mb-2">Email address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                />
              </div>

              {/* Password & Confirm Password */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="password" className="block text-xs text-gray-600 mb-2">Password</label>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="confirmPassword" className="block text-xs text-gray-600 mb-2">Confirm your password</label>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="confirmPassword"
                    name="confirmPassword"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                  />
                </div>
              </div>

              <p className="text-xs text-gray-500">
                Use 8 or more characters with a mix of letters, numbers & symbols
              </p>

              {/* Show Password Checkbox */}
              <label className="flex items-center gap-2 text-sm cursor-pointer">
                <input
                  type="checkbox"
                  checked={showPassword}
                  onChange={() => setShowPassword(!showPassword)}
                  className="w-4 h-4 border-2 border-gray-900 rounded cursor-pointer"
                />
                <span className="text-gray-900">Show password</span>
              </label>

            </div>
          </div>

          {/* Right Section - Illustration */}
          <div className="hidden lg:flex flex-col justify-center items-center flex-1">
            <img 
              src={registerLogo} 
              alt="Register Illustration" 
              className="w-[360px] h-[360px] object-contain mt-8"
            />
          </div>
        </div>

        {/* Log in instead link & Submit Button - Responsive */}
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-4  lg:items-center pt-2 gap-4 ">
          {/* Log in instead - Left on lg, Bottom on sm/md */}
       <div>
           <a href="#" className="text-sm text-gray-900 underline text-center lg:text-left">
            log in instead
          </a>
       </div>

          {/* Create an account button - Center on all screens, Right on lg */}
          <div className="flex justify-center lg:justify-end lg:col-span-2">
            <button
              onClick={handleSubmit}
              className="bg-gray-300 md:mr-10 hover:bg-gray-400 text-white py-3 px-16 rounded-full transition-colors sm:w-auto"
            >
              Create an account
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6">
          <div className="absolute bottom-6 left-12 text-sm text-gray-600 flex gap-6">
            <span>English (United States)</span>
          </div>
          
          <div className="absolute bottom-6 right-12 text-sm text-gray-600 flex gap-6">
            <a href="#" className="hover:underline">Help</a>
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Terms</a>
          </div> 
        </div>

      </div>
    </div>
  );
};

export default SignUp;