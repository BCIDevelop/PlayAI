import { useEffect, useRef, useState } from "react"
import Button from "../../atoms/button/Button"
import ProgressBar from "../../atoms/progressBar/ProgressBar"
import QuestionAnswer from "../../components/Question/QuestionAnswer"
import './playground.css'
import useFetch from "../../hook/useFetch"
import { AnswerFetchedType } from "../../types/playground/answerFetched.type"
import { handleClickActionCurrying } from "./handlers/handleClickAction"
import useRequest from "../../hook/useRequest"
import { hanldeQhandleQuestionActionCurrying } from "./handlers/handleQuestionAction"
import { handleClickBackActionCurrying } from "./handlers/handleClickBackAction"

const Playground = () => {
  const answerRef = useRef<string[]>([])
  const stateAnserRef = useRef<string[]>(["1"])
  const [selected,setSelected] = useState<number| null>(null)
  const [isSolution, setIsSolution] = useState<boolean>(false)
  const [data,setData] = useFetch<AnswerFetchedType>({fetchOptions:{
    context:"playground/questions/1",
    method:"GET",
    data:{},
    hasCredentials:true,
    bodyFormat:"row"
  }})
  const {removeUser,showToast,navigator,controllerRef} = useRequest()
  useEffect(()=>{
    return ()=> controllerRef.current?.abort()
  })
  return (
    <div className="playground-container">
      <h1 className="playground-container__h1">{isSolution ? 'Solution: ' :` ${data?.question}`}</h1>
      {isSolution 
      ? (
        <div className="playground-container__solution-container solution-playground-container">
          <p className="solution-playground-container__text">{`Our recommended model to your specific problem is : ${data?.question}`}</p>
          <ul className="solution-playground-container__models-container models-playground-solution-container">
              {data && data.models.length > 0 && data.models.map((element,index) => <li key={`model-${index}`} className="models-playground-solution-container__element">{`${element.name} - score: ${element.score}`} </li>) }
          </ul>
        </div>
      )
      : (
        <>
        <div className="playground-container__question-container">
          {data?.answers && data.answers.length>0 && data.answers.map((element,index) => <QuestionAnswer key={data.answers[index].answer_id } level={data.level} answer={element} selected={selected} setSelected = {setSelected} index={index}></QuestionAnswer>)}  
        </div>
      </>
      )
    }
        <div className="playground-container__progress progress-playground-container">
          <div className="progress-playground-container__information information-progress-playground-container">

            <p className="information-progress-playground-container__text">Progress</p>
            <p className="information-progress-playground-container__text">{`${data?.level} of 5`}</p>
          </div>
          <ProgressBar numberQuestion={5} currentQuestion={data && data.level}></ProgressBar>
          <div className="progress-playground-container__buttons buttons-playground-container">
            {
              !isSolution && <Button onClick={stateAnserRef.current.length>1?handleClickBackActionCurrying(answerRef,stateAnserRef,setSelected,setData,{showToast,removeUser,navigator,controllerRef}):undefined} buttonText={"Back"} classText="buttons-playground-container__button"></Button>
            }
            
            {
              isSolution 
              ? <Button  onClick={hanldeQhandleQuestionActionCurrying<AnswerFetchedType>(answerRef,stateAnserRef,setIsSolution,setData,{showToast,removeUser,navigator,controllerRef},"1")} buttonText={"Again"} classText="buttons-playground-container__button"></Button>
              : <Button  onClick={data && selected?.toString() ? handleClickActionCurrying<AnswerFetchedType>(answerRef,stateAnserRef,setIsSolution,setSelected,setData,{showToast,removeUser,navigator,controllerRef},data.questionId,data.answers[selected!].answer_id):undefined} buttonText={"Continue"} classText="buttons-playground-container__button"></Button>

            }
          </div>
        </div>
    </div>
  )
}

export default Playground
