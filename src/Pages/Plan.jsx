import { useEffect, useRef, useState } from 'react'
import ReactMarkdown from 'react-markdown'

const starterPrompts = [
  'Plan 5 days in Kerala for nature, food, and a medium budget.',
  'Make a Goa trip for beaches, cafes, and relaxed nightlife.',
  'Suggest a family friendly Himachal route under 40000 INR.',
]

const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions'
const GROQ_MODEL = import.meta.env.VITE_GROQ_MODEL || 'openai/gpt-oss-20b'
const SYSTEM_INSTRUCTION = `You are Travello's AI travel planner.

Create useful, realistic travel itineraries based on the user's destination, mood, budget, number of days, and places they want to visit.

Be practical and concise.
Include:
- Day-by-day itinerary
- Places to visit
- Food/local experiences
- Approximate budget guidance
- Transportation suggestions
- Useful travel tips

If the user hasn't provided enough information, ask them for the missing details instead of making unreasonable assumptions.`

const requestTripPlan = async ({ messages }) => {
  const apiKey = import.meta.env.VITE_GROQ_API_KEY?.trim()

  if (!apiKey) {
    throw new Error('Groq API key is missing. Add VITE_GROQ_API_KEY to .env, then restart the Vite dev server.')
  }

  const chatMessages = [
    { content: SYSTEM_INSTRUCTION, role: 'system' },
    ...messages
      .filter((message) => message.role !== 'system')
      .map((message) => ({
        content: message.content,
        role: message.role === 'assistant' ? 'assistant' : 'user',
      })),
  ]

  const response = await fetch(GROQ_API_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      messages: chatMessages,
      model: GROQ_MODEL,
      temperature: 0.7,
    }),
  })

  if (!response.ok) {
    const errorData = await response.json().catch(() => null)
    const message = errorData?.error?.message || 'Groq API request failed.'
    throw new Error(`${message} (${response.status})`)
  }

  const data = await response.json()
  return data.choices?.[0]?.message?.content || 'Groq returned an empty response.'
}


const Plan = () => {
  const [input, setInput] = useState('')
  const [isSending, setIsSending] = useState(false)
  const [messages, setMessages] = useState([
    {
      content: 'Tell me the destination, mood, budget, number of days, and places you want to visit. I will turn it into a travel plan.',
      role: 'assistant',
    },
  ])
  const messagesEndRef = useRef(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [isSending, messages])

  const submitMessage = async (event) => {
    event.preventDefault()

    const trimmedInput = input.trim()
    if (!trimmedInput || isSending) {
      return
    }

    const nextMessages = [...messages, { content: trimmedInput, role: 'user' }]
    setMessages(nextMessages)
    setInput('')
    setIsSending(true)

    try {
      const reply = await requestTripPlan({ messages: nextMessages })
      setMessages([...nextMessages, { content: reply, role: 'assistant' }])
    } catch (error) {
      setMessages([
        ...nextMessages,
        {
          content: error.message,
          role: 'assistant',
        },
      ])
    } finally {
      setIsSending(false)
    }
  }

  return (
    <main className="flex min-h-screen flex-col bg-[#fbfaf4] pt-24">
      <section className="mx-auto flex w-full max-w-5xl flex-1 flex-col px-4 pb-4 sm:px-6">
        <header className="border-b border-black/10 py-5">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#00aa6c]">AI itinerary planner</p>
              <h1 className="mt-1 text-3xl font-black text-[#101913]">Plan</h1>
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto py-6">
          <div className="space-y-5">
            {messages.map((message, index) => {
              const isUser = message.role === 'user'

              return (
                <div key={`${message.role}-${index}`} className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-[82%] whitespace-pre-wrap rounded-lg px-5 py-4 text-base leading-7 shadow-sm ${
                      isUser ? 'bg-[#101913] text-white' : 'border border-black/10 bg-white text-[#101913]'
                    }`}
                  >
                    <ReactMarkdown>{message.content}</ReactMarkdown>
                  </div>
                </div>
              )
            })}

            {isSending ? (
              <div className="flex justify-start">
                <div className="rounded-lg border border-black/10 bg-white px-5 py-4 text-sm font-bold text-[#69756d] shadow-sm">
                  Planning...
                </div>
              </div>
            ) : null}
            <div ref={messagesEndRef} />
          </div>
        </div>

        <div className="border-t border-black/10 bg-[#fbfaf4] py-4">
          <div className="mb-3 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {starterPrompts.map((prompt) => (
              <button
                key={prompt}
                className="shrink-0 rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-bold text-[#526057] transition hover:border-[#00aa6c] hover:text-[#007a53]"
                onClick={() => setInput(prompt)}
                type="button"
              >
                {prompt}
              </button>
            ))}
          </div>

          <form className="flex items-end gap-3 rounded-[28px] border border-black/10 bg-white p-3 shadow-[0_18px_50px_rgba(16,25,19,0.10)]" onSubmit={submitMessage}>
            <textarea
              className="max-h-44 min-h-14 flex-1 resize-none bg-transparent px-3 py-3 text-base leading-6 text-[#101913] outline-none placeholder:text-[#8b968e]"
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' && !event.shiftKey) {
                  submitMessage(event)
                }
              }}
              placeholder="Tell me your destination, mood, budget, days, and places to visit..."
              value={input}
            />
            <button
              className="flex h-12 min-w-24 items-center justify-center rounded-full bg-[#00aa6c] px-5 text-sm font-black text-white transition hover:bg-[#008f5a] disabled:cursor-not-allowed disabled:bg-[#9db9aa]"
              disabled={isSending || input.trim().length === 0}
              type="submit"
            >
              Send
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}

export default Plan
