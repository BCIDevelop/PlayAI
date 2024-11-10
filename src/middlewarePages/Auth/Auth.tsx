import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import useUser from "../../hook/useUser"
const Auth = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const queryParams = new URLSearchParams(location.search)
    const accessToken = queryParams.get('accessToken') as string
    const email = queryParams.get('email') as string
    const name = queryParams.get('name') as string
    const last_name = queryParams.get('last_name') as string
    const avatar = queryParams.get('avatar') as string
    const id = queryParams.get('id') as string
    const {storeUser} = useUser()
  useEffect(()=>{
   
    if(accessToken && email && id){
        storeUser({accessToken,id,email,last_name,avatar,name})
        navigate('/home')
    }
    else navigate('/error')
   
  },[])
  return null
}

export default Auth
