import { FlowCardType } from '../../types/flowCard.type'
import './flowCards.css'
import { Link } from 'react-router-dom'
const FlowCards = ({routes,image}: FlowCardType) => {
  return (
    <div className='flow-card-main-container'>
        <figure className='flow-card-main-container__figure'>
            <img className='flow-card-main-container__image' src={image} alt="top background" />
        </figure>
        <div className='flow-card-main-container__links-container links-container-flow-card'>
            {routes.map((element,index) => <Link className='links-container-flow-card__link' key={`flow-card-${index}`} to={element.route}>{element.name}</Link>)}
           
        </div>
      
    </div>
  )
}

export default FlowCards
