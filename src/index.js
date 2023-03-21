import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import SolveContextProvider from "./Contexts/SolveContext.js"
import "./index.css"
import MainRouter from "./MainRouter"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <SolveContextProvider>
      <BrowserRouter>
        <MainRouter />
      </BrowserRouter>
    </SolveContextProvider>
  </React.StrictMode>
)
