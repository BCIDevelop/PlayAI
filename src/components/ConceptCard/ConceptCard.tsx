
import { ConceptCardType } from '../../types/concept/conceptCard.type'
import './conceptCard.css'

const ConceptCard = ({children,text,title}:ConceptCardType) => {
  return (
    <div className='concept-card-main-container'>
       <h2 className='concept-card-main-container__h2'>{title}</h2>
       <p className='concept-card-main-container__paragraph'>{text}</p> 
      {children}
    </div>
  )
}

export default ConceptCard
