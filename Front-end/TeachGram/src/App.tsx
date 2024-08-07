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
import {deleteContext} from "./contexts/deleteContext.ts";
import {useState} from "react";
import {followContext} from "./contexts/followsContext.ts";
import {MainPage} from "./pages/MainPage.tsx";
import { postContext } from "./contexts/postContext.ts";
import {PostBody} from "./services/post.service.ts";

function App() {
  const [id, setId] = useState<number | undefined>();
  const [opacity, setOpacity] = useState(false);
  const [opacityPost, setOpacityPost] = useState(false);
  const [checkClick, setCheckClick] = useState(true)
  const [editPost, setEditPost] = useState(false);
  const [deletePost, setDeletePost] = useState(false);
  const [postBody, setPostBody] = useState<PostBody>({
    id: null,
    description: "",
    photoLink: "",
    videoLink: "",
    numLikes: null,
    user: null,
    postedAgo: null,
  });
  const [windows, setWindows] = useState({
    firstWindow: true,
    secondWindow: false,
    thirdWindow: false,
  });

  return (
    <deleteContext.Provider value={{opacity, setOpacity}}>
    <followContext.Provider value={{opacity, setOpacity, checkClick, setCheckClick}}>
    <postContext.Provider value={{id, setId, opacityPost, setOpacityPost, postBody, setPostBody, windows, setWindows, editPost, setEditPost, deletePost, setDeletePost}}>
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
        <Route path="/:userName/feed" element={<MainPage />}/>
      </Routes>
    </BrowserRouter>
    </postContext.Provider>
    </followContext.Provider>
    </deleteContext.Provider>
  )
}

export default App
