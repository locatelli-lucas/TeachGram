import {ComponentType} from "react";
import {SideBarButtonImg, SideBarButtonStyle, SideBarIconStyle} from "../styles/GeneralStyle.ts";

interface Props {
    src?: string,
    icon?: ComponentType,
    text: string
    onClick?: () => void
}

export function SideBarButton({src, icon: Icon, text, onClick}: Props) {
    return (
        <SideBarButtonStyle onClick={onClick}>
            {Icon ? <SideBarIconStyle><Icon/></SideBarIconStyle> : <SideBarButtonImg src={src}></SideBarButtonImg>}
            {text}
        </SideBarButtonStyle>
    )
}