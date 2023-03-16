import React from 'react'
import { useParams } from 'react-router-dom'

function SolveTest() {
  const {testId} = useParams();
  console.log(testId);
  //TODO: Add Solve Test Page
  return (
    <div>SolveTest</div>
  )
}

export default SolveTest