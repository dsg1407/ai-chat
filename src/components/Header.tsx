import { Circle, X } from "phosphor-react"

import Avatar from "../assets/foto.jpg"

export function Header() {
  return (
    <header className="flex flex-col gap-3">
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
  )
}
