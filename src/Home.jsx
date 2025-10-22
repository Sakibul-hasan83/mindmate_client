import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-base-100 dark:bg-gray-900 text-base-content dark:text-gray-200 transition-colors duration-300 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to MindMate</h1>
      <p className="text-lg text-center max-w-xl">
        Empowering your mental well-being with positivity and knowledge.
        Toggle the switch in the Navbar to see Dark/Light mode in action!
      </p>
    </div>
  );
}

export default Home;
