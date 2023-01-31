import { useEffect, useRef, useContext } from "react"

import "./styles/global.css"

import { Header } from "./components/Header"
import { MessageBox } from "./components/MessageBox"
import { MessageForm } from "./components/MessageForm"

import { MessagesContext } from "./context/MessageContext"

export function App() {
  const { messages } = useContext(MessagesContext)

  const el = useRef<null | HTMLDivElement>(null)

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
        <MessageForm />
      </footer>
    </div>
  )
}
