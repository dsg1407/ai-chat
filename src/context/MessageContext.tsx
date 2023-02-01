import { useState, createContext, ReactNode } from "react"

import namesList from "../assets/names.json"

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
  setMessages: React.Dispatch<React.SetStateAction<MessageProps[]>>
  saveMessage: (messages: MessageProps) => void
  chatStartOver: () => void
  replier: ReplierProps
}

interface ReplierProps {
  fullName: string
  firstName: string
  lastName: string
}

export const MessagesContext = createContext<MessageContextData>(
  {} as MessageContextData
)

export function MessageProvider({ children }: MessageProviderProps) {
  const [replier, setReplier] = useState<ReplierProps>(
    namesList[Math.floor(Math.random() * namesList.length)]
  )
  const [messages, setMessages] = useState<MessageProps[]>([
    {
      message: "Olá, em que posso ajudar ? 😍",
      sender: "replier",
      name: replier.firstName,
      time: new Date().toLocaleString("pt-br", { timeStyle: "short" }),
    },
    {
      message: "Digite abaixo o que deseja.",
      sender: "replier",
      name: replier.firstName,
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

  const chatStartOver = () => {
    const selectedReplier =
      namesList[Math.floor(Math.random() * namesList.length)]

    setReplier(selectedReplier)
    setMessages([
      {
        message: "Olá, em que posso ajudar ? 😍",
        sender: "replier",
        name: selectedReplier.firstName,
        time: new Date().toLocaleString("pt-br", { timeStyle: "short" }),
      },
      {
        message: "Digite abaixo o que deseja.",
        sender: "replier",
        name: selectedReplier.firstName,
        time: new Date().toLocaleString("pt-br", { timeStyle: "short" }),
      },
    ])
  }

  return (
    <MessagesContext.Provider
      value={{ messages, setMessages, saveMessage, chatStartOver, replier }}
    >
      {children}
    </MessagesContext.Provider>
  )
}
