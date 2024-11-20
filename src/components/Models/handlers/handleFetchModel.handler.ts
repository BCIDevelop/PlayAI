import { NavigateFunction } from "react-router-dom"
import makeRequest from "../../../services/api.service"
import { handleStatus } from "../../../utils/handleStatus"
import { FetchedAITags } from "../../../types/aiTags/fetchedAITags.type"

export const handleFetchModel=async (
    controllerRef:React.MutableRefObject<AbortController | null>,
    name:string,
    navigator:NavigateFunction,
    removeUser:()=>void,
    showToast: (message: string, type?: string) => void,
    setData: React.Dispatch<React.SetStateAction<FetchedAITags | undefined>>
)=>{
    controllerRef.current = new AbortController()
    const signal = controllerRef.current.signal
    const {results,status} = await makeRequest(signal,`tags/${name}`,'GET',{},true)
    if(handleStatus(status,navigator,removeUser,showToast)){
        setData(results)
    }
}