import React from "react";

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="text-center mb-6 sm:mb-8">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
        {heading}
      </h2>

      <p className="text-gray-600 mt-3 sm:mt-4 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed px-4">
        {subHeading}
      </p>
    </div>
  );
};

export default SectionTitle;
