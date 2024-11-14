import { Outlet } from "react-router-dom"
import LayoutHome from "./layout/LayoutHome"

const Home = () => {
  return (
    <LayoutHome>
      <Outlet></Outlet>
    </LayoutHome>
    
  )
}

export default Home
