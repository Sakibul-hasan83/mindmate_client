import React, { useState } from 'react';

const Questions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Is MindMate completely free for students?",
      answer: "Yes! MindMate is 100% free for all students. We believe mental health support should be accessible to everyone, so there are no hidden fees or premium tiers. All features including the AI chatbot, mood tracker, wellness library, and peer support are completely free."
    },
    {
      question: "Is my data truly private? Will my university or parents know I'm using this?",
      answer: "Your privacy is our top priority. All your data is encrypted and completely confidential. Your university, parents, or anyone else will never know you're using MindMate unless you choose to tell them. We never share your personal information or chat history with anyone."
    },
    {
      question: "Is the AI Chatbot a real therapist? Can it diagnose me?",
      answer: "No, the AI Chatbot is not a replacement for a licensed therapist and cannot provide medical diagnoses. It's designed to offer evidence-based coping strategies, emotional support, and mindfulness exercises. If you need professional help, the chatbot can guide you to appropriate resources."
    },
    {
      question: "What should I do if I'm in a serious crisis?",
      answer: "If you're in immediate danger or experiencing a mental health crisis, please contact emergency services (911) or a crisis hotline immediately. MindMate is designed for everyday support, not emergency situations. We provide crisis hotline numbers and resources within the app for urgent help."
    },
    {
      question: "How does the Peer Support Matching work? Is it safe?",
      answer: "The Peer Support Matching connects you anonymously with other students who have similar experiences. Your identity remains private unless you choose to share it. All interactions are moderated, and we have safety guidelines in place to ensure a supportive environment."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    /* Main container updated with dark mode background */
    <div className="bg-gray-50 dark:bg-[#0f172a] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base transition-colors">
            Here are answers to some common questions students have about MindMate.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              /* Card styles updated for dark mode */
              className="bg-white dark:bg-[#1e293b] rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300"
            >
              {/* Question button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 sm:px-8 sm:py-5 flex items-center justify-between text-left hover:bg-gray-50 dark:hover:bg-[#2d3748] transition"
              >
                <span className="font-medium text-gray-900 dark:text-gray-100 text-sm sm:text-base pr-4 transition-colors">
                  {index + 1}. {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-gray-500 dark:text-gray-400 transition-transform duration-300 flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Answer section */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 sm:px-8 sm:pb-6 pt-0">
                  <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed transition-colors">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Questions;