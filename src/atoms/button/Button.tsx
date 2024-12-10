import { ReactNode } from "react"
import "./button.css"

const Button = ({buttonText,classText,onClick,children,loading=false}:{buttonText:string,classText?:string,onClick?:()=>void,loading?:boolean,children?:ReactNode}) => {
  
  return (
    <button onClick={onClick?()=>onClick():undefined} className={!classText?"btn-submit":`btn-submit ${classText}`}>{!loading && buttonText }
        {children}
    </button>
  )
}

export default Button
