import React from "react";
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
    <div className="py-16 bg-white px-4">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold leading-tight">
          University pressure is real. You're not alone.
        </h2>
        <p className="text-gray-600 mt-3 text-sm md:text-base">
          Supporting Students Through Stress, Anxiety, and the Challenges of Modern Academic Life.
        </p>
      </div>

      {/* Layout */}
      <div className="mt-14 flex flex-col items-center gap-10 w-full">

        {/* TOP — 2 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-5xl">
          {cards.slice(0, 2).map((data, i) => (
            <Card key={i} title={data.title} img={data.img} />
          ))}
        </div>

        {/* MIDDLE — 3 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          {cards.slice(2, 5).map((data, i) => (
            <Card key={i} title={data.title} img={data.img} />
          ))}
        </div>

        {/* BOTTOM — 1 Card */}
        <div className="flex justify-center w-full">
          <Card title={cards[5].title} img={cards[5].img} />
        </div>
      </div>
    </div>
  );
};

const Card = ({ title, img }) => {
  return (
    <div className="w-full max-w-[350px] min-h-[260px] bg-white border rounded-3xl shadow-md 
    hover:shadow-xl transition-all p-6 flex flex-col justify-between hover:-translate-y-1">

      {/* Title */}
      <p className="font-semibold text-gray-900 text-sm leading-snug md:text-base">
        <span className="bg-lime-200 px-1 rounded">
          {title}
        </span>
      </p>

      {/* FIXED CLEAN IMAGE */}
      <div className="w-full h-36 rounded-xl bg-white overflow-hidden flex items-center justify-center mt-3">
        <img 
          src={img} 
          alt={title} 
          className="w-full h-full object-contain"
        />
      </div>

      {/* Learn More Button */}
      <button className="flex items-center gap-2 text-black font-medium mt-4 group">
        <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center 
        transition-transform group-hover:scale-110">
          <img src={arrow} alt="arrow" className="w-4 h-4 group-hover:translate-x-1 transition" />
        </div>
        <span className="text-sm md:text-base">Learn more</span>
      </button>
    </div>
  );
};

export default Pressure;
