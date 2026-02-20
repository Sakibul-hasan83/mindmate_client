import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ShareElements/SectionTitle';

const MindMateCommunity = () => {
  const testimonials = [
    { id: 1, text: "Finally, someone to talk to at 3 AM", details: "MindMate has been a lifesaver. It feels like real support, 24/7.", author: "Alex M", role: "Marketing", rating: 5, avatar: "A" },
    { id: 2, text: "More than a chatbot", details: "It recognized tears in my words instantly and offered real tools.", author: "Anna Davey", role: "Designer", rating: 5, avatar: "A" },
    { id: 3, text: "I realized I wasn't alone", details: "I connected with another student going through the same thing.", author: "Sophie More", role: "Student", rating: 5, avatar: "S" },
    { id: 4, text: "Improved my sleep schedule", details: "The chatbot gave me practical tools on 'sleep hygiene'.", author: "Mary Cott", role: "Entrepreneur", rating: 5, avatar: "M" },
    { id: 5, text: "A truly safe space", details: "The anonymous forum gave me a place to share without judgment.", author: "Michel O'Neill", role: "Student", rating: 5, avatar: "M" },
    { id: 6, text: "AI identified my triggers!", details: "Seeing the patterns laid out was the first step to managing it.", author: "Jolana Irmin", role: "Founder", rating: 5, avatar: "J" },
    { id: 7, text: "Understand my mood swings", details: "The AI insight feature pointed out my 'Sunday Scaries' pattern.", author: "Dani Dowelr", role: "Student", rating: 5, avatar: "D" },
    { id: 8, text: "Accessibility in design", details: "As someone with ADHD, I appreciate how clean the UI is.", author: "Ellie Cones", role: "Student", rating: 5, avatar: "E" }
  ];

  // Duplicating items to ensure a seamless "gapless" loop
  const row1 = [...testimonials.slice(0, 4), ...testimonials.slice(0, 4)];
  const row2 = [...testimonials.slice(4, 8), ...testimonials.slice(4, 8)];
  const row3 = [...testimonials, ...testimonials];

  const MarqueeRow = ({ items, direction = "left", speed = 20 }) => (
    <div className="flex overflow-hidden mb-6">
      <motion.div
        className="flex gap-6 flex-nowrap"
        animate={{
          // Moving by -50% ensures that the second half of the duplicated list 
          // perfectly replaces the first half, creating an infinite loop.
          x: direction === "left" ? [0, "-50%"] : ["-50%", 0],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
        style={{ width: "max-content" }}
      >
        {items.map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className="w-[300px] sm:w-[350px] bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex-shrink-0"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center text-white font-bold">
                  {item.avatar}
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">{item.author}</p>
                  <p className="text-xs text-gray-400">{item.role || "Student"}</p>
                </div>
              </div>
              <div className="text-yellow-400 text-sm">⭐⭐⭐⭐⭐</div>
            </div>
            <h3 className="font-bold text-gray-900 mb-2 text-sm italic">"{item.text}"</h3>
            <p className="text-xs text-gray-500 leading-relaxed line-clamp-3">{item.details}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );

  return (
    <div className="bg-gray-50 py-12 sm:py-20 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <SectionTitle 
          subHeading={"MindMate Community 👋"}
          heading={"See how MindMate is helping students find balance."} 
        />
      </div>

      {/* Row 1: Leftward Movement */}
      <MarqueeRow items={row1} direction="left" speed={30} />

      {/* Row 2: Rightward Movement */}
      <MarqueeRow items={row2} direction="right" speed={35} />

      {/* Row 3: Leftward Movement */}
      <MarqueeRow items={row3} direction="left" speed={38} />

      {/* Side Gradients for Smooth Fade Out */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />
    </div>
  );
};

export default MindMateCommunity;