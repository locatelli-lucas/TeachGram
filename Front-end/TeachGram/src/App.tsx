import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Login } from "./pages/Login"
import {Register} from "./pages/Register.tsx";

import './styles/reset.css'
import {LinkInsertion} from "./pages/LinkInsertion.tsx";
import {Profile} from "./pages/Profile.tsx";
import {UserProfile} from "./pages/UserProfile.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Login />} />
        <Route path="/register" element = {<Register />} />
        <Route path="/register/:userName/link" element={<LinkInsertion />} />
        <Route path="/:userName" element={<Profile />}/>
        <Route path="/:userName/in/:userProfile" element={<UserProfile />}/>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
