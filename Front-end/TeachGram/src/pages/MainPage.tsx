import {useContext} from "react";
import {followContext} from "../contexts/followsContext.ts";
import {Overlay} from "../Components/Overlay.tsx";
import {
    Body,
    ProfileMain
} from "../styles/GeneralStyle.ts";
import {SideBar} from "../Components/SideBar.tsx";
import {SideArt} from "../Components/SideArt.tsx";
import {PostList} from "../Components/PostList.tsx";
import {postContext} from "../contexts/postContext.ts";

export function MainPage() {
    const {opacity} = useContext(followContext);
    const {opacityPost, deletePost, editPost} = useContext(postContext);

    return (
        <>
            {opacity && <Overlay followsWindow={opacity}/>}
            {opacityPost && <Overlay postWindow={opacityPost}/>}
            {editPost && <Overlay editPost={editPost}/>}
            {deletePost && <Overlay postDelete={deletePost}/>}
            <Body>
                <SideBar/>
                <ProfileMain>
                    <PostList />
                </ProfileMain>
                <SideArt left={20}/>
            </Body>
        </>
    )
}