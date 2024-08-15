import {DotsIcon, PostHeaderStyle, ProfileImageStyle} from "../styles/GeneralStyle.ts";
import {User} from "../services/user.service.ts";
import {getPostById, PostBody} from "../services/post.service.ts";
import {useCallback, useContext, useEffect, useState} from "react";
import {TbDotsVertical} from "react-icons/tb";
import {PostConfigWindow} from "./PostConfigWindow.tsx";
import {postContext} from "../contexts";
import {useNavigate, useParams} from "react-router-dom";

interface Props {
    user: User | null | undefined;
    id: number | null | undefined;
}

export function PostHeader({user, id}: Props) {
    const [post, setPost] = useState<PostBody>()
    const [check, setCheck] = useState<boolean>(false)
    const [createdAt, setCreatedAt] = useState<Date>()
    const [postedAgo, setPostedAgo] = useState("")
    const {setId, postIdConfigButton, setPostIdConfigButton, setViewStyle} = useContext(postContext);
    const {userName} = useParams()
    const navigate = useNavigate();

    const getPost = useCallback(async () => {
        try {
            return await getPostById(id)
        } catch (error) {
            console.error('Error fetching post:', error);
            return null;
        }
    }, [id])

    useEffect(() => {
        setId(id)
        getPost()
            .then(response => {
                setPost(response!);
                setCreatedAt(response?.createdAt)
                calculateDate()
            })
    }, [createdAt, id, setViewStyle]);

    const handleClick = () => {
        setCheck(!check)
        setPostIdConfigButton(id)
    }

    const calculateDate = () => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        const postDate = new Date(createdAt).getTime();
        const now = new Date().getTime();
        const calculatedDate = now - postDate!;

        const differenceInSeconds = Math.floor(calculatedDate / 1000);
        const differenceInMinutes = Math.floor(calculatedDate / (1000 * 60));
        const differenceInHours = Math.floor(calculatedDate / (1000 * 60 * 60));
        const differenceInDays = Math.floor(calculatedDate / (1000 * 60 * 60 * 24));

        if(differenceInSeconds <= 1) setPostedAgo(`${differenceInSeconds} segundo atrás`)
        else if(differenceInSeconds < 60) setPostedAgo(`${differenceInSeconds} segundos atrás`)
        else if(differenceInMinutes <= 1) setPostedAgo(`${differenceInMinutes} minuto atrás`)
        else if(differenceInMinutes < 60) setPostedAgo(`${differenceInMinutes} minutos atrás`)
        else if(differenceInHours <= 1) setPostedAgo(`${differenceInHours} hora atrás`)
        else if(differenceInHours < 24) setPostedAgo(`${differenceInHours} horas atrás`)
        else if(differenceInDays <= 1) setPostedAgo(`${differenceInDays} dia atrás`)
        else setPostedAgo(`${differenceInDays} dias atrás`)
    }

    return (
        <>
        <PostHeaderStyle>
            <ProfileImageStyle marginRight={2} width={4} height={7.5} src={user?.profileLink}></ProfileImageStyle>
            <div>
                <p onClick={() => {
                    post?.user?.userName === userName?
                        navigate(`/${userName}`) :
                        navigate(`/${userName}/in/${user?.userName}`)
                }}>@{user?.userName}</p>
                <span>{postedAgo}</span>
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