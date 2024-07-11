import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Login } from "./pages/Login"
import {Register} from "./pages/Register.tsx";

import './styles/reset.css'
import {LinkInsertion} from "./pages/LinkInsertion.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Login />} />
        <Route path="/register" element = {<Register />} />
        <Route path="/register/:userName/link" element={<LinkInsertion />} />
        <Route path="/user/:userName"/>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
