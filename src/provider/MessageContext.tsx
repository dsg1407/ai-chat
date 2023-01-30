import React, { useState } from "react"

export interface MessageProps {
  message: string
  sender: string
  name: string
  time: string
}

export interface MessageContextType {
  messages: MessageProps[]
  saveMessage: (messages: MessageProps) => void
}

export const MessagesContext = React.createContext<MessageContextType | null>(
  null
)

const MessageProvider: React.FC<React.ReactNode> = ({ children }: any) => {
  const [messages, setMessages] = useState<MessageProps[]>([
    {
      message: "Olá, em que posso ajudar ? 😍",
      sender: "replier",
      name: "Chat",
      time: new Date().toLocaleString("pt-br", { timeStyle: "short" }),
    },
    {
      message: "Digite abaixo o que deseja.",
      sender: "replier",
      name: "Chat",
      time: new Date().toLocaleString("pt-br", { timeStyle: "short" }),
    },
  ])

  const saveMessage = ({ message, sender, name, time }: MessageProps) => {
    const newMessage: MessageProps = {
      message,
      sender,
      name,
      time,
    }
    setMessages([...messages, newMessage])
  }

  return (
    <MessagesContext.Provider value={{ messages, saveMessage }}>
      {children}
    </MessagesContext.Provider>
  )
}
