// app/api/chat/route.ts

import { NextRequest, NextResponse } from 'next/server';

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const systemPrompts: Record<string, string> = {
  financial:`You are a helpful financial assistant for an Independent Financial Advisor (IFA) website. Your role is to:

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

Remember: You're representing a professional IFA practice, so maintain high standards of financial advice ethics.`,

  bakery: `You are a friendly and helpful assistant for a premium bakery called "The Baker's Junction". Your job is to help customers with:

1. Product inquiries (cakes, breads, cookies, pastries, and more)
2. Custom orders (birthday, anniversary, and designer cakes)
3. Delivery & pickup details
4. Online order guidance and WhatsApp support
5. Celebrations, gifts, and recommendations for occasions

Tone Guidelines:
- Be sweet, polite, and warm
- Use casual and cheerful language with food-related emojis (🍰, 🎂, 🧁, etc.)
- Mention top-selling items and seasonal specials
- Suggest trying freshly baked items or gift combos
- Redirect to WhatsApp for custom cake photos or orders when needed
`,

  travel: `You are a travel booking assistant for a travel agency website. Help users with:

1. Package details
2. Destination info
3. Booking and cancellation queries

Guidelines:
- Recommend speaking to an agent for exact pricing
- Be concise, informative, and polite`
};

export async function POST(req: NextRequest) {
  if (!OPENAI_API_KEY) {
    return NextResponse.json({ error: 'API key not configured.' }, { status: 500 });
  }

  const body = await req.json();
  const messages = body.messages;
  const industry = body.industry || 'ifa'; // ✅ Get from body instead of query

  const systemPrompts: Record<string, string> = {
    ifa: `You are a helpful financial assistant...`,
    bakery: `You are a friendly assistant for a bakery website...`,
    travel: `You are a travel booking assistant...`
  };

  const systemPrompt = systemPrompts[industry] || systemPrompts.ifa;

  const modifiedMessages = [
    { role: 'system', content: systemPrompt },
    ...messages,
  ];

  try {
    const apiRes = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: modifiedMessages,
        max_tokens: 300,
        temperature: 0.7
      })
    });

    if (!apiRes.ok) {
      return NextResponse.json({ error: 'OpenAI request failed' }, { status: apiRes.status });
    }

    const data = await apiRes.json();
    return NextResponse.json({ content: data.choices?.[0]?.message?.content || '' });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 });
  }
}

