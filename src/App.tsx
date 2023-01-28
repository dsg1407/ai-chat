import { Header } from "./components/Header"
import "./styles/global.css"

export function App() {
  return (
    <div className="bg-background h-screen py-8 px-20 text-gray-200 font-roboto grid grid-rows-layout">
      <Header />

      <main className="overflow-y-auto">
        <div className="my-5">MESSAGES</div>
      </main>
      <footer className="">CHAT MENU</footer>
    </div>
  )
}
