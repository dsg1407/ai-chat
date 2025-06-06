export interface MessageBoxProps {
  message: string
  role: string
  name: string
  time: string
}

export function MessageBox({ message, name, role, time }: MessageBoxProps) {
  return (
    <div className="mx-3">
      <div
        className={`flex flex-col gap-2.5 ${role === "user" && "items-end"}`}
      >
        <p className="text-xs leading-3">{`${name} - ${time}`}</p>
        <div
          className={`p-3.5 w-max max-w-[50%] rounded-tr-lg rounded-bl-lg ${role === "model"
            ? "rounded-br-lg bg-violet-700"
            : "rounded-tl-lg bg-emerald-500"
            }`}
        >
          <p className="text-xs leading-3">{message}</p>
        </div>
      </div>
    </div>
  )
}
