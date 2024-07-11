import {useState} from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import HomeIcon from "../assets/icons/homeIcon.png"
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import GroupIcon from "../assets/icons/groupIcon.png"
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import SettingsIcon from "../assets/icons/settingsIcon.png"
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import CreateIcon from "../assets/icons/createIcon.png"

import {SideBarButton} from "./SideBarButton.tsx";

export function SideBar() {
    const [buttons, setButtons] = useState([
        {feed: <SideBarButton img={HomeIcon} text={"Feed"} />},
        {amigos: <SideBarButton img={GroupIcon} text={"Amigos"} />},
        {amigos: <SideBarButton img={GroupIcon} text={"Amigos"} />},
        {amigos: <SideBarButton img={SettingsIcon} text={"Configurações"} />},
        {amigos: <SideBarButton img={CreateIcon} text={"Criar"} />},
    ])

    return (
        <div>
            {buttons.map((button, index) => (
                <div key={index}>
                    {button.feed}
                </div>
            ))}
        </div>
    )
}