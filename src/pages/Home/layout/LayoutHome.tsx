import { ReactElement } from "react"
import NavSection from "../../../components/NavSection/NavSection"
import './layoutHome.css'
const LayoutHome = ({children}:{children: ReactElement}) => {

  return (
    <div className="home-layout-container">
       <NavSection></NavSection>
       <div className="home-layout-container__main">
        {children}
       </div>
    </div>
  )
}

export default LayoutHome
