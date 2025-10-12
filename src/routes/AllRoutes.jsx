import {Route, Routes} from "react-router-dom"
import { Blogs, Home, Login, PageNotFound, Projects, Register } from "../pages/index.jsx"

import { ProtectedRoute } from "./ProtectedRoute.jsx"
import { DashBoard } from "../pages/dashboards/DashBoard.jsx"
import { Contact } from "../components/Contact.jsx"



export const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/blogs" element={<Blogs/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/dashboard" 
                 element={  <ProtectedRoute>
                                <DashBoard/>
                            </ProtectedRoute> }/>

        <Route path="*" element={<PageNotFound/>}/>
    </Routes>
  )
}
