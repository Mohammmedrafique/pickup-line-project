// 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
import { NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey:'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',
})

export async function POST(request: Request) {
  const { crushDescription, style } = await request.json()

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `You are a pickup line generator. Generate 2 ${style} pickup lines based on the following description: ${crushDescription}`
        }
      ],
    })

    const pickupLines = completion.choices.map(choice => choice.message.content)

    return NextResponse.json({ pickupLines })
  } catch (error) {
    return NextResponse.json({ error: 'Error generating pickup lines' }, { status: 500 })
  }
}