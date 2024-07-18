//import {ComponentType, useState} from "react";

import {SideBarButton} from "./SideBarButton.tsx";
import {GoGear, GoHome} from "react-icons/go";
import {MdGroup} from "react-icons/md";
import {useParams} from "react-router-dom";
import {getUserByUserName} from "../services/user.service.ts";
import {useEffect, useState} from "react";
import {CiSquarePlus} from "react-icons/ci";
import {SideBarStyle} from "../styles/GeneralStyle.ts";
import {TitleAndLogo} from "./Title.tsx";


export function SideBar() {
    const {userName} = useParams();
    const [userImg, setUserImg]= useState();

    const getUserImg = async () => {
        try {
            console.log(userName)
            return await getUserByUserName(userName!)
                .then(response => setUserImg(response.profileLink))
                .then(userImg => console.log(userImg))
        } catch (error) {
            console.log("Image not found")
        }
    }

    useEffect(() => {
        getUserImg()
            .then(userName => console.log(userName))
            .then(userImg => console.log(userImg))
    }, [])

    return (
        <>
        <SideBarStyle>
            <TitleAndLogo scale={0.6} marginTop={20}/>
            <SideBarButton icon={GoHome} text={"Feed"}/>
            <SideBarButton icon={MdGroup} text={"Seguidores"}/>
            <SideBarButton src={userImg} text={"Perfil"}/>
            <SideBarButton icon={GoGear} text={"Configurações"}/>
            <SideBarButton icon={CiSquarePlus} text={"Criar"}/>
        </SideBarStyle>
        </>
    )
}