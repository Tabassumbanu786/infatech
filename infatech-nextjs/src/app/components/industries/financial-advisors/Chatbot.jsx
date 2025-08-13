'use client';

import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Phone, MessageSquare, Bot, User } from 'lucide-react';

const Chatbot = ({ industry = 'financial', embedded = false, isOpen: externalIsOpen, onClose }) => {
  const [internalIsOpen, setInternalIsOpen] = useState(false);

  const industryConfig = {
    financial: {
      initialMessage: "Hi! I'm your AI financial assistant. Ask me anything about SIPs, mutual funds, or how to start investing!",
      quickQuestions: [
        "What is SIP?",
        "How much should I invest monthly?",
        "Best mutual funds for beginners?",
        "Tax saving investment options?",
        "How to start investing?"
      ],
      placeholder: "Ask about investments, SIPs, mutual funds..."
    },
    bakers: {
      initialMessage: "Hi! I'm your AI assistant for bakeries. Ask me about online orders, menu ideas, or packaging tips.",
      quickQuestions: [
        "How to sell cakes online?",
        "Ideas for festive packaging?",
        "What licenses do I need for a bakery?"
      ],
      placeholder: "Ask about selling cakes, packaging, delivery..."
    },
    ecommerce: {
      initialMessage: "Hi! I can help you with eCommerce setup, product listings, and marketing tips.",
      quickQuestions: [
        "How to set up an online store?",
        "How to get more orders?",
        "Which platform is best?"
      ],
      placeholder: "Ask about eCommerce, orders, delivery..."
    },
    kirana: {
      initialMessage: "Hi! I’m here to help your Kirana store go digital. Ask me about inventory, delivery, or digital payments.",
      quickQuestions: [
        "How to digitize my Kirana store?",
        "How to manage stock?",
        "How to accept online payments?"
      ],
      placeholder: "Ask about delivery, payments, inventory..."
    }
  };
  const { initialMessage, quickQuestions, placeholder } = industryConfig[industry] || industryConfig.financial;

  const [messages, setMessages] = useState([
    {
      id: 1,
      text: initialMessage,
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const actualIsOpen = embedded ? (externalIsOpen ?? false) : internalIsOpen;

  const handleClose = () => {
    if (embedded && onClose) {
      onClose();
    } else {
      setInternalIsOpen(false);
    }
  };

  const handleToggle = () => {
    if (!embedded) {
      setInternalIsOpen(!internalIsOpen);
    }
  };

  // const quickQuestions = [
  //   "What is SIP?",
  //   "How much should I invest monthly?",
  //   "Best mutual funds for beginners?",
  //   "Tax saving investment options?",
  //   "How to start investing?"
  // ];

  
  // const { initialMessage, quickQuestions, placeholder } = industryConfig[industry] || industryConfig.financial;
  

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth',block: 'nearest',
      inline: 'nearest' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputText.trim() || isLoading) return;

    const userMessage = {
      id: messages.length + 1,
      text: inputText,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);

    const loadingMessage = {
      id: messages.length + 2,
      text: "Thinking...",
      isBot: true,
      timestamp: new Date(),
      isLoading: true
    };
    setMessages(prev => [...prev, loadingMessage]);

    try {
      const chatHistory = messages
        .filter(msg => !msg.isLoading)
        .map(msg => ({
          role: msg.isBot ? 'assistant' : 'user',
          content: msg.text
        }));

      chatHistory.push({
        role: 'user',
        content: inputText
      });

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: chatHistory, industry: industry}),
      });

      const data = await response.json();
      const aiResponse = data.content || "I'm sorry, I couldn't process your request.";

      setMessages(prev => {
        const withoutLoading = prev.filter(msg => !msg.isLoading);
        return [...withoutLoading, {
          id: prev.length + 1,
          text: aiResponse,
          isBot: true,
          timestamp: new Date()
        }];
      });
    } catch (error) {
      console.error('AI error:', error);
      setMessages(prev => {
        const withoutLoading = prev.filter(msg => !msg.isLoading);
        return [...withoutLoading, {
          id: prev.length + 1,
          text: "I'm sorry, I'm having trouble connecting right now.",
          isBot: true,
          timestamp: new Date()
        }];
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickQuestion = (question) => {
    setInputText(question);
    setTimeout(() => handleSendMessage(), 100);
  };

  const handleCallbackRequest = () => {
    const callbackMessage = {
      id: messages.length + 1,
      text: "I'd like to schedule a callback with an advisor",
      isBot: false,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, callbackMessage]);

    setTimeout(() => {
      const botMessage = {
        id: messages.length + 2,
        text: "Perfect! I'll help you connect with our financial advisor. You can:\n\n📞 Call us directly\n💬 Message us on WhatsApp\n\nOur team usually responds within 2 hours (9 AM – 6 PM).",
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating button */}
      {!embedded && (
        <div className="position-fixed bottom-0 end-0 m-4 z-50">
          <button
            onClick={handleToggle}
            className="btn rounded-circle shadow-lg d-flex align-items-center justify-content-center position-relative"
            style={{ backgroundColor: '#000000' }}
          >
            {actualIsOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <MessageCircle className="h-6 w-6 text-white" />
            )}
          </button>
        </div>
      )}

      {/* Chatbot Window */}
      {actualIsOpen && (
       
        <div className={`${embedded ? 'w-100 h-100 border rounded bg-white shadow d-flex flex-column' : 'position-fixed bottom-0 end-0 mb-5 me-4 bg-white border rounded shadow-lg d-flex flex-column z-3'}`} style={{ maxWidth: '50rem', height: '24rem', zIndex: 1050 }}>
          {/* Header */}
          <div className="p-3 text-white rounded-top d-flex justify-content-between align-items-center" style={{ background: 'linear-gradient(to right, #f97316, #ea580c)' }}>
            <div className="d-flex align-items-center gap-2">
              <div className="bg-white bg-opacity-25 rounded-circle d-flex align-items-center justify-content-center" style={{ width: '2rem', height: '2rem' }}>
                <Bot className="h-4 w-4" />
              </div>
              <div>
                <h6 className="mb-0 fw-semibold">AI Assistant</h6>
                <small className="opacity-75">Powered by AI</small>
              </div>
            </div>
            <button onClick={handleClose} className="btn btn-sm btn-outline-light rounded-circle p-1">
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-grow-1 overflow-auto p-3 d-flex flex-column gap-3">
            {messages.map((message) => (
              <div key={message.id} className={`d-flex ${message.isBot ? 'justify-content-start' : 'justify-content-end'}`}>
                <div className={`d-flex ${message.isBot ? 'flex-row gap-2' : 'flex-row-reverse gap-2'}`}>
                  <div className={`rounded-circle d-flex align-items-center justify-content-center flex-shrink-0 ${message.isBot ? 'bg-light' : 'bg-warning text-white'}`} style={{ width: '24px', height: '24px' }}>
                    {message.isBot ? <Bot className="h-3 w-3 text-secondary" /> : <User className="h-3 w-3 text-white" />}
                  </div>
                  <div className={`p-2 rounded text-sm ${message.isBot ? 'bg-light text-dark' : 'bg-warning text-white'}`}>
                    {message.isLoading ? (
                      <div className="d-flex gap-1">
                        <div className="spinner-grow spinner-grow-sm text-secondary"></div>
                        <div className="spinner-grow spinner-grow-sm text-secondary" style={{ animationDelay: '0.1s' }}></div>
                        <div className="spinner-grow spinner-grow-sm text-secondary" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    ) : (
                      <div style={{ whiteSpace: 'pre-wrap' }}>{message.text}</div>
                    )}
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions */}
          {messages.length <= 2 && (
            <div className="px-3 pb-2">
              <small className="text-muted mb-2 d-block">Quick questions:</small>
              <div className="d-flex flex-wrap gap-2">
                {quickQuestions.slice(0, 3).map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickQuestion(question)}
                    disabled={isLoading}
                    className="btn btn-sm btn-light text-dark"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          {/* <div className="px-3 pb-2">
            <div className="d-flex gap-2">
              <button
                onClick={handleCallbackRequest}
                disabled={isLoading}
                className="btn btn-sm btn-outline-primary w-100 d-flex align-items-center justify-content-center gap-1"
              >
                <Phone className="h-3 w-3" />
                Callback
              </button>
              <button
                onClick={() => window.open('https://wa.me/1234567890', '_blank')}
                className="btn btn-sm btn-outline-success w-100 d-flex align-items-center justify-content-center gap-1"
              >
                <MessageSquare className="h-3 w-3" />
                WhatsApp
              </button>
            </div>
          </div> */}

          {/* Input */}
          <div className="p-3 border-top">
            <div className="d-flex gap-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                disabled={isLoading}
                placeholder={placeholder}
                className="form-control form-control-sm"
              />
              <button
                onClick={handleSendMessage}
                disabled={isLoading || !inputText.trim()}
                className="btn btn-warning d-flex align-items-center justify-content-center"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
