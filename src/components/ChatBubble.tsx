
import React, { useState } from 'react';
import { MessageCircle, X, Send, Zap, Code, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ChatBubble: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState('');

  const quickQuestions = [
    {
      id: 'skills',
      icon: Code,
      text: '💼 What are your main skills?',
      answer: 'I specialize in Backend Development with Node.js, Express.js, PostgreSQL, and React.js for full-stack solutions!'
    },
    {
      id: 'projects',
      icon: Zap,
      text: '🚀 Show me your best projects',
      answer: 'Check out Skypedia (flight booking), FancyTodo (task management), and my E-commerce platform in the projects section!'
    },
    {
      id: 'availability',
      icon: Mail,
      text: '📅 Are you available for work?',
      answer: 'Yes! I\'m open for freelance projects and remote work opportunities. Let\'s discuss your project!'
    }
  ];

  const handleQuestionClick = (question: typeof quickQuestions[0]) => {
    setSelectedQuestion(question.answer);
  };

  return (
    <>
      {/* Chat Bubble Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-r from-orange-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: 0 }}
              animate={{ rotate: 0 }}
              exit={{ rotate: 180 }}
            >
              <X className="h-6 w-6 text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="message"
              initial={{ rotate: -180 }}
              animate={{ rotate: 0 }}
              exit={{ rotate: 180 }}
            >
              <MessageCircle className="h-6 w-6 text-white" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.3 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.3 }}
            className="fixed bottom-24 right-6 z-40 w-80 bg-gray-900 rounded-2xl shadow-2xl border border-gray-700 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-orange-500 to-purple-500 p-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold text-gray-900">R</span>
                </div>
                <div>
                  <h3 className="text-white font-medium">Riski Dwi Patrio</h3>
                  <p className="text-white/80 text-sm">Backend Developer</p>
                </div>
              </div>
            </div>

            {/* Chat Content */}
            <div className="p-4 h-64 overflow-y-auto">
              <div className="space-y-4">
                <div className="bg-gray-800 rounded-2xl p-3 max-w-xs">
                  <p className="text-white text-sm">
                    👋 Hi! I'm Riski. What would you like to know?
                  </p>
                </div>

                {selectedQuestion && (
                  <div className="bg-gray-800 rounded-2xl p-3 max-w-xs">
                    <p className="text-white text-sm">{selectedQuestion}</p>
                  </div>
                )}

                <div className="space-y-2">
                  {quickQuestions.map((question) => (
                    <button
                      key={question.id}
                      onClick={() => handleQuestionClick(question)}
                      className="w-full text-left p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-gray-700 hover:border-orange-500/50"
                    >
                      <div className="flex items-center space-x-2">
                        <question.icon className="h-4 w-4 text-orange-400" />
                        <span className="text-white text-sm">{question.text}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-gray-700">
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="flex-1 bg-gray-800 text-white text-sm rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <button className="bg-orange-500 hover:bg-orange-400 rounded-xl p-2 transition-colors">
                  <Send className="h-4 w-4 text-white" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBubble;
