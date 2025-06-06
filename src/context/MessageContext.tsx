import { useState, createContext, ReactNode } from "react"
import { GoogleGenAI, type Chat } from "@google/genai";

import namesList from "../assets/names.json"

export interface MessageProps {
  message: string
  role: string
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
  chat: Chat
}

interface ReplierProps {
  fullName: string
  firstName: string
  lastName: string
}

const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });

export const MessagesContext = createContext<MessageContextData>(
  {} as MessageContextData
)

function CreateNewGeminiChat() {
  const chat = ai.chats.create({
    model: "gemini-2.0-flash",
    history: [
      {
        role: "model",
        parts: [{ text: "Olá, em que posso ajudar ? 😍" }],
      },
      {
        role: "model",
        parts: [{ text: "Digite abaixo o que deseja." }],
      },
    ],
  })

  return chat
}

export function MessageProvider({ children }: MessageProviderProps) {
  const [replier, setReplier] = useState<ReplierProps>(
    namesList[Math.floor(Math.random() * namesList.length)]
  )
  const [messages, setMessages] = useState<MessageProps[]>([
    {
      message: "Olá, em que posso ajudar ? 😍",
      role: "model",
      name: replier.firstName,
      time: new Date().toLocaleString("pt-br", { timeStyle: "short" }),
    },
    {
      message: "Digite abaixo o que deseja.",
      role: "model",
      name: replier.firstName,
      time: new Date().toLocaleString("pt-br", { timeStyle: "short" }),
    },
  ])
  const [chat, setChat] = useState<Chat>(CreateNewGeminiChat)

  const saveMessage = ({ message, role, name, time }: MessageProps) => {
    const newMessage: MessageProps = {
      message,
      role,
      name,
      time,
    }
    setMessages([...messages, newMessage])
  }

  const chatStartOver = () => {
    const selectedReplier =
      namesList[Math.floor(Math.random() * namesList.length)]

    setChat(CreateNewGeminiChat)
    setReplier(selectedReplier)
    setMessages([
      {
        message: "Olá, em que posso ajudar ? 😍",
        role: "model",
        name: selectedReplier.firstName,
        time: new Date().toLocaleString("pt-br", { timeStyle: "short" }),
      },
      {
        message: "Digite abaixo o que deseja.",
        role: "model",
        name: selectedReplier.firstName,
        time: new Date().toLocaleString("pt-br", { timeStyle: "short" }),
      },
    ])
  }

  return (
    <MessagesContext.Provider
      value={{ messages, setMessages, saveMessage, chatStartOver, replier, chat }}
    >
      {children}
    </MessagesContext.Provider>
  )
}
