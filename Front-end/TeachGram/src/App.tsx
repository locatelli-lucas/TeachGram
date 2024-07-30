import {BrowserRouter, Route, Routes} from "react-router-dom"
import { Login } from "./pages/Login"
import {Register} from "./pages/Register.tsx";

import './styles/reset.css'
import {LinkInsertion} from "./pages/LinkInsertion.tsx";
import {Profile} from "./pages/Profile.tsx";
import {UserProfile} from "./pages/UserProfile.tsx";
import {Configuration} from "./pages/Configuration.tsx";
import {AccountConfig} from "./pages/AccountConfig.tsx";
import {ProfileConfig} from "./pages/ProfileConfig.tsx";
import {windowContext} from "./contexts/windowContext.ts";
import {useState} from "react";
import {followContext} from "./contexts/followsContext.ts";
import {MainPage} from "./pages/MainPage.tsx";

function App() {
  const [opacity, setOpacity] = useState(false);
  const [checkClick, setCheckClick] = useState(true)

  return (
    <windowContext.Provider value={{opacity, setOpacity}}>
    <followContext.Provider value={{opacity, setOpacity, checkClick, setCheckClick}}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Login />} />
        <Route path="/register" element = {<Register />} />
        <Route path="/register/:userName/link" element={<LinkInsertion />} />
        <Route path="/:userName" element={<Profile />}/>
        <Route path="/:userName/in/:userProfile" element={<UserProfile />}/>
        <Route path="/:userName/config" element={<Configuration />}/>
        <Route path="/:userName/config/accountConfig" element={<AccountConfig />}/>
        <Route path="/:userName/config/profileConfig" element={<ProfileConfig />}/>
        <Route path="/:userName/main" element={<MainPage />}/>
      </Routes>
    </BrowserRouter>
    </followContext.Provider>
    </windowContext.Provider>
  )
}

export default App
