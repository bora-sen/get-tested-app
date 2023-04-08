import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function TestResult() {
  const { isPassed } = useParams()
  const [isPass, setIsPass] = useState("")

  useEffect(() => {
    setIsPass(isPassed)
  }, [])

  if (isPass === "true") {
    return (
      <section
        id="congratulations_section"
        className="w-full h-screen flex flex-col text-4xl font-bold items-center justify-center"
      >
        <div>Congratulations!</div>
        <span>You Passed The Test!!</span>
      </section>
    )
  } else if (isPass === "false") {
    return (
      <section
        id="congratulations_section"
        className="w-full h-screen flex flex-col text-4xl font-bold items-center justify-center"
      >
        <div>OOPS!</div>
        <span>You Didn't Passed The Test</span>
      </section>
    )
  }
}

export default TestResult
