import { useLocation, useNavigate } from "react-router-dom"
import useFetch from "../../hook/useFetch"
import { useEffect } from "react"

const Confirm = () => {
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const token = queryParams.get("token") as string
  const navigator = useNavigate()
  const [data] = useFetch({fetchOptions:{
    context:"users/verifyAccount",
    method:"PATCH",
    data:{token},
    hasCredentials:false,
    bodyFormat:"row"
  }})
  useEffect(()=>{
    if(!token) navigator("/")
  })
  useEffect(()=>{
    navigator('/success?type=confirm')
  },[data])
  return (
    <></>
  )
}

export default Confirm
