import { BrowserRouter,Route,Routes } from "react-router-dom"
import Session from "../pages/Session/Session"
import Layout from "../layout/Layout"
import Private from "../guard/Private"
import Public from "../guard/Public"
import Home from "../pages/Home/Home"
import Success from "../pages/Success/Success"
import Confirm from "../middlewarePages/Confirm/Confirm"
import Auth from "../middlewarePages/Auth/Auth"
import Introduction from "../components/Introduction/Introduction"
import Models from "../components/Models/Models"
import Concepts from "../components/Concepts/Concepts"
import Playground from "../pages/Playground/Playground"
import ModelList from "../pages/ModelList/ModelList"


function Router(){
    
    return(
        <BrowserRouter>
        
          <Layout>
            <Routes>
            <Route element={<Private></Private>}>
            <Route path="/models" element={<ModelList/>}></Route>

            <Route path="/home" element={<Home/>}>
             <Route path="" element={<Introduction/>}></Route>
             <Route path="models-tag/:name" element={<Models/>}></Route>
             <Route path="model/:name" element={<Models/>}></Route>
             <Route path="concepts" element={<Concepts/>}></Route>
            </Route>
            <Route path="/playground" element={<Playground/>}></Route>
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