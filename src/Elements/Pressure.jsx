import React from "react";
import SectionTitle from "../ShareElements/SectionTitle";

// Import your assets
import presure1 from "../assets/presure1.png";
import presure2 from "../assets/presure2.png";
import presure3 from "../assets/presure3.png";
import presure4 from "../assets/presure4.png";
import presure5 from "../assets/presure5.png";
import presure6 from "../assets/persure6.png";
import arrow from "../assets/Arrow 1.png";

const cards = [
  { title: "University pressure is real. And you are not alone.", img: presure1 },
  { title: "Speak Freely. Without Judgment.", img: presure2 },
  { title: "Not a Generic Website. Built Specifically for Students.", img: presure3 },
  { title: "Support When You Need It—even at 3 AM.", img: presure4 },
  { title: "Not Just Kind Words. Science-Backed Support.", img: presure5 },
  { title: "Your Privacy Is Our Number One Priority.", img: presure6 },
];

const Pressure = () => {
  return (
    /* Changed bg-white to support dark mode */
    <div className="py-16 bg-white dark:bg-[#0f172a] px-4 transition-colors duration-300">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <SectionTitle
          heading="University pressure is real. You're not alone."
          subHeading="Supporting Students Through Stress, Anxiety, and the Challenges of Modern Academic Life."
        />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col gap-6">
        {/* ROW 1: 2 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-0 md:px-20">
          {cards.slice(0, 2).map((card, i) => (
            <Card key={i} title={card.title} img={card.img} />
          ))}
        </div>

        {/* ROW 2: 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.slice(2, 5).map((card, i) => (
            <Card key={i} title={card.title} img={card.img} />
          ))}
        </div>

        {/* ROW 3: 1 Card (Centered) */}
        <div className="flex justify-center">
          <div className="w-full md:w-1/3">
             <Card title={cards[5].title} img={cards[5].img} />
          </div>
        </div>
      </div>
    </div>
  );
};

const Card = ({ title, img }) => {
  return (
    /* Updated Card: 
       - Light Mode: bg-[#F3F4F1] with black shadow
       - Dark Mode: bg-[#1e293b] with teal-500 shadow or darker border
    */
    <div className="bg-[#F3F4F1] dark:bg-[#1e293b] border-2 border-black dark:border-gray-700 rounded-[40px] p-8 flex justify-between items-center shadow-[0px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[0px_6px_0px_0px_rgba(20,184,166,0.5)] hover:shadow-none transition-all h-full min-h-[180px]">
      
      {/* Left Side: Content */}
      <div className="flex flex-col justify-between h-full gap-6 max-w-[60%]">
        <h3 className="text-lg font-bold leading-tight">
          {/* Highlighted text: Adjusted background for dark mode readability */}
          <span className="bg-[#B1FF33] dark:bg-teal-500 text-black dark:text-white px-2 py-0.5 rounded-sm transition-colors">
            {title}
          </span>
        </h3>
        
        <button className="flex items-center gap-3 group">
          {/* Black Circle with Green Arrow Icon */}
          <div className="w-10 h-10 rounded-full bg-black dark:bg-teal-500 flex items-center justify-center transition-transform group-hover:rotate-45">
            <img 
              src={arrow} 
              alt="arrow" 
              className="w-5 h-5" 
              style={{ filter: 'invert(87%) sepia(45%) saturate(1224%) hue-rotate(36deg) brightness(105%) contrast(105%)' }} 
            />
          </div>
          <span className="font-bold text-black dark:text-white text-lg transition-colors">Learn more</span>
        </button>
      </div>

      {/* Right Side: Image */}
      <div className="w-28 h-28 flex items-center justify-center">
        {/* Images might need slight brightness adjustment in dark mode if they are too dark */}
        <img src={img} alt="" className="max-w-full max-h-full object-contain dark:brightness-110 transition-all" />
      </div>
    </div>
  );
};

export default Pressure;