'use client';

import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Phone, MessageSquare, Bot, User } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm your AI financial assistant. Ask me anything about SIPs, mutual funds, or how to start investing!",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const quickQuestions = [
    "What is SIP?",
    "How much should I invest monthly?",
    "Best mutual funds for beginners?",
    "Tax saving investment options?",
    "How to start investing?"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
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
        body: JSON.stringify({ messages: chatHistory }),
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
      {/* Chatbot Toggle Button */}
      <div className="position-fixed bottom-0 end-0 m-4 z-3">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="btn btn-warning rounded-circle shadow d-flex align-items-center justify-content-center"
          style={{ width: '56px', height: '56px',backgroundColor:'#212529',color: '#ffc107'  }}
        >
          {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        </button>
      </div>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="position-fixed bottom-0 end-0 mb-5 me-4 bg-white border rounded shadow-lg d-flex flex-column z-3"
          style={{ width: '460px', height: '600px' }}>
          
          {/* Header */}
          <div className="bg-warning text-white p-3 d-flex justify-content-between align-items-center rounded-top">
            <div className="d-flex align-items-center gap-2">
              <div className="bg-white bg-opacity-25 rounded-circle d-flex align-items-center justify-content-center" style={{ width: '42px', height: '42px' }}>
                <Bot color='black' size={16} />
              </div>
              <div>
                <h6 className="mb-0">IFA Financial Assistant</h6>
                <small className="opacity-75 text-black">Powered by OpenAI</small>
              </div>
            </div>
            <button className="btn btn-sm text-black" onClick={() => setIsOpen(false)}>
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-grow-1 overflow-auto p-3 d-flex flex-column gap-2">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`d-flex ${message.isBot ? 'justify-content-start' : 'justify-content-end'}`}
              >
                <div className="d-flex align-items-start gap-2" style={{ maxWidth: '75%' }}>
                  <div className={`rounded-circle d-flex align-items-center justify-content-center flex-shrink-0 ${message.isBot ? 'bg-light' : 'bg-warning'}`} style={{ width: '24px', height: '24px' }}>
                    {message.isBot ? (
                      <Bot size={12} className="text-dark" />
                    ) : (
                      <User size={12} className="text-white" />
                    )}
                  </div>
                  <div className={`p-2 rounded small ${message.isBot ? 'bg-light text-dark' : 'bg-warning text-white'}`}>
                    {message.isLoading ? (
                      <div className="d-flex gap-1">
                        <div className="spinner-grow spinner-grow-sm text-secondary"></div>
                        <div className="spinner-grow spinner-grow-sm text-secondary"></div>
                        <div className="spinner-grow spinner-grow-sm text-secondary"></div>
                      </div>
                    ) : (
                      <div style={{ whiteSpace: 'pre-wrap' }}>{message.text}</div>
                    )}
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef}></div>
          </div>

          {/* Quick Questions */}
          {messages.length <= 2 && (
            <div className="px-3 pb-2">
              <p className="text-muted small mb-1">Quick questions:</p>
              <div className="d-flex flex-wrap gap-1">
                {quickQuestions.slice(0, 3).map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickQuestion(question)}
                    disabled={isLoading}
                    className="btn btn-sm btn-outline-secondary"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="px-3 pb-2">
            <div className="d-flex gap-2">
              <button
                onClick={handleCallbackRequest}
                disabled={isLoading}
                className="btn btn-sm btn-outline-primary w-100 d-flex align-items-center justify-content-center"
              >
                <Phone size={14} className="me-1" />
                Callback
              </button>
              <button
                onClick={() => window.open('https://wa.me/1234567890', '_blank')}
                className="btn btn-sm btn-outline-success w-100 d-flex align-items-center justify-content-center"
              >
                <MessageSquare size={14} className="me-1" />
                WhatsApp
              </button>
            </div>
          </div>

          {/* Input */}
          <div className="p-3 border-top">
            <div className="d-flex gap-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                disabled={isLoading}
                placeholder="Ask about investments, SIPs, mutual funds..."
                className="form-control form-control-sm"
              />
              <button
                onClick={handleSendMessage}
                disabled={isLoading || !inputText.trim()}
                className="btn btn-warning"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
