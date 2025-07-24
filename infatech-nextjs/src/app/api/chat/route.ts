// app/api/chat/route.ts

import { NextRequest, NextResponse } from 'next/server';

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

export async function POST(req: NextRequest) {
  if (!OPENAI_API_KEY) {
    return NextResponse.json({ error: 'API key not configured.' }, { status: 500 });
  }

  const body = await req.json();
  const messages = body.messages;

  try {
    const apiRes = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages,
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
