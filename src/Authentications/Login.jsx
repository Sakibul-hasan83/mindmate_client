import React, { useState } from 'react';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    const user = { email, password };
    console.log('Login attempted with:', user);
    
    // Add your login logic here
    // Example: API call, authentication, etc.
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      {/* Avatar Circle */}
      <div className="w-16 h-16 bg-gray-300 rounded-full mb-6"></div>

      {/* Sign In Card */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 w-full max-w-md p-8">
        <h1 className="text-2xl text-center mb-8 font-bold">Sign in</h1>

        <div className="space-y-4">
          {/* Email/Phone Input */}
          <div>
            <label htmlFor="email" className="block text-sm text-gray-600 mb-2">
              Email or mobile phone number
            </label>
            <input
              type="text"
              id="email"
              name="email"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-sm text-gray-600 mb-2">
              Your password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-gray-500 hover:text-gray-700"
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>

          {/* Log In Button */}
          <button
            onClick={handleSubmit}
            className="w-full bg-gray-300 hover:bg-gray-400 text-gray-700 font-medium py-3 rounded-full transition-colors"
          >
            Log in
          </button>

          {/* Terms Text */}
          <p className="text-xs text-center text-gray-600">
            By continuing, you agree to the{' '}
            <a href="#" className="underline font-medium hover:text-gray-800">
              Terms of use
            </a>{' '}
            and{' '}
            <a href="#" className="underline font-medium hover:text-gray-800">
              Privacy Policy
            </a>
            .
          </p>

          {/* Help Links */}
          <div className="flex justify-between text-sm pt-2">
            <a href="#" className="text-gray-700 underline font-medium hover:text-gray-900">
              Other issue with sign in
            </a>
            <a href="#" className="text-gray-700 font-medium underline  hover:text-gray-900">
              Forget your password
            </a>
          </div>
        </div>
      </div>

      {/* New User Section */}
      <div className="mt-8 w-full max-w-md">
        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-gray-50 text-gray-500">
              New to our community
            </span>
          </div>
        </div>

        <a href="/signup" className="block">
          <button className="w-full bg-white hover:bg-gray-50 border-2 border-gray-300 text-gray-700 font-medium py-3 rounded-full transition-colors">
            Create an account
          </button>
        </a>
      </div>

      {/* Footer Links */}
      <div className="mt-12 flex gap-6 text-xs text-gray-500">
        <a href="#" className="hover:underline">Help Center</a>
        <a href="#" className="hover:underline">Terms of Service</a>
        <a href="#" className="hover:underline">Privacy Policy</a>
        <span>@2022gamliudesign</span>
      </div>
    </div>
  );
};

export default Login;