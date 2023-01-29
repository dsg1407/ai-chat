import React, { useState } from "react"
import { PaperPlaneRight } from "phosphor-react"

import { MessageBoxProps } from "./MessageBox"
interface MessageFormProps {
  messages: MessageBoxProps[]
  submitMessages: React.Dispatch<
    React.SetStateAction<MessageBoxProps[] | undefined>
  >
}

export function MessageForm({ messages, submitMessages }: MessageFormProps) {
  const [message, setMessage] = useState("")

  function handleSubmitMessage(e: React.SyntheticEvent) {
    e.preventDefault()

    const newMessage: MessageBoxProps = {
      message: message,
      sender: "user",
      name: "Você",
      time: new Date().toLocaleString("pt-br", { timeStyle: "short" }),
    }

    const newMessages = [...messages, newMessage]

    submitMessages(newMessages)

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
