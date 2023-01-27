import "./styles/global.css"
import { Close, Ellipse } from "react-ionicons"

import Avatar from "./assets/foto.jpg"

export function App() {
  return (
    <div className="bg-background h-screen py-8 px-20 text-gray-200 font-roboto">
      <header>
        <div className="flex items-center justify-between gap-4">
          <img
            className="w-full max-w-[48px] rounded-full"
            src={Avatar}
            alt="Foto de avatar do chat"
          />
          <div className="w-full flex flex-col gap-1">
            <h1 className="font-bold text-base">Cecilia Sassaki</h1>
            <div className="flex items-center gap-1">
              <Ellipse color="#00B37E" width={"10px"} />
              <span className=" text-xs text-[#00B37E]">Online</span>
            </div>
          </div>
          <button className="cursor-pointer">
            <Close color="#FFFFFF" />
          </button>
        </div>
      </header>
      <main>
        <div>MESSAGES</div>
        <div>CHAT MENU</div>
      </main>
    </div>
  )
}
