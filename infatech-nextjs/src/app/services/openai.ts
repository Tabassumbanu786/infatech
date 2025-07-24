// const OPENAI_API_KEY = import.meta.env.local.VITE_OPENAI_API_KEY;
// const OPENAI_API_KEY = process.env.VITE_OPENAI_API_KEY;
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;


export interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export class OpenAIService {
  private apiKey: string;
  private baseURL = 'https://api.openai.com/v1/chat/completions';

  constructor() {
    this.apiKey = OPENAI_API_KEY || '';
    if (!this.apiKey) {
      console.warn('OpenAI API key not found. Please add VITE_OPENAI_API_KEY to your .env file');
    }
  }

  async generateResponse(messages: ChatMessage[]): Promise<string> {
    if (!this.apiKey) {
      return "I'm sorry, but the AI service is not configured. Please contact support for assistance with your financial questions.";
    }

    try {
      const systemPrompt: ChatMessage = {
        role: 'system',
        content: `You are a helpful financial assistant for an Independent Financial Advisor (IFA) website. Your role is to:

1. Help users understand financial concepts like SIPs, mutual funds, insurance, tax planning
2. Provide general financial guidance and education
3. Answer common questions about investments and financial planning
4. Encourage users to schedule consultations for personalized advice
5. Be professional, friendly, and trustworthy

Guidelines:
- Keep responses concise and easy to understand
- Use Indian financial context (INR, Indian markets, tax laws)
- Always recommend consulting with the advisor for personalized advice
- Don't provide specific investment recommendations
- Focus on education and general guidance
- If asked about scheduling, mention callback or WhatsApp options

Remember: You're representing a professional IFA practice, so maintain high standards of financial advice ethics.`
      };

      const response = await fetch(this.baseURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`,
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [systemPrompt, ...messages],
          max_tokens: 300,
          temperature: 0.7,
        }),
      });

      if (!response.ok) {
        throw new Error(`OpenAI API error: ${response.status}`);
      }

      const data = await response.json();
      return data.choices[0]?.message?.content || "I'm sorry, I couldn't process your request. Please try again.";
    } catch (error) {
      console.error('OpenAI API Error:', error);
      return "I'm experiencing technical difficulties. Please try again in a moment or contact our support team.";
    }
  }

  isConfigured(): boolean {
    return !!this.apiKey;
  }
}