import { ReactElement } from "react"
import { NavigateFunction } from "react-router-dom"

export type FormType = {
    children:ReactElement
    inputs:FormElement[]
    submit:(e:React.FormEvent<HTMLFormElement>,controlSignal:AbortController,navigate?:NavigateFunction,setIsLoading?:React.Dispatch<React.SetStateAction<boolean>>)=>void;
    buttonText:string
}
export type FormElement={
    type:string;
    label:string;
}