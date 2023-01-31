import { Circle, X } from "phosphor-react"
import { useEffect, useState, useContext } from "react"

import { MessagesContext } from "../context/MessageContext"

import Avatar from "../assets/foto.jpg"

export function Header() {
  const [todayDate, setTodayDate] = useState("")

  const { chatStartOver, replier } = useContext(MessagesContext)

  useEffect(() => {
    const today = new Date().toLocaleString("pt-br", {
      dateStyle: "short",
      timeStyle: "short",
    })

    setTodayDate(today)
  }, [replier])

  return (
    <header className="flex flex-col gap-6 lg:gap-3">
      <div className="flex items-center justify-between gap-4 ">
        <img
          className="w-full max-w-[48px] rounded-full"
          src={Avatar}
          alt="Foto de avatar do chat"
        />
        <div className="w-full flex flex-col gap-1">
          <h1 className="font-bold text-base">{`${replier.fullName}`}</h1>
          <div className="flex items-center gap-1">
            <Circle className="text-emerald-500" size={10} />
            <span className=" text-xs text-emerald-500 leading-3">{`Online`}</span>
          </div>
        </div>
        <button className="cursor-pointer" onClick={chatStartOver}>
          <X className="text-white" />
        </button>
      </div>
      <p className="text-center text-xs leading-3">{`${todayDate}`}</p>
    </header>
  )
}
