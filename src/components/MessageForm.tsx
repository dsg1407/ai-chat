import { useState, useContext, FormEvent } from "react"
import { Configuration, OpenAIApi } from "openai"
import { PaperPlaneRight } from "phosphor-react"

import { MessagesContext, MessageProps } from "../context/MessageContext"

export function MessageForm() {
  const [message, setMessage] = useState("")
  const { setMessages, messages, replier } = useContext(MessagesContext)

  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  })

  const openai = new OpenAIApi(configuration)

  async function handleSubmitMessage(e: FormEvent) {
    e.preventDefault()

    const newUserMessage: MessageProps = {
      message: message,
      sender: "user",
      name: "Você",
      time: new Date().toLocaleString("pt-br", { timeStyle: "short" }),
    }

    setMessages([...messages, newUserMessage])

    setMessage("")

    const allMessages = JSON.stringify(
      Array(...messages, newUserMessage)
        .map(({ message }) => `${message}`)
        .join("")
    )

    const { data } = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: allMessages,
      temperature: 0.9,
      max_tokens: 100,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0.6,
      stop: [" replier:", " user:"],
    })

    console.log(data.choices[0])
    console.log(data.choices[0].text)

    setMessages([
      ...messages,
      newUserMessage,
      {
        message: data.choices[0].text,
        sender: "replier",
        name: replier.firstName,
        time: new Date().toLocaleString("pt-br", { timeStyle: "short" }),
      } as MessageProps,
    ])
  }

  return (
    <form
      className="flex items-center justify-between gap-2.5 w-full"
      onSubmit={handleSubmitMessage}
    >
      <input
        type="text"
        placeholder="Digite sua mensagem..."
        className="w-full leading-3 text-xs bg-transparent placeholder:italic focus:outline-none "
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />
      <button type="submit">
        <PaperPlaneRight size={24} className="text-gray-200" />
      </button>
    </form>
  )
}
