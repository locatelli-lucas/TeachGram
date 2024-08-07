import {DeleteWindow} from "./DeleteWindow.tsx";
import {OpacityDiv} from "../styles/GeneralStyle.ts";
import {FollowsWindow} from "./FollowsWindow.tsx";
import {NewPostWindow} from "./NewPostWindow.tsx";
import {EditPost} from "./EditPost.tsx";
import {useContext} from "react";
import {postContext} from "../contexts/postContext.ts";
import {DeletePost} from "./DeletePost.tsx";

interface Props {
    deleteWindow?: boolean;
    followsWindow?: boolean;
    postWindow?: boolean
    postConfigWindow?: boolean
    editPost?: boolean
    postDelete?: boolean
}

export function Overlay({deleteWindow, followsWindow, postWindow, editPost, postDelete}: Props) {
    const {id} = useContext(postContext);

    return (
        <OpacityDiv>
            {deleteWindow && <DeleteWindow />}
            {followsWindow && <FollowsWindow />}
            {postWindow && <NewPostWindow />}
            {editPost && <EditPost id={id}/>}
            {postDelete && <DeletePost id={id}/>}
        </OpacityDiv>
    )
}