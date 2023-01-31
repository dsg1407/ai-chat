import { useState, useContext, FormEvent } from "react"
import { PaperPlaneRight } from "phosphor-react"

import { MessagesContext, MessageProps } from "../context/MessageContext"

export function MessageForm() {
  const { saveMessage } = useContext(MessagesContext)

  const [message, setMessage] = useState("")

  function handleSubmitMessage(e: FormEvent) {
    e.preventDefault()

    const newMessage: MessageProps = {
      message: message,
      sender: "user",
      name: "Você",
      time: new Date().toLocaleString("pt-br", { timeStyle: "short" }),
    }

    saveMessage(newMessage)

    setMessage("")
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
