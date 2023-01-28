import { useEffect, useState } from "react"
import { Circle, X, PaperPlaneRight } from "phosphor-react"

import "./styles/global.css"
import Avatar from "./assets/foto.jpg"

import { MessageBox, MessageBoxProps } from "./components/MessageBox"

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

  useEffect(() => {
    setMessages(messagesTest)
  }, [])

  return (
    <div className="bg-background h-screen text-gray-200 font-roboto grid grid-rows-layout py-6 lg:py-8 px-8 lg:px-20">
      <header className="flex flex-col gap-6 lg:gap-3">
        <div className="flex items-center justify-between gap-4 ">
          <img
            className="w-full max-w-[48px] rounded-full"
            src={Avatar}
            alt="Foto de avatar do chat"
          />
          <div className="w-full flex flex-col gap-1">
            <h1 className="font-bold text-base">{`Cecilia Sassaki`}</h1>
            <div className="flex items-center gap-1">
              <Circle className="text-emerald-500" size={10} />
              <span className=" text-xs text-emerald-500 leading-3">{`Online`}</span>
            </div>
          </div>
          <button className="cursor-pointer">
            <X className="text-white" />
          </button>
        </div>
        <p className="text-center text-xs leading-3">{`Hoje 11:30`}</p>
      </header>

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
      </main>

      <footer className=" py-3.5 px-6 rounded-full bg-boxBackground flex items-center">
        <form className="flex items-center justify-between gap-2.5 w-full">
          <input
            type="text"
            placeholder="Digite sua mensagem"
            className="w-full leading-3 text-xs bg-transparent "
            required
          />
          <button type="submit">
            <PaperPlaneRight size={24} className="text-gray-200" />
          </button>
        </form>
      </footer>
    </div>
  )
}
