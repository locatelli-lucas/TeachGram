import {LikeIconStyle} from "../styles/GeneralStyle.ts";
import {FaHeart, FaRegHeart} from "react-icons/fa";
import {useEffect, useState} from "react";
import {getPostById, patchPost, PostBody} from "../services/post.service.ts";

interface Props {
    id: number
}

export function LikeSection({id}: Props) {
    const [clicked, setClicked] = useState(false)
    const [post, setPost] = useState<PostBody>({
        id: null,
        description: "",
        photoLink: "",
        videoLink: "",
        numLikes: null,
        user: null,
        postedAgo: null
    });

    const getPost = async () => {
        try {
            return await getPostById(id)
        } catch (error) {
            console.error('Error fetching post:', error);
            return null;
        }
    }

    const updateNumLikes = async () => {
        try {
            if (post.numLikes) {
                const response = await patchPost(id, post)
                console.log(response?.data)
            }
        } catch (error) {
            console.error('Error updating post:', error);
        }
    }

    useEffect(() => {
        getPost().then(response => {
            if (response) {
                setPost({...post, numLikes: response.numLikes!})
            }
        })
    }, []);

    useEffect(() => {
        const newLikes = clicked ? post.numLikes! + 1 : post.numLikes! - 1;
        setPost({...post, numLikes: newLikes})
    }, [clicked]);

    useEffect(() => {
        updateNumLikes()
    }, [post]);

    return (
        <LikeIconStyle>
            <div onClick={() => setClicked(!clicked)}>
                {clicked ? <FaHeart/> : <FaRegHeart/>}
            </div>
            <span>{post?.numLikes} curtidas</span>
        </LikeIconStyle>
    )
}