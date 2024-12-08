
import { NavigateFunction } from "react-router-dom"
import makeRequest from "../../../services/api.service"
import { handleStatus } from "../../../utils/handleStatus"
import { FetchedAIModelsType } from "../../../types/aiModels/fetchedAIModels.type"

export const handleArrowClick =async (e:React.MouseEvent<SVGSVGElement>,controllerRef:React.MutableRefObject<AbortController | null>,navigate:NavigateFunction, showToast: (message: string, type?: string) => void,removeUser:() => void,setIsModels:React.Dispatch<React.SetStateAction<FetchedAIModelsType[] | undefined>>,name:string )=>{
    e.currentTarget.classList.toggle("nav-section-element__icon-arrow--active")
    if(!e.currentTarget.classList.contains('nav-section-element__icon-arrow--active')){
        setIsModels(undefined)
        return
    }   
    const controller = new AbortController()
    controllerRef.current = controller
    const signal = controllerRef.current.signal
    const {results,status} =await makeRequest(signal,`models?tags=${name}&per_page=3`,'GET',{},true)
    if(handleStatus(status,navigate,removeUser,showToast)){
        setIsModels(results.results)
    }
    else showToast("Review your data",)

}