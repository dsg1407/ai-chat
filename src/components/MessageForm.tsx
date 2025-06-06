import { useState, useContext, FormEvent } from "react"
import { PaperPlaneRight } from "phosphor-react"

import { MessagesContext, MessageProps } from "../context/MessageContext"

export function MessageForm() {
  const [message, setMessage] = useState("")
  const { setMessages, messages, replier, chat } = useContext(MessagesContext)


  async function handleSubmitMessage(e: FormEvent) {
    e.preventDefault()

    const newUserMessage: MessageProps = {
      message: message,
      role: "user",
      name: "Você",
      time: new Date().toLocaleString("pt-br", { timeStyle: "short" }),
    }

    setMessages([...messages, newUserMessage])

    setMessage("")

    const { text } = await chat.sendMessage({
      message: message,
      config: {
        maxOutputTokens: 200,
      },
    })

    setMessages([
      ...messages,
      newUserMessage,
      {
        message: text,
        role: "model",
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
