import React from "react"
import { Route, Routes } from "react-router-dom"
import { CreateTest, Landing, NotFound, SolveTest, TestResult } from "./Pages"

function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/create/test" element={<CreateTest />} />
      <Route path="/solve/:testId" element={<SolveTest />} />
      <Route path="/congratulations/:isPassed" element={<TestResult />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default MainRouter
