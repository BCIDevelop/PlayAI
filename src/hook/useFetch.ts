import { useEffect, useRef, useState } from "react"
import { FetchType } from "../types/fetch.type"
import makeRequest from "../services/api.service"
import useAlert from "./useAlert"
import { handleStatus } from "../utils/handleStatus"
import { useNavigate } from "react-router-dom"
import useUser from "./useUser"
import { ErrorType } from "../types/error.type"


const useFetch = <T,>({fetchOptions}:FetchType):[T | null, React.Dispatch<React.SetStateAction<T | null>>] => {
    const [data,setData] = useState< T | null>(null) 
    const {showToast} = useAlert()
    const {removeUser} = useUser()
    const navigator = useNavigate()
    const controllerRef = useRef<AbortController|null>(null)
    
   async function requestServer(){
    try{
        controllerRef.current = new AbortController()
        const signal = controllerRef.current.signal
        const {context,method,data,hasCredentials,bodyFormat} =fetchOptions
        const {results,status} = await makeRequest(signal,context,method,data,hasCredentials,bodyFormat)
        console.log(results)
        if(!handleStatus(status,navigator,removeUser,showToast)) throw Error(`Fetch Error : ${status}`)
        setData(results.results)
    }
    catch(error:unknown){
        const errorRequest  = error as ErrorType
        if (errorRequest.name !== "AbortError") navigator("/error")
       
    }
      
   }
   useEffect(()=>{
     requestServer()
     return ()=>{ controllerRef.current?.abort()}
   // eslint-disable-next-line react-hooks/exhaustive-deps
   },[])
   return [data,setData]
}
export default useFetch