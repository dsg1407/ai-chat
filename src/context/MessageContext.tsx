import { useState, createContext, ReactNode } from "react"

export interface MessageProps {
  message: string
  sender: string
  name: string
  time: string
}

interface MessageProviderProps {
  children: ReactNode
}

interface MessageContextData {
  messages: MessageProps[]
  saveMessage: (messages: MessageProps) => void
}

export const MessagesContext = createContext<MessageContextData>(
  {} as MessageContextData
)

export function MessageProvider({ children }: MessageProviderProps) {
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
