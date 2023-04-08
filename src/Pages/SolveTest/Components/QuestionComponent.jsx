import React, { useContext, useState } from "react"
import { SolveContext } from "../../../Contexts/SolveContext"
import style from "./question.module.css"
import { useNavigate } from "react-router-dom"

function QuestionComponent({ questionObj }) {
  const { IncrementTrueCount } = useContext(SolveContext)
  const [selChoice, setSelChoice] = useState(false)

  const trueChoiceObj = questionObj.choices.find((choice) => {
    return choice.isTrue === true
  })
  //console.log(trueChoiceId);
  //console.log(questionObj._id);

  function handleSubmitQuestion(e) {
    e.preventDefault()
    //console.log("handled");

    if (selChoice === trueChoiceObj._id) {
      console.log("YOUR ANSWER IS TRUE!!")
      IncrementTrueCount()
    } else {
      console.log("FALSE")
    }
    e.target.disabled = true
  }

  function handleFormChange(e) {
    setSelChoice(e.target.id)
  }
  //TODO: Add module css
  return (
    <div className={style.inner}>
      <span className={style.title}>{questionObj.title}</span>
      <form onChange={(e) => handleFormChange(e)}>
        <ul>
          <li className="">
            <input
              type="radio"
              name={`${questionObj._id}`}
              id={`${questionObj.choices[0]._id}`}
            />
            <span>{questionObj.choices[0].title}</span>
          </li>
          <li className="">
            <input
              type="radio"
              name={`${questionObj._id}`}
              id={`${questionObj.choices[1]._id}`}
            />
            <span>{questionObj.choices[1].title}</span>
          </li>
          <li className="">
            <input
              type="radio"
              name={`${questionObj._id}`}
              id={`${questionObj.choices[2]._id}`}
            />
            <span>{questionObj.choices[2].title}</span>
          </li>
          <li className="">
            <input
              type="radio"
              name={`${questionObj._id}`}
              id={`${questionObj.choices[3]._id}`}
            />
            <span>{questionObj.choices[3].title}</span>
          </li>
        </ul>
      </form>
      <button
        className={style.btn_submit_question}
        onClick={(e) => handleSubmitQuestion(e)}
      >
        Submit Question!
      </button>
    </div>
  )
}

export default QuestionComponent
