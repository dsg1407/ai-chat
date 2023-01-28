export interface MessageBoxProps {
  message: string
  sender: string
  name: string
  time: string
}

export function MessageBox({ message, name, sender, time }: MessageBoxProps) {
  return (
    <div
      className={`flex flex-col gap-2.5 ${sender === "user" && "items-end"}`}
    >
      <p className="text-xs leading-3">{`${name} - ${time}`}</p>
      <div
        className={`p-3.5 w-max max-w-[50%] rounded-tr-lg rounded-bl-lg ${
          sender === "replier"
            ? "rounded-br-lg bg-violet-700"
            : "rounded-tl-lg bg-emerald-500"
        }`}
      >
        <p className="text-xs leading-3">{message}</p>
      </div>
    </div>
  )
}
