import React from "react"
import {createRoot} from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { ContextProvider } from "./Context"

import App from "./App"

createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ContextProvider>

)