
import { Link, useNavigate } from 'react-router-dom'
import './navbar.css'
import logo from '../../assets/playAILogo.svg'
import Avatar from '../../atoms/avatar/Avatar'
import useUser from '../../hook/useUser'
import Hamburger from '../../atoms/hamburger/Hamburger'
import { handlerMore } from './handler/handleMore.handler'
import { handleClickCaveat } from './handler/handleClickCaveat'
import { handleClickLogOut } from './handler/handleClickLogOut'
const NavBar = () => {
    const {user,removeUser} = useUser()
    const navigator = useNavigate()
  return (
    <nav className='navbar-container'>
      <div className='navbar-container__brand navbar-brand'>
             <Hamburger></Hamburger>
            <img className='navbar-brand__image' src={logo} alt="logo" />
            <h1 onClick={()=>navigator('/home') } className='navbar-brand__h1'>PLAYAI</h1>
      </div>
      <div className='navbar-container__aside'>
         <ul className='navbar-container__list lists-navbar'>
          <li className='lists-navbar__element'><Link className='lists-navbar-link' to={"playground"}>PlayGround</Link></li>
         <li className='lists-navbar__element'><Link className='lists-navbar-link' to={"models"}>Models</Link></li>
         <li className='lists-navbar__element'><a className='lists-navbar-link' href="https://github.com/BCIDevelop/PlayAI" target="_blank">GitHub</a></li>
        </ul>
        <svg onClick={handlerMore} className='navbar-container__more' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"/></svg>
        <div className='navbar-container__user-container user-container-navbar'>
        <Avatar userAvatar ={user.avatar ? user.avatar : null}></Avatar>
        <p className='user-container-navbar__user-info'>{`${user.name} ${user.last_name}`}</p>
        <svg onClick={handleClickCaveat} className='nav-section-element__icon user-container-navbar__icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg> 
        <div className='user-container-navbar__dropdown dropdown-user-navbar'>
            <p onClick={()=>handleClickLogOut(removeUser)} className='dropdown-user-navbar__log-out'>Log Out</p>
        </div>
        </div>
      </div>
      
    </nav>
  )
}

export default NavBar
