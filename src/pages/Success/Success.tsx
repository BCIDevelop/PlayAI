import { useEffect } from 'react'
import './success.css'
import { useLocation,useNavigate } from 'react-router-dom'
import background from '../../assets/background.svg'
import Button from '../../atoms/button/Button'
import facebook from '../../assets/facesocial.svg'
import tiktok from '../../assets/tiktok.svg'
import youtube from '../../assets/youtube.svg'
import instagram from '../../assets/instagram.svg'
import logo from '../../assets/playAILogo.svg'
import bottom from '../../assets/bottom.png'
const Success = () => {
  const location = useLocation()
  const navigator = useNavigate()
  const queryParams = new URLSearchParams(location.search)
  const type: "confirm" | "success" = queryParams.get('type') as "confirm" | "success"
  const isConfirm = type === "confirm" 
  const title = isConfirm?"Thanks for joining us, come check around.":"Thanks for your subscription, its now your time to shine"
  const paragraph = isConfirm?"Welcome to our page, we are glad to get you here. Enjoy PLAIAI!": "You have joinde more tha 1000 developers that use the complete feature of our page"
  const targetRoute = isConfirm ? "/login" : "/home"
  useEffect(()=>{
    if(!type || (type !== 'confirm' && type !== 'success')) navigator("/")
  },[])
  return (
    <div className='successs-main-container'>
        <div className='success-main-container__card card-section-success-container '>
            <div className='card-section-success-container__main card-success-container'>
                <div className='card-success-container__header-section success-header-container'>
                    <img className='success-header-container__image' src={background} alt="background" />
                    
                    <div className='success-header-container__top top-header-success-container'>
                        <div className='top-header-success-container__brand brand-top-success-container'>
                            <img className='brand-top-success-container__image' src={logo} alt="logo" />
                            <h3 className='brand-top-success-container__h3'>PLAYAI</h3>
                        </div>
                        <p className='top-header-success-container__paragraph'>Empowering AI</p>
                    </div>
                    <p className='success-header-container__title'>{title}</p>
                </div>

                <p className='card-success-container__text'>{paragraph}</p>
                <div onClick={()=>navigator(targetRoute)}>
                    <Button classText='card-success-container__button' buttonText='Continue' ></Button>
                </div>
                <p className='card-success-container__end-text'>Review <span className='card-success-container__terms'>Terms and Conditions</span></p>
                <img className='card-success-container__bottom-image' src={bottom} alt="bottom-image" />
            </div>
           
            <div className='card-success-container__footer footer-card-success-container'>
                <div className='footer-card-success-container__top top-section-footer-success'>
                    <div className='top-section-footer-success__block block-top-section-success-container'>
                        <p className='block-top-section-success-container__element'>Lima</p>
                        <p className='block-top-section-success-container__element'>New York</p>
                    </div>
                    <div className='top-section-footer-success__block block-top-section-success-container'>
                        <p className='block-top-section-success-container__element'>22 W 1th Jr</p>
                        <p className='block-top-section-success-container__element'>34 W 14th St</p>
                    </div>
                    <div className='top-section-footer-success__block block-top-section-success-container'>
                        <p className='block-top-section-success-container__element'>Lima,15001 Peru</p>
                        <p className='block-top-section-success-container__element'>NY NY, 10011, USA</p>
                    </div>
                </div>
                <p className='footer-card-success-container__disclaimer'>This information was appear to you on behalf to PLAYAI, please free to contact us at lopez.luisdev@gmail.com</p>
                <div className='footer-card-success-container__socials socials-footer-successs-container'>
                    <img className='socials-footer-success-container__image' src={facebook} alt="facebook" />
                    <img className='socials-footer-success-container__image' src={instagram} alt="instagram" />
                    <img className='socials-footer-success-container__image' src={youtube} alt="youtube" />
                    <img className='socials-footer-success-container__image' src={tiktok} alt="tiktok" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Success
