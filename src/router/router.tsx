import { BrowserRouter,Route,Routes } from "react-router-dom"
import Session from "../pages/Session/Session"
import Layout from "../layout/Layout"
import Private from "../guard/Private"
import Public from "../guard/Public"
import Home from "../pages/Home/Home"
import Success from "../pages/Success/Success"
import Confirm from "../middlewarePages/Confirm/Confirm"
import Auth from "../middlewarePages/Auth/Auth"

function Router(){
    
    return(
        <BrowserRouter>
        
          <Layout>
            <Routes>
            <Route element={<Private></Private>}>
            <Route path="/home" element={<Home/>}></Route>
              </Route>
              <Route element={<Public></Public>}>
                <Route path="/login" element={<Session/>}></Route>
                <Route path="/register" element={<Session/>}></Route>
                <Route path="/" element={<Session/>}></Route>
                <Route path="/success" element={<Success/>}></Route>
                <Route path="/auth/success" element={<Auth/>}></Route>
                <Route path="/confirm" element={<Confirm/>}></Route>
              </Route>
             
              
            </Routes>
          </Layout>
          
      
        </BrowserRouter>
    )
}
export default Router