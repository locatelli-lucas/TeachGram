import {DotsIcon, PostHeaderStyle, ProfileImageStyle} from "../styles/GeneralStyle.ts";
import {User} from "../services/user.service.ts";
import {getPostById, PostBody} from "../services/post.service.ts";
import {useContext, useEffect, useState} from "react";
import {TbDotsVertical} from "react-icons/tb";
import {PostConfigWindow} from "./PostConfigWindow.tsx";
import {postContext} from "../contexts/postContext.ts";

interface Props {
    user: User | null;
    id: number | undefined;
}

export function PostHeader({user, id}: Props) {
    const [post, setPost] = useState<PostBody>()
    const [configButtonClick, setConfigButtonClick] = useState(false)
    const {setId} = useContext(postContext);

    const getPost = async () => {
        try {
            return await getPostById(id!)
        } catch (error) {
            console.error('Error fetching post:', error);
            return null;
        }
    }

    useEffect(() => {
        setId(id)
        getPost()
            .then(response => {
                console.log(response);
                setPost(response!);
            })
    }, []);

    return (
        <PostHeaderStyle>
            <ProfileImageStyle marginRight={2} width={13} height={7.5} src={user?.profileLink}></ProfileImageStyle>
            <div>
                <p>@{user?.userName}</p>
                <span>{post?.postedAgo?.toString()}</span>
            </div>
            <DotsIcon onClick={() => {setConfigButtonClick(!configButtonClick)}}>
                <TbDotsVertical />
            </DotsIcon>
            {configButtonClick ? <PostConfigWindow id={id}/> : null}
        </PostHeaderStyle>
    )
}