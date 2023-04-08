import React from "react"
import { v4 as uuidv4 } from "uuid"
import style from "../create-test.module.css"

function QuestionForm({ addQuestionToTest }) {
  const questionId = uuidv4()
  const formHash = Math.floor(Math.random() * 10000)

  function handleFormSubmit(e) {
    e.preventDefault()
    console.log("submit handled")
    let questionTitle = document.getElementById(
      `question_title_${formHash}`
    ).value
    //console.log(title);

    let choice1 = {
      _id: uuidv4(),
      title: document.getElementById(`choice_text_1_${formHash}`).value,
      isTrue: document.getElementById(`choice_radio_1_${formHash}`).checked,
    }
    let choice2 = {
      _id: uuidv4(),
      title: document.getElementById(`choice_text_2_${formHash}`).value,
      isTrue: document.getElementById(`choice_radio_2_${formHash}`).checked,
    }
    let choice3 = {
      _id: uuidv4(),
      title: document.getElementById(`choice_text_3_${formHash}`).value,
      isTrue: document.getElementById(`choice_radio_3_${formHash}`).checked,
    }
    let choice4 = {
      _id: uuidv4(),
      title: document.getElementById(`choice_text_4_${formHash}`).value,
      isTrue: document.getElementById(`choice_radio_4_${formHash}`).checked,
    }

    let newQuestion = {
      _id: questionId,
      title: questionTitle,
      choices: [choice1, choice2, choice3, choice4],
    }
    //console.log(newQuestion);
    addQuestionToTest(newQuestion)
    document.getElementById(`choice_button_${formHash}`).disabled = true
  }
  //TODO: Add module css
  return (
    <form
      id="questionform"
      onSubmit={(e) => handleFormSubmit(e)}
      className={style.question}
    >
      <input
        className={style.input_question_title}
        id={`question_title_${formHash}`}
        type="text"
        placeholder="Enter question title"
      />
      <ul className={style.choices}>
        <li className={style.choice}>
          <input
            id={`choice_radio_1_${formHash}`}
            name="question-radio"
            type="radio"
            className={style.input_checkbox}
          />
          <input
            className={style.input_text}
            id={`choice_text_1_${formHash}`}
            type="text"
            placeholder="Enter choice"
          />
        </li>
        <li className={style.choice}>
          <input
            id={`choice_radio_2_${formHash}`}
            name="question-radio"
            type="radio"
          />
          <input
            className={style.input_text}
            id={`choice_text_2_${formHash}`}
            type="text"
            placeholder="Enter choice"
          />
        </li>
        <li className={style.choice}>
          <input
            id={`choice_radio_3_${formHash}`}
            name="question-radio"
            type="radio"
          />
          <input
            className={style.input_text}
            id={`choice_text_3_${formHash}`}
            type="text"
            placeholder="Enter choice"
          />
        </li>
        <li className={style.choice}>
          <input
            id={`choice_radio_4_${formHash}`}
            name="question-radio"
            type="radio"
          />
          <input
            className={style.input_text}
            id={`choice_text_4_${formHash}`}
            type="text"
            placeholder="Enter choice"
          />
        </li>
      </ul>
      <button
        className={style.btn_question_submit}
        id={`choice_button_${formHash}`}
      >
        Complete Question
      </button>
    </form>
  )
}

export default QuestionForm
