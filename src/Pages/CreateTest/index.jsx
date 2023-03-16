import React, { useState } from 'react';
import Layout from '../../Layout';
import QuestionForm from './Components/QuestionForm';
import { addTest } from '../../Firebase/database';
import {v4 as uuidv4} from 'uuid'
import { toast } from 'react-hot-toast';

function CreateTest() {
  const [questionAmount,setQuestionAmount] = useState(["x"]);
  const [questions,setQuestions] = useState([]);

  function addQuestionToTest(questionObj){
    setQuestions(quest => [...quest,questionObj]);
  }

  function handleAddQuestion(e){
    e.preventDefault();
    setQuestionAmount(quest => [...quest,'x']);
  }

  async function handleCompleteTest(e){
    e.preventDefault();
    let newTest = {
      _id:uuidv4(),
      questions
    }
    await addTest(newTest);
    toast.success("Your test is created!",{duration:"4s"});

  }
  //useEffect(() => {console.log(questions);},[questions])
  return (
    <Layout>
      <div>
        {
          questionAmount.map((val,index) => {
            return (
              <QuestionForm key={index} addQuestionToTest={addQuestionToTest} />
            )
          })
        }
        <button onClick={e => handleAddQuestion(e)}>Add Question</button>
      </div>
      <button onClick={e => handleCompleteTest(e)}>Complete Text</button>
    </Layout>
  )
}

export default CreateTest