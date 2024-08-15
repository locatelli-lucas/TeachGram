import {BrowserRouter, Route, Routes} from "react-router-dom"
import {
    Login,
    LinkInsertion,
    Register,
    Profile,
    ProfileConfig,
    AccountConfig,
    MainPage,
    Configuration,
    UserProfile
} from "../pages"
import {deleteContext, postContext, userContext, followContext} from "../contexts";
import '../styles/reset.css'

import {useState} from "react";
import {PrivateRoutes} from "./PrivateRoutes.tsx";
import {PostBody} from "../services/post.service.ts";
import {User} from "../services/user.service.ts";

export function AppRoutes() {
    const [id, setId] = useState<number | null | undefined>();
    const [deleteOpacity, setDeleteOpacity] = useState(false);
    const [opacityPost, setOpacityPost] = useState(false);
    const [followOpacity, setFollowOpacity] = useState(false);
    const [checkClick, setCheckClick] = useState(true)
    const [editPost, setEditPost] = useState(false);
    const [deletePost, setDeletePost] = useState(false);
    const [postIdConfigButton, setPostIdConfigButton] = useState<number | null | undefined>(undefined);
    const [viewStyle, setViewStyle] = useState(false);
    const [postBody, setPostBody] = useState<PostBody>({
        id: null,
        description: "",
        photoLink: "",
        videoLink: "",
        numLikes: null,
        user: null,
    });
    const [windows, setWindows] = useState({
        firstWindow: true,
        secondWindow: false,
        thirdWindow: false,
    });
    const [user, setUser] = useState<User>({
        id: 0,
        name: "",
        email: "",
        userName: "",
        bio: "",
        phone: "",
        password: "",
        profileLink: "",
        posts: [],
        follows: []
    });

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
        <userContext.Provider value={{user, setUser, isAuthenticated, setIsAuthenticated}}>
            <deleteContext.Provider value={{deleteOpacity, setDeleteOpacity}}>
                <followContext.Provider value={{followOpacity, setFollowOpacity, checkClick, setCheckClick}}>
                    <postContext.Provider value={{id, setId, opacityPost, setOpacityPost, postBody, setPostBody, windows, setWindows, editPost, setEditPost, deletePost, setDeletePost, postIdConfigButton, setPostIdConfigButton, viewStyle, setViewStyle}}>
                        <BrowserRouter>
                            <Routes>
                                <Route path="*" element={<h1>Página não encontrada</h1>}/>
                                <Route path="/" element = {<Login />} />
                                <Route path="/register" element = {<Register />} />
                                <Route path="/register/:userName/link" element={
                                    <PrivateRoutes>
                                        <LinkInsertion />
                                    </PrivateRoutes>
                                } />
                                <Route path="/:userName" element={
                                    <PrivateRoutes>
                                        <Profile />
                                    </PrivateRoutes>
                                } />
                                <Route path="/:userName/in/:userProfile" element={
                                    <PrivateRoutes>
                                        <UserProfile />
                                    </PrivateRoutes>
                                } />
                                <Route path="/:userName/config" element={
                                    <PrivateRoutes>
                                        <Configuration />
                                    </PrivateRoutes>
                                } />
                                <Route path="/:userName/config/accountConfig" element={
                                    <PrivateRoutes>
                                        <AccountConfig />
                                    </PrivateRoutes>
                                } />
                                <Route path="/:userName/config/profileConfig" element={
                                    <PrivateRoutes>
                                        <ProfileConfig />
                                    </PrivateRoutes>
                                } />
                                <Route path="/:userName/feed" element={
                                    <PrivateRoutes>
                                        <MainPage />
                                    </PrivateRoutes>
                                } />
                            </Routes>
                        </BrowserRouter>
                    </postContext.Provider>
                </followContext.Provider>
            </deleteContext.Provider>
        </userContext.Provider>
    )
}

