
import circle from '../../assets/circle-arrow.svg'
import { AnswerType } from '../../types/playground/answerFetched.type'
import { handleSelect } from './handlers/handleSelect.handler'
import './question.css'
const QuestionAnswer = ({selected,index,setSelected,answer,level}:{level:number,answer:AnswerType,selected:number | null, index:number,setSelected:React.Dispatch<React.SetStateAction<number | null>>}) => {
  let classText = "question-container"
  if(selected?.toString() && selected === index) classText = `${classText} question-container--active`

  return (
    <div onClick={()=>{handleSelect(setSelected,index,selected)}} className={classText}>
        <div className="question-container__main main-question-container">
            <div className="main-question-container__text question-text-container">
                <h3 className="question-text-container__h3">{`Answer ${level} - Option ${index + 1}`}</h3>
                <p className="question-text-container__p">{answer.answer} </p>
            </div>
            <div className='main-question-container__image image-main-question-container'>

            <img className='image-main-question-container__img' src={circle} alt="circle arrow" />
            </div>
        </div>
        <div></div>
    </div>
  )
}

export default QuestionAnswer
