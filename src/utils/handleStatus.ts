import { NavigateFunction } from "react-router-dom"

export const handleStatus = (status:number,navigate:NavigateFunction,removeUser:()=>void, showToast:(message: string, type?: string) => void) =>{
    if(status <= 204 && status >=200) return true
    if(status===403) {
        removeUser()
        navigate('/login')
        return false
    }
    if(status===400){
        showToast("Please review your data")
        return false
    }
    if(status===401){
        showToast("Not Authorized")
        return false
    }
    if(status===500) {
        navigate('/error')
        return false
    }
} 