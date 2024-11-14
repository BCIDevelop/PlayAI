import { useNavigate } from 'react-router-dom'
import './navigationCard.css'
const NavigationCard = ({to}:{to:string}) => {
  const navigator = useNavigate()
  return (
    <div onClick={()=>navigator(to)} className="navigation-card-container">
      <svg className="navigation-card-container__image" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
      <div className="navigation-card-container__navigate navigate-card-text-container">
        <h4 className="navigate-card-text-container__h4">Navigate</h4>
        <p className="navigate-card-text-container__paragraph">Not sure how to start?</p>
      </div>
    </div>
  )
}

export default NavigationCard
