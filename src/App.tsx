import { useEffect, useState, useRef } from "react"

import "./styles/global.css"

import { Header } from "./components/Header"
import { MessageBox, MessageBoxProps } from "./components/MessageBox"
import { MessageForm } from "./components/MessageForm"

export function App() {
  const messagesTest = [
    {
      message: "Tive uma ideia incrível para um projeto! 😍",
      sender: "replier",
      name: "Cecilia",
      time: "11:30",
    },
    {
      message: "Sério? Me conta mais.",
      sender: "user",
      name: "Você",
      time: "11:32",
    },
    {
      message:
        "E se a gente fizesse um chat moderno e responsivo em apenas uma semana?",
      sender: "replier",
      name: "Cecilia",
      time: "11:34",
    },
    {
      message: "#boraCodar! 🚀",
      sender: "user",
      name: "Você",
      time: "11:36",
    },
  ]

  const [messages, setMessages] = useState<MessageBoxProps[]>()
  const el = useRef<null | HTMLDivElement>(null)

  useEffect(() => {
    setMessages(messagesTest)
  }, [])

  useEffect(() => {
    if (el.current === null) {
    } else el!.current!.scrollIntoView({ block: "end", behavior: "smooth" })
  }, [messages])

  return (
    <div className="bg-background h-screen text-gray-200 font-roboto grid grid-rows-layout py-6 lg:py-8 px-8 lg:px-20">
      <Header />

      <main className="overflow-y-auto my-6 flex flex-col gap-7">
        {messages?.map(({ message, name, sender, time }, i) => {
          return (
            <MessageBox
              key={`${time}-${i}`}
              message={message}
              name={name}
              sender={sender}
              time={time}
            />
          )
        })}
        <div id={"el"} ref={el}></div>
      </main>

      <footer className=" py-3.5 px-6 rounded-full bg-boxBackground flex items-center">
        <MessageForm messages={messages} submitMessages={setMessages} />
      </footer>
    </div>
  )
}
