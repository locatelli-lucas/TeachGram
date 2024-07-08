import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Login } from "./pages/Login"
import {Register} from "./pages/Register.tsx";

import './styles/reset.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Login />}></Route>
        <Route path="/register" element = {<Register />}></Route>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
