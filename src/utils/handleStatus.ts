import { NavigateFunction } from "react-router-dom"

export const handleStatus = (status:number,navigate:NavigateFunction,removeUser:()=>void, showToast:(message: string, type?: string) => void) =>{
    if(status <= 204 && status >=200) return true
    if(status===403) {
        removeUser()
        navigate('/login')
        return false
    }
    if(status===400){
        showToast("Por favor revisa tus datos")
        return false
    }
    if(status===500) {
        navigate('/error')
        return false
    }
} 