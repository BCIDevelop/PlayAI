import makeRequest from "../../../services/api.service"
import { RequestValidationType } from "../../../types/fetch.type"
import { AnswerFetchedType } from "../../../types/playground/answerFetched.type"
import { handleStatus } from "../../../utils/handleStatus"

export const handleClickBackAction =async (
    answerRef:React.MutableRefObject<string[]>,
    stateAnserRef:React.MutableRefObject<string[]>,
    setSelected:React.Dispatch<React.SetStateAction<number | null>>,
    setData:React.Dispatch<React.SetStateAction<AnswerFetchedType | null>>,
    { showToast, removeUser, navigator, controllerRef }: RequestValidationType
)=>{
    controllerRef.current = new AbortController()
    const questionId = stateAnserRef.current[stateAnserRef.current.length - 1]
    stateAnserRef.current.pop()
    const signal = controllerRef.current.signal
    const {results,status} = await makeRequest(signal,`playground/questions/${questionId}`,'GET',{},true)
    if(handleStatus(status,navigator,removeUser,showToast)) {
        setData(results.results)
        setSelected(null)
        answerRef.current.pop()
    }
    else showToast('Error fetching question')
}

export const handleClickBackActionCurrying = (
    answerRef:React.MutableRefObject<string[]>,
    stateAnserRef:React.MutableRefObject<string[]>,
    setSelected:React.Dispatch<React.SetStateAction<number | null>>,
    setData:React.Dispatch<React.SetStateAction<AnswerFetchedType | null>>,
    { showToast, removeUser, navigator, controllerRef }: RequestValidationType,
)=>{
    return ()=>{
        handleClickBackAction(answerRef,stateAnserRef,setSelected,setData,{ showToast, removeUser, navigator, controllerRef })
    }
}

