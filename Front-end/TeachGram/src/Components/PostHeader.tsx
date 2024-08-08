import {DotsIcon, PostHeaderStyle, ProfileImageStyle} from "../styles/GeneralStyle.ts";
import {User} from "../services/user.service.ts";
import {getPostById, PostBody} from "../services/post.service.ts";
import {useContext, useEffect, useState} from "react";
import {TbDotsVertical} from "react-icons/tb";
import {PostConfigWindow} from "./PostConfigWindow.tsx";
import {postContext} from "../contexts/postContext.ts";
import {useNavigate, useParams} from "react-router-dom";

interface Props {
    user: User | null;
    id: number | undefined;
}

export function PostHeader({user, id}: Props) {
    const [post, setPost] = useState<PostBody>()
    const [check, setCheck] = useState<boolean>(false)
    const {setId, postIdConfigButton, setPostIdConfigButton} = useContext(postContext);
    const {userName} = useParams()
    const navigate = useNavigate();

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
                setPost(response!);
            })
    }, []);

    const handleClick = () => {
        setCheck(!check)
        setPostIdConfigButton(id)
    }

    return (
        <>
        <PostHeaderStyle>
            <ProfileImageStyle marginRight={2} width={4} height={7.5} src={user?.profileLink}></ProfileImageStyle>
            <div>
                <p onClick={() => navigate(`/${userName}/in/${user?.userName}`)}>@{user?.userName}</p>
                <span>{post?.postedAgo?.toString()}</span>
            </div>
        </PostHeaderStyle>
        {
            post?.user?.userName === userName ?
                <>
                <DotsIcon onClick={handleClick}>
                    <TbDotsVertical />
                </DotsIcon>
                {postIdConfigButton === id && check ? <PostConfigWindow id={id}/> : null}
                </>
                : null
        }
        </>
    )
}