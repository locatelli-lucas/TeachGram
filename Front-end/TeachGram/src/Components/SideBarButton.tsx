import {ComponentType} from "react";
import {SideBarButtonImg, SideBarButtonStyle, SideBarIconStyle} from "../styles/GeneralStyle.ts";

interface Props {
    src?: string,
    icon?: ComponentType,
    text: string
}

export function SideBarButton({src, icon: Icon, text}: Props) {
    return (
        <SideBarButtonStyle>
            {Icon ? <SideBarIconStyle><Icon/></SideBarIconStyle> : <SideBarButtonImg src={src}></SideBarButtonImg>}
            {text}
        </SideBarButtonStyle>
    )
}