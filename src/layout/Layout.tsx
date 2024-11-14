import { ReactElement } from 'react'
import './layout.css'
import { useLocation } from 'react-router-dom'
import NavBar from '../components/NavBar/NavBar'
import useUser from '../hook/useUser'

const Layout = ({children}:{children:ReactElement}) => {
  const {user} = useUser()
  const location = useLocation()
  const path = location.pathname
  return (
    <div className='layout-container'>
       {!['/login','/register','/'].includes(path) && user &&  <NavBar></NavBar>}
       {children}
    </div>
  )
}

export default Layout
