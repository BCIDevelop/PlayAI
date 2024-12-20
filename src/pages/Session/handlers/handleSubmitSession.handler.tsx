import sanitizeInput from "../../../utils/sanitize"
import { validateInputs ,validatePassword} from "../../../utils/validateInputs"
import { userSchema } from "../../../schemas/users.schemas"
import { User,UserLoggedStorage,UserLogin } from "../../../types/user.type"
import { invalidEffect } from "../../../atoms/input/animations/label.animation"
import makeRequest from "../../../services/api.service"
import { NavigateFunction } from "react-router-dom"
import { handleStatus } from "../../../utils/handleStatus"
export const handleSubmitLogin=async (e:React.FormEvent<HTMLFormElement>,controlSignal:AbortController,navigate:NavigateFunction,storeUser:(dataUser: UserLoggedStorage) => void,removeUser:() => void,showToast:(message: string, type?: string) => void,setIsLoading:React.Dispatch<React.SetStateAction<boolean>>|undefined)=>{
    e.preventDefault()
    const inputs = document.querySelectorAll('.input-container__input') as NodeListOf<HTMLInputElement>
    const email = sanitizeInput(inputs[0].value.trim())
    const password = sanitizeInput(inputs[1].value.trim())
    const {valid,text } = validatePassword(password)
    if (!valid) {
        invalidEffect(1,'password',text)
        return
    }
    const userObject:UserLogin = {email,password}
    const validatedSchema = validateInputs<Omit<User, 'id'>,UserLogin>( userObject,userSchema)
    if(validatedSchema) {
        if(setIsLoading) setIsLoading(true)
        const signal = controlSignal.signal
        const {results,status} = await makeRequest(signal,"users/login","POST",userObject,false)
        if(setIsLoading) setIsLoading(false)
        const {access_token , ...rest} = results
        if(handleStatus(status,navigate,removeUser,showToast)){
            rest.email = email
            storeUser({accessToken:access_token,...rest})
            navigate('/home')
        }
        else showToast("Review your data")
       
    }
    
}
export const handleSubmitRegister=async (e:React.FormEvent<HTMLFormElement>,controlSignal:AbortController,navigate:NavigateFunction,removeUser:() => void,showToast:(message: string, type?: string) => void,setIsLoading:React.Dispatch<React.SetStateAction<boolean>>|undefined)=>{
    e.preventDefault()
    const inputs = document.querySelectorAll('.input-container__input') as NodeListOf<HTMLInputElement>
    const email = sanitizeInput(inputs[1].value.trim())
    const password = sanitizeInput(inputs[2].value.trim())
    const confirmPassword =sanitizeInput(inputs[3].value.trim())
    const fullName =sanitizeInput(inputs[0].value.trim())
    if(password!== confirmPassword) {
        invalidEffect(3,'password',"Password doesn't match")
        return
    }
    const fullNameArray =fullName.split(" ")
    if(fullNameArray.length<2) {
        invalidEffect(0,'text',"Please write last name also")
        return
    }
    const [name,lastName] = fullNameArray
    
    const userObject:Omit<User, 'id'> = {email,password,name,last_name:lastName}
    const validatedSchema = validateInputs<Omit<User, 'id'>,UserLogin>( userObject,userSchema)
    if(validatedSchema) {
        if(setIsLoading) setIsLoading(true)
        const signal = controlSignal.signal
        const {status} = await makeRequest(signal,"users/signUp","POST",userObject,false)
        if(setIsLoading) setIsLoading(false)
        if(handleStatus(status,navigate,removeUser,showToast)) {
            showToast('Mail sent to successfully','Success')
            navigate('/login')
        }
        else showToast("Review your data")
    } 
}

export const handleLoginCurrying=(storeUser:(dataUser: UserLoggedStorage) => void,removeUser:()=>void,showToast:(message: string, type?: string) => void)=>{
    return (e:React.FormEvent<HTMLFormElement>,controlSignal:AbortController,navigate?:NavigateFunction,setIsLoading?:React.Dispatch<React.SetStateAction<boolean>>)=>{
        return handleSubmitLogin(e,controlSignal,navigate!,storeUser,removeUser,showToast,setIsLoading)
    }
}
export const handleRegisterCurrying=(removeUser:()=>void,showToast:(message: string, type?: string) => void)=>{
    return (e:React.FormEvent<HTMLFormElement>,controlSignal:AbortController,navigate?:NavigateFunction,setIsLoading?:React.Dispatch<React.SetStateAction<boolean>>)=>{
        return handleSubmitRegister(e,controlSignal,navigate!,removeUser,showToast,setIsLoading)
    }
}