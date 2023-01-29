import { useState } from "react"
import { PaperPlaneRight } from "phosphor-react"

export function MessageForm() {
  const [message, setMessage] = useState("")

  function handleSubmitMessage(e: React.SyntheticEvent) {
    e.preventDefault()
    console.log(message)
    setMessage("")
  }

  return (
    <form
      className="flex items-center justify-between gap-2.5 w-full"
      onSubmit={handleSubmitMessage}
    >
      <input
        type="text"
        placeholder="Digite sua mensagem..."
        className="w-full leading-3 text-xs bg-transparent placeholder:italic focus:outline-none "
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />
      <button type="submit">
        <PaperPlaneRight size={24} className="text-gray-200" />
      </button>
    </form>
  )
}
