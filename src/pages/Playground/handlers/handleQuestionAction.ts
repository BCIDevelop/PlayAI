import makeRequest from "../../../services/api.service"
import { RequestValidationType } from "../../../types/fetch.type"
import { handleStatus } from "../../../utils/handleStatus"

export const handleQuestionAction =async  <T,>(
    answerRef:React.MutableRefObject<string[]>,
    stateAnserRef:React.MutableRefObject<string[]>,
    setIsSolution:React.Dispatch<React.SetStateAction<boolean>>,
    setData:React.Dispatch<React.SetStateAction<T | null>>,
    { showToast, removeUser, navigator, controllerRef }: RequestValidationType,
    questionId:string
)=>{
    controllerRef.current = new AbortController()
    const signal = controllerRef.current.signal
    const {results,status} = await makeRequest(signal,`playground/questions/${questionId}`,'GET',{},true)
    if(handleStatus(status,navigator,removeUser,showToast)) {
        setData(results.results)
        setIsSolution(false)
        stateAnserRef.current = ["1"]
        answerRef.current = []
    }
    else showToast('Error fetching question')
}
export const hanldeQhandleQuestionActionCurrying = <T,>(
    answerRef:React.MutableRefObject<string[]>,
    stateAnserRef:React.MutableRefObject<string[]>,
    setIsSolution:React.Dispatch<React.SetStateAction<boolean>>,
    setData:React.Dispatch<React.SetStateAction<T | null>>,
    { showToast, removeUser, navigator, controllerRef }: RequestValidationType,
    questionId:string,
)=>{
    return ()=>{
        handleQuestionAction(answerRef,stateAnserRef,setIsSolution,setData,{ showToast, removeUser, navigator, controllerRef },questionId)
    }
}