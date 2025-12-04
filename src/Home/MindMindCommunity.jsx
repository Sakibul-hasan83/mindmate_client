import React from 'react';

const MindMateCommunity = () => {
  const testimonials = [
    {
      id: 1,
      text: "Finally, someone to talk to at 3 AM",
      details: "I can rarely always bottles late at night. Campus health services isn't available then, and friends are busy or asleep. MindMate has been a lifesaver. It doesn't fuels 'better'—it actively saves me through breathings exercises and CBT techniques. It really feels like there support, 24/7.",
      author: "Alex M",
      role: "Head of marketing",
      rating: 5,
      avatar: "A"
    },
    {
      id: 2,
      text: "More than a chatbot, it's a complete lifeline",
      details: "I didn't think an app could really help, but I tried it in a moment of need (not recognized) and it recognized tears in my words instantly. It didn't just offer a generic response—it offered real, practical tools that I needed that...",
      author: "Anna Davey",
      role: "Designer",
      rating: 5,
      avatar: "A"
    },
    {
      id: 3,
      text: "I realized I wasn't alone",
      details: "Moving to uni, I felt incredibly homesick and isolated. I was hesitant to reach out to friends or family because I didn't want to made it feel safe. I connected with another student going through the exact same thing, just knowing I'm not the only one made a massive difference.",
      author: "Sophie More",
      role: "",
      rating: 5,
      avatar: "S"
    },
    {
      id: 4,
      text: "It helped me for my sleep schedule",
      details: "My stress was running my sleep; which made my stress works. The chatbot gave me practical tools on 'sleep hygiene,' and I found great resources in the Wellness Library. My sleep has improved, and I actually feel like I can actually focus in lectures again.",
      author: "Mary Cott",
      role: "Sam Entrepreneur",
      rating: 5,
      avatar: "M"
    },
    {
      id: 5,
      text: "A truly safe space to be vulnerable",
      details: "I've always found it hard to talk about my feelings, especially because of stigma. The anonymous Community Forum gave me a place to share my real feelings without fear of judgment. It's comforting to know other students I connected made me feel validated and understood.",
      author: "Michel O'Neill",
      role: "",
      rating: 5,
      avatar: "M"
    },
    {
      id: 6,
      text: "The AI identified my stress triggers!",
      details: "I used to journal, but never really analyzed my stress levels or thoughts. After a few entries, the AI insights showed me the my mood always dropped after I wrote about. Financial Stress or deadlines. Seeing the pattern so clearly laid out for me—that trigger was the first step to managing it.",
      author: "Jolana Irmin",
      role: "Founder of something",
      rating: 5,
      avatar: "J"
    },
    {
      id: 7,
      text: "It truly understand my 'mood swings'",
      details: "I always felt my mood dipped randomly, especially on weekends. When using the Mood Tracker for a week, the AI insight feature pointed out a pattern: 'Sunday Scaries.' It showed me how my anxiety rises before a busy week. That awareness has been empowering.",
      author: "Dani Dowelr",
      role: "Entrant",
      rating: 5,
      avatar: "D"
    },
    {
      id: 8,
      text: "The design itself speaks to accessibility",
      details: "As someone with ADHD, I really appreciated how clean and stressful. The UI of MindMate is. No overwhelming colors, and simple navigation across tools and chat features. It's calming. You can tell real care went into how neurodiver...",
      author: "Ellie Cones",
      role: "",
      rating: 5,
      avatar: "E"
    }
  ];

  return (
    <div className="bg-gray-50 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <p className="text-sm text-gray-600 mb-2">MindMate community 👋</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            See how MindMate is helping students find balance.
          </h2>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow"
            >

              {/* Avatar + Name (Left) → Stars (Right) */}
              <div className="flex items-center justify-between mb-4">

                {/* Avatar + Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center text-white font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{testimonial.author}</p>
                    {testimonial.role && (
                      <p className="text-xs text-gray-500">{testimonial.role}</p>
                    )}
                  </div>
                </div>

                {/* ⭐ Stars on the RIGHT */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-base">⭐</span>
                  ))}
                </div>

              </div>

              {/* Title */}
              <h3 className="font-bold text-gray-900 mb-2 text-base leading-snug">
                "{testimonial.text}"
              </h3>

              {/* Details */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {testimonial.details}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default MindMateCommunity;
