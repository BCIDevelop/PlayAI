import { BrowserRouter,Route,Routes } from "react-router-dom"
import Session from "../pages/Session/Session"
import Layout from "../layout/Layout"
import Private from "../guard/Private"
import Public from "../guard/Public"
import Home from "../pages/Home/Home"

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
              </Route>
             
              
            </Routes>
          </Layout>
          
      
        </BrowserRouter>
    )
}
export default Router