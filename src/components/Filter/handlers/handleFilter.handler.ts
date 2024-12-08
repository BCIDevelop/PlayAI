
import { NavigateFunction } from "react-router-dom";
import makeRequest from "../../../services/api.service";
import { handleStatus } from "../../../utils/handleStatus";

export const handleFilter = async <T,>(
    e:React.FormEvent<HTMLFormElement>,
    setSelected:React.Dispatch<React.SetStateAction<string[]>>,
    selectTag:string[],
    selectArchitecture:string[],
    setData:React.Dispatch<React.SetStateAction<T[] | null>>,
    showToast:(message: string, type?: string | undefined) => void,
    removeUser:()=>void,
    navigator:NavigateFunction,
    controllerRef:React.MutableRefObject<AbortController | null>

)=>{
    const target = e.target as HTMLInputElement;
    const {checked,name} = target
    const formElemnt =e.currentTarget
    const id = formElemnt.getAttribute('id')    
    let tagCopy = [...selectTag]
    let architectureCopy = [...selectArchitecture]
    if(id==='form-filter-tag') {
        if(checked)tagCopy.push(name)
        else tagCopy = tagCopy.filter(element=> element!==name)
    }
    else {
        if(checked) architectureCopy.push(name)
        else architectureCopy = architectureCopy.filter(element=> element!==name)
    }
    let url =`models` 
    if(tagCopy.length>0){
        const tagQueryParams = `tags=${tagCopy.join(',')}`
        url += `?${encodeURIComponent(tagQueryParams)}`
        if(architectureCopy.length>0) {
            const architectureQueryParams = `typeAI=${architectureCopy.join(',')}`
            url += `&${encodeURIComponent(architectureQueryParams)}`
        }
    }
    else if(architectureCopy.length>0){
        const architectureQueryParams = `typeAI=${architectureCopy.join(',')}`
        url += `?${encodeURIComponent(architectureQueryParams)}`
    }
    if(!checked) setSelected(prev => prev.filter(element=> element !== name))
    else setSelected(prev=> [...prev,name])
    controllerRef.current = new AbortController()
    const signal = controllerRef.current.signal
    const {results,status} =await makeRequest(signal,`${url}`,'GET',{},true)
    if(handleStatus(status,navigator,removeUser,showToast)){
        setData(results.results)
    }
}