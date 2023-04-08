import React, { useContext, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { SolveContext } from "../../Contexts/SolveContext"
import { getTestWithId } from "../../Firebase/database"
import Layout from "../../Layout"
import QuestionComponent from "./Components/QuestionComponent"
import style from "./index.module.css"

function SolveTest() {
  const navigate = useNavigate()
  const { testId } = useParams()
  const { Test, setTest, trueAnswerCount } = useContext(SolveContext)

  useEffect(() => {
    async function setCurrentTest() {
      let sel_test = await getTestWithId(testId)
      setTest(sel_test)
    }
    setCurrentTest()
  }, [])

  if (!Test) return <div>Loading..</div>

  function handleFinishButton(e) {
    e.preventDefault()
    console.log("Finished The Test! true count -> ", trueAnswerCount)
    if (trueAnswerCount > Test.questions.length / 2) {
      console.log("YOU PASSED !!!!")
      navigate("/congratulations", { replace: true })
    } else {
      console.log("YOU DIDN'T PASS")
      navigate("/congratulations", { replace: true })
    }
  }

  return (
    <Layout>
      <section className={style.inner}>
        <div className={style.title}>
          <span>{Test.title}</span>
        </div>
        <div className={style.question_container}>
          {Test.questions.map((question, index) => {
            return <QuestionComponent key={index} questionObj={question} />
          })}
        </div>
        <button onClick={(e) => handleFinishButton(e)}>Finish The Test!</button>
      </section>
    </Layout>
  )
}

export default SolveTest
