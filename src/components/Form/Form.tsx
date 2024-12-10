
import './form.css'
import Input from '../../atoms/input/Input'
import { FormElement, FormType } from '../../types/form.type'
import Button from '../../atoms/button/Button'
import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ThreeDots } from 'react-loader-spinner'
const Form = ({children,inputs,submit,buttonText}:FormType) => {
  const controllerSignalRef = useRef<AbortController | null>(null);
  const navigate = useNavigate();
  const [loading,setIsLoading] = useState<boolean>(false)
  
  useEffect(()=>{
    controllerSignalRef.current = new AbortController();
    return ()=>{
      controllerSignalRef.current?.abort()
    }
    
  },[])
  return (
    <form onSubmit={(e)=>submit(e,controllerSignalRef.current as AbortController,navigate,setIsLoading)} className="login_container__form form-container" noValidate>
        {inputs.map((element:FormElement,index:number)=> <Input key={`form-${index}`} inputElement={element} index={index}></Input>)}
        {children}
        <Button buttonText={buttonText} loading={loading}>
           {loading 
              ? <ThreeDots height={15} width={30} color='#fff'  ariaLabel="three-dots-loading"></ThreeDots>
              : <></>
            }
        </Button>
    </form>
  )
}

export default Form
