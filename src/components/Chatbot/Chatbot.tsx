import React from 'react';
import { useTranslation } from 'react-i18next';
import { MessageCircle, Send, X, Bot, User } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export function Chatbot() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = React.useState(false);
  const [messages, setMessages] = React.useState<Message[]>([
    {
      id: '1',
      text: t('chatbot.defaultMessage'),
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = React.useState('');
  const [isTyping, setIsTyping] = React.useState(false);

  // Intelligent response system based on keywords
  const getContextualResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    // Hygiene-related responses
    if (input.includes('hand') || input.includes('wash') || input.includes('hygiene') || input.includes('clean')) {
      return t('chatbot.responses.hygiene', { 
        defaultValue: "For proper hygiene, wash your hands with soap for at least 20 seconds, especially before eating and after using the bathroom. Regular handwashing is one of the most effective ways to prevent diseases and infections."
      });
    }
    
    // Water-related responses
    if (input.includes('water') || input.includes('save') || input.includes('conserve') || input.includes('rain')) {
      return t('chatbot.responses.water', {
        defaultValue: "Water conservation is crucial! Try these tips: fix leaky faucets immediately, take shorter showers (5-7 minutes), turn off taps while brushing teeth, and collect rainwater for gardening. Every drop counts!"
      });
    }
    
    // Waste-related responses
    if (input.includes('waste') || input.includes('garbage') || input.includes('recycle') || input.includes('segregat')) {
      return t('chatbot.responses.waste', {
        defaultValue: "Proper waste management starts with segregation! Separate wet waste (food scraps) from dry waste (paper, plastic). Use different bins for each type and compost organic waste when possible."
      });
    }
    
    // Health-related responses
    if (input.includes('health') || input.includes('disease') || input.includes('sick') || input.includes('medicine')) {
      return t('chatbot.responses.health', {
        defaultValue: "Maintaining good health involves regular exercise, balanced nutrition, adequate sleep, and proper hygiene. If you have specific health concerns, please consult with a healthcare professional."
      });
    }
    
    // Children-specific responses
    if (input.includes('child') || input.includes('kid') || input.includes('baby')) {
      return t('chatbot.responses.children', {
        defaultValue: "For children's health: ensure they wash hands frequently, brush teeth twice daily, eat nutritious foods, get enough sleep, and maintain good hygiene habits. Make health practices fun and engaging for better compliance."
      });
    }
    
    // Elderly-specific responses
    if (input.includes('elderly') || input.includes('senior') || input.includes('old')) {
      return t('chatbot.responses.elderly', {
        defaultValue: "For elderly care: monitor health regularly, take medications as prescribed, stay socially active, practice gentle exercises, maintain good nutrition, and ensure proper hygiene to prevent infections."
      });
    }
    
    // Recycling-specific responses
    if (input.includes('plastic') || input.includes('paper') || input.includes('glass') || input.includes('metal')) {
      return t('chatbot.responses.recycling', {
        defaultValue: "Different materials require different recycling approaches: Clean plastic containers before recycling, separate paper types, rinse glass bottles, and take electronic waste to special collection centers. Check your local recycling guidelines."
      });
    }
    
    // Emergency/urgent responses
    if (input.includes('emergency') || input.includes('urgent') || input.includes('help') || input.includes('problem')) {
      return t('chatbot.responses.emergency', {
        defaultValue: "For health emergencies, contact your local emergency services immediately. For non-urgent health, water, or waste management issues, I'm here to provide guidance and information."
      });
    }
    
    // Greeting responses
    if (input.includes('hello') || input.includes('hi') || input.includes('hey') || input.includes('good')) {
      return t('chatbot.responses.greeting', {
        defaultValue: "Hello! I'm your community health and environment assistant. I can help you with hygiene practices, water conservation tips, and waste management guidance. What would you like to know?"
      });
    }
    
    // Thank you responses
    if (input.includes('thank') || input.includes('thanks')) {
      return t('chatbot.responses.thanks', {
        defaultValue: "You're welcome! I'm glad I could help. Feel free to ask me anything else about hygiene, water conservation, or waste management. Together we can build a healthier community!"
      });
    }
    
    // Default response for unrecognized queries
    return t('chatbot.responses.default', {
      defaultValue: "I can help you with questions about hygiene practices, water conservation, and waste management. Could you please be more specific about what you'd like to know? For example, you can ask about handwashing techniques, water-saving tips, or waste segregation methods."
    });
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    const currentInput = inputText;
    setInputText('');
    setIsTyping(true);

    // Generate contextual response based on user input
    setTimeout(() => {
      const response = getContextualResponse(currentInput);
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        isUser: false,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // Realistic typing delay
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 p-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 z-40 ${
          isOpen ? 'scale-0' : 'scale-100'
        }`}
      >
        <MessageCircle className="h-6 w-6" />
      </button>

      {/* Chat Window */}
      <div className={`fixed bottom-6 right-6 w-96 h-[32rem] bg-white rounded-2xl shadow-2xl z-50 transition-all duration-300 ${
        isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
      }`}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-blue-600 text-white rounded-t-2xl">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-500 rounded-full">
              <Bot className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-semibold">{t('chatbot.title')}</h3>
              <p className="text-blue-100 text-xs">{t('chatbot.online')}</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 hover:bg-blue-500 rounded-full transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Messages */}
        <div className="h-80 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex items-start space-x-2 max-w-[80%] ${
                message.isUser ? 'flex-row-reverse space-x-reverse' : ''
              }`}>
                <div className={`p-2 rounded-full ${
                  message.isUser ? 'bg-blue-100' : 'bg-gray-100'
                }`}>
                  {message.isUser ? (
                    <User className="h-4 w-4 text-blue-600" />
                  ) : (
                    <Bot className="h-4 w-4 text-gray-600" />
                  )}
                </div>
                <div className={`p-3 rounded-2xl ${
                  message.isUser
                    ? 'bg-blue-600 text-white rounded-br-md'
                    : 'bg-gray-100 text-gray-900 rounded-bl-md'
                }`}>
                  <p className="text-sm leading-relaxed">{message.text}</p>
                </div>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="flex items-start space-x-2 max-w-[80%]">
                <div className="p-2 bg-gray-100 rounded-full">
                  <Bot className="h-4 w-4 text-gray-600" />
                </div>
                <div className="p-3 bg-gray-100 rounded-2xl rounded-bl-md">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex space-x-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={t('chatbot.placeholder')}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              disabled={isTyping}
            />
            <button
              onClick={handleSendMessage}
              disabled={!inputText.trim() || isTyping}
              className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}