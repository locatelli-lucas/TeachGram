//import {ComponentType, useState} from "react";

import {SideBarButton} from "./SideBarButton.tsx";
import {GoGear, GoHome} from "react-icons/go";
import {MdGroup} from "react-icons/md";
import {useNavigate, useParams} from "react-router-dom";
import {getUserByUserName} from "../services/user.service.ts";
import {useCallback, useContext, useEffect, useState} from "react";
import {CiSquarePlus} from "react-icons/ci";
import {SideBarStyle} from "../styles/GeneralStyle.ts";
import {TitleAndLogo} from "./Title.tsx";
import {followContext} from "../contexts";
import {postContext} from "../contexts";


export function SideBar() {
    const {setFollowOpacity} = useContext(followContext);
    const {setOpacityPost} = useContext(postContext)
    const navigate = useNavigate();
    const {userName} = useParams();
    const [userImg, setUserImg]= useState();


    const getUserImg = useCallback(async () => {
        try {
            return await getUserByUserName(userName!)
                .then(response => setUserImg(response.profileLink))
        } catch (error) {
            console.log("Image not found")
        }
    }, [userName])

    useEffect(() => {
        getUserImg()
    }, [])

    return (
        <>
        <SideBarStyle>
            <TitleAndLogo scale={0.6} marginTop={20}/>
            <SideBarButton onClick={() => navigate(`/${userName}/feed`)} icon={GoHome} text={"Feed"}/>
            <SideBarButton onClick={() => setFollowOpacity(true)} icon={MdGroup} text={"Seguidores"}/>
            <SideBarButton onClick={() => navigate(`/${userName}`)} src={userImg} text={"Perfil"}/>
            <SideBarButton onClick={() => navigate(`/${userName}/config`)} icon={GoGear} text={"Configurações"}/>
            <SideBarButton onClick={() => setOpacityPost(true)} icon={CiSquarePlus} text={"Criar"}/>
        </SideBarStyle>
        </>
    )
}