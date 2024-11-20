import { useNavigate } from "react-router-dom"
import useAlert from "./useAlert"
import useUser from "./useUser"
import { useRef } from "react"


const useRequest = () => {
  const {removeUser} = useUser()
  const {showToast} = useAlert()
  const navigator = useNavigate()
  const controllerRef = useRef<AbortController | null> (null)
  return {removeUser,showToast,navigator,controllerRef}
}

export default useRequest
