import {DeleteWindow} from "./DeleteWindow.tsx";
import {OpacityDiv} from "../styles/GeneralStyle.ts";
import {FollowsWindow} from "./FollowsWindow.tsx";
import {NewPostWindow} from "./NewPostWindow.tsx";
import {EditPost} from "./EditPost.tsx";
import {useCallback, useContext, useEffect, useState} from "react";
import {postContext} from "../contexts";
import {DeletePost} from "./DeletePost.tsx";
import {Post} from "./Post.tsx";
import {getPostById, PostBody} from "../services/post.service.ts";

interface Props {
    deleteWindow?: boolean;
    followsWindow?: boolean;
    postWindow?: boolean
    postConfigWindow?: boolean
    editPost?: boolean
    postDelete?: boolean
    postView?: boolean
    postId?: number
}

export function Overlay({deleteWindow, followsWindow, postWindow, editPost, postDelete, postView, postId}: Props) {
    const {id} = useContext(postContext)
    const [post, setPost] = useState<PostBody>()

    const getPost = useCallback(async () => {
        try {
            return await getPostById(postId)
                .then(response => {
                    setPost(response)
                })
        } catch (error) {
            console.error("Error occurred on getting the post")
        }
    }, [postId])

    useEffect(() => {
        getPost()
    }, []);

    return (
        <OpacityDiv>
            {deleteWindow && <DeleteWindow />}
            {followsWindow && <FollowsWindow />}
            {postWindow && <NewPostWindow />}
            {editPost && <EditPost id={id}/>}
            {postDelete && <DeletePost id={id}/>}
            {postView && <Post id={post?.id} description={post?.description} photoLink={post?.photoLink} numLikes={post?.numLikes} user={post?.user}/>}
        </OpacityDiv>
    )
}