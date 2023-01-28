import "./styles/global.css"
import { Circle, X, PaperPlaneRight } from "phosphor-react"

import Avatar from "./assets/foto.jpg"

export function App() {
  return (
    <div className="bg-background h-screen py-8 px-20 text-gray-200 font-roboto grid grid-rows-layout">
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

      <main className="overflow-y-auto my-6">
        <div className="">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
            veritatis officia repellat, aperiam nostrum optio consequatur
            suscipit delectus voluptates ab, at distinctio totam, fugiat nobis
            voluptate nesciunt vero saepe nisi!
          </p>
        </div>
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
