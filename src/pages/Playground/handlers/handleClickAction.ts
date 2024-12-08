import makeRequest from "../../../services/api.service"
import { RequestValidationType } from "../../../types/fetch.type"
import { AnswerFetchedType } from "../../../types/playground/answerFetched.type"
import { handleStatus } from "../../../utils/handleStatus"

export const handleClickAction =async  <T,>(
    answerRef:React.MutableRefObject<string[]>,
    stateAnserRef:React.MutableRefObject<string[]>,
    setIsSolution:React.Dispatch<React.SetStateAction<boolean>>,
    setSelected:React.Dispatch<React.SetStateAction<number | null>>,
    setData:React.Dispatch<React.SetStateAction<T | null>>,
    { showToast, removeUser, navigator, controllerRef }: RequestValidationType,
    questionId:string,
    answerId:string
)=>{
    controllerRef.current = new AbortController()
    const signal = controllerRef.current.signal
    const {results,status} = await makeRequest(signal,`playground/questions/${questionId}/answer/${answerId}`,'POST',{answers:[...answerRef.current,answerId]},true)
    const data = results.results as AnswerFetchedType
    if(handleStatus(status,navigator,removeUser,showToast)){
        setSelected(null)
        setData(results.results)
        stateAnserRef.current.push(questionId)
        answerRef.current.push(answerId)
        if(data.status === 1) setIsSolution(true)
    }
    else showToast('Error sending answer')
}
export const handleClickActionCurrying = <T,>(
    answerRef:React.MutableRefObject<string[]>,
    stateAnserRef:React.MutableRefObject<string[]>,
    setIsSolution:React.Dispatch<React.SetStateAction<boolean>>,
    setSelected:React.Dispatch<React.SetStateAction<number | null>>,
    setData:React.Dispatch<React.SetStateAction<T | null>>,
    { showToast, removeUser, navigator, controllerRef }: RequestValidationType,
    questionId:string,
    answerId:string
)=>{
    return ()=>{
        handleClickAction(answerRef,stateAnserRef,setIsSolution,setSelected,setData,{showToast,removeUser,navigator,controllerRef},questionId,answerId)
    }
} 