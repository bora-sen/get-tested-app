import { createContext, useState } from "react"

export const SolveContext = createContext()

export default function SolveContextProvider({ children }) {
  const [Test, setTest] = useState(false)

  const [trueAnswerCount, setTrueAnswerCount] = useState(0)

  function IncrementTrueCount() {
    setTrueAnswerCount((prev) => (prev += 1))
  }

  const data = {
    Test,
    setTest,
    trueAnswerCount,
    setTrueAnswerCount,
    IncrementTrueCount,
  }

  return <SolveContext.Provider value={data}>{children}</SolveContext.Provider>
}
