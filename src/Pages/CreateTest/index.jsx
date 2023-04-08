import React, { useState } from "react"
import Layout from "../../Layout"
import QuestionForm from "./Components/QuestionForm"
import { addTest } from "../../Firebase/database"
import { v4 as uuidv4 } from "uuid"
import { toast } from "react-hot-toast"
import style from "./create-test.module.css"
import SuccessToast from "../../Toasts/SuccessToast"

function CreateTest() {
  const [questionAmount, setQuestionAmount] = useState(["x"])
  const [questions, setQuestions] = useState([])

  function addQuestionToTest(questionObj) {
    setQuestions((quest) => [...quest, questionObj])
  }

  function handleAddQuestion(e) {
    e.preventDefault()
    setQuestionAmount((quest) => [...quest, "x"])
  }

  async function handleCompleteTest(e) {
    e.preventDefault()
    let newTest = {
      _id: uuidv4(),
      title: document.getElementById("test_title_input").value,
      questions,
    }
    await addTest(newTest)
    toast.success(
      <SuccessToast url={`http://localhost:3002/solve/${newTest._id}`} />,
      {
        duration: 6000,
        style: {
          borderRadius: 0,
          boxShadow: "6px 6px #000",
          marginBottom: "2rem",
        },
      }
    )
  }
  //useEffect(() => {console.log(questions);},[questions])
  return (
    <Layout>
      <section className={style.create_test}>
        <input
          className={style.test_title_input}
          id="test_title_input"
          type="text"
          placeholder="Enter Test Title"
        />
        <div>
          {questionAmount.map((val, index) => {
            return (
              <QuestionForm key={index} addQuestionToTest={addQuestionToTest} />
            )
          })}
          <button
            className={style.btn_add_question}
            onClick={(e) => handleAddQuestion(e)}
          >
            Add Question
          </button>
        </div>
        <button
          className={style.btn_complete_test}
          onClick={(e) => handleCompleteTest(e)}
        >
          Complete Text
        </button>
      </section>
    </Layout>
  )
}

export default CreateTest
