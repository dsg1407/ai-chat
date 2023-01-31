import React from "react"
import ReactDOM from "react-dom/client"
import { App } from "./App"
import { MessageProvider } from "./context/MessageContext"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MessageProvider>
      <App />
    </MessageProvider>
  </React.StrictMode>
)
