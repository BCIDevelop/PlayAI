import "./button.css"

const Button = ({buttonText,classText,onClick}:{buttonText:string,classText?:string,onClick?:()=>void}) => {
  return (
    <button onClick={onClick?()=>onClick():undefined} className={!classText?"btn-submit":`btn-submit ${classText}`}>{buttonText}</button>
  )
}

export default Button
