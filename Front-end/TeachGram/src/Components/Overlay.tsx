import {DeleteWindow} from "./DeleteWindow.tsx";
import {OpacityDiv} from "../styles/GeneralStyle.ts";
import {FollowsWindow} from "./FollowsWindow.tsx";

interface Props {
    deleteWindow?: boolean;
    followsWindow?: boolean;
}

export function Overlay({deleteWindow, followsWindow}: Props) {
    return (
        <OpacityDiv>
            {deleteWindow && <DeleteWindow />}
            {followsWindow && <FollowsWindow />}
        </OpacityDiv>
    )
}