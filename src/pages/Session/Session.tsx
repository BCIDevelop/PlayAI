import {  Link, useLocation } from 'react-router-dom'
import './session.css'
import Form from '../../components/Form/Form'
import background from '../../assets/background.svg'
import logo from '../../assets/playAILogo.svg'
import facebook from '../../assets/face.svg'
import google from '../../assets/google.svg'
import useUser from '../../hook/useUser'
import { handleLoginCurrying, handleRegisterCurrying } from './handlers/handleSubmitSession.handler'
import useAlert from '../../hook/useAlert'
import { handlerFacebook } from './handlers/handleFacebookAuth.handler'
const Session = () => {
  const {storeUser,removeUser} = useUser()
  const location=useLocation()
  const {showToast} = useAlert()
  const isLogin = location.pathname ==='/login'
  const formProps = isLogin ? [{type:"email",label:"Email"},{type:"password",label:"password"}] 
  : [{type:"text",label:"Full Name"},{type:"email",label:"Email"},{type:"password",label:"Password"},{type:"password",label:"Confirm"}]
  return (
    <div className='main-session-container'>
        <div className='main-session-container__background-color'></div>
        <div className='main-session-container__header header-session'>
            <img className='main-session-container__background' src={background} alt='background'/>
            <div className='header-session__logo header-session-logo'>

            <img className='header-session-logo__image' src={logo} alt="logo" />
            <p className='header-session-logo__text'>PLAY AI</p>
            </div>
            {
               isLogin
               ? <p className='header-session__text'>DONT HAVE AN ACCOUNT? <span><Link to={'/register'} className='header-session__link'>  Sign Up</Link></span> </p>     
               : <p className='header-session__text'>HAVE AN ACCOUNT? <span><Link to={'/login'} className='header-session__link'>  Sign In</Link></span> </p>      
            }
            <div className='header-session__brand'>{isLogin? "SIGN IN": "SIGN UP"} <span className='header-session__brand-span'>ADVENTURE!</span></div>

        </div>
        <div className='main-session-container__section'>
            <div className='main-session-container__form-container session-form-container'>
                <h1 className='session-form-container__h1'>{isLogin? "SIGN IN": "SIGN UP"}</h1>
                <p className='session-form-container__text'>{isLogin ? "Sign In with email address" : "Sign Up with email address"}</p>
                <Form inputs={formProps} submit={isLogin? handleLoginCurrying(storeUser,removeUser,showToast):handleRegisterCurrying(removeUser,showToast)} buttonText={isLogin?"Log In":"Sign Up"}>
                    <></>
                </Form>
            </div>
            <div className='main-session-container__socials-container session-social-container'>
                <h3 className='session-social-container__h3'>Or continue with</h3>
                <div className='session-social-container__buttons'>
                    <button className='session-social-container__element session-social-element'>
                        <img src={google} alt="Google" />
                        <p className='session-social-element__text'>Google</p>
                    </button>
                    <button onClick={handlerFacebook} className='session-social-container__element session-social-element'>
                        <img src={facebook} alt="Facebook" />
                        <p className='session-social-element__text'>Facebook</p>
                    </button>
                </div>
                
                <p className='session-social-container__text'> By registering you with our <span className='session-social-container__terms'>Terms and Conditions</span></p>
            </div>
        </div>
        
      
    </div>
  )
}

export default Session
