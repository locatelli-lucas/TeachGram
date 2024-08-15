import {LikeIconStyle} from "../styles/GeneralStyle.ts";
import {FaHeart, FaRegHeart} from "react-icons/fa";
import {useCallback, useEffect, useState} from "react";
import {getPostById, patchPost, PostBody, PostPatch} from "../services/post.service.ts";
import {useParams} from "react-router-dom";
import {getUserByUserName, User} from "../services/user.service.ts";
import {createUserLike, deleteUserLike, findAllUserLikes} from "../services/userLike.service.ts";

interface Props {
    id: number | null | undefined
}

export function LikeSection({id}: Props) {
    const {userName} = useParams()
    const [clicked, setClicked] = useState(false)
    const [user, setUser] = useState<User>()
    const [completePost, setCompletePost] = useState<PostBody>()
    const [post, setPost] = useState<PostPatch>({
        description: "",
        photoLink: "",
        numLikes: null,
        privatePost: null
    });

    const getPost = useCallback(async () => {
        try {
            return await getPostById(id)
        } catch (error) {
            console.error('Error fetching post:', error);
            return null;
        }
    }, [id])

    const getUser = useCallback(async () => {
        try {
            return await getUserByUserName(userName!);
        } catch (error) {
            console.error('Error fetching user:', error);
        }
    }, [userName])

    const updateNumLikes = async () => {
        try {
            if (post.numLikes) {
                return await patchPost(id, post)
            }
        } catch (error) {
            console.error('Error updating post:', error);
        }
    }

    const getAllUserLikes = useCallback(async () => {
        try {
            return await findAllUserLikes();
        } catch (error) {
            console.error('Error fetching user:', error);
        }
    }, [userName])

    const createNewUserLike = async () => {
        try {
            console.log("userId: ", user?.id, "postId: ", id)
            return await createUserLike({user: user, post: completePost})
        } catch (error) {
            console.error('Error creating new like:', error);
        }
    }

    const deleteNewNumLike = async () => {
        try {
            const userLike = completePost?.userLikes?.find(element => element.post?.id === completePost.id && element.user?.id === user?.id)
            return await deleteUserLike(userLike?.id)
        } catch (error) {
            console.error('Error deleting numLikes:', error);
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            const allUserLikes = await getAllUserLikes()
            const postData = await getPost()
            const userData = await getUser()

            if(postData) {
                setPost(prev => ({...prev, numLikes:postData.numLikes}))
                setCompletePost(postData)
                setClicked(allUserLikes!.some(element => element.user?.id === userData?.id && element.post?.id === postData.id));
            }

            if(userData)
                setUser(userData)
        }

        fetchData();

    }, [id, userName]);

    useEffect(() => {
        updateNumLikes()
            .then(response => console.log(response))
    }, [post.numLikes]);


    const handleClicked = async () => {
        const newLikes = !clicked ? (post.numLikes ?? 0) + 1 : (post.numLikes ?? 0) - 1;
        setPost(prevPost => ({...prevPost, numLikes: newLikes}));
        setClicked(!clicked);
        if(!clicked)
            createNewUserLike().then(response => console.log(response?.data))
        else
            deleteNewNumLike().then(response => console.log(response?.data))
    }

    return (
        <LikeIconStyle>
            <div onClick={() => handleClicked()}>
                {clicked ? <FaHeart/> : <FaRegHeart/>}
            </div>
            <span>{post?.numLikes} curtidas</span>
        </LikeIconStyle>
    )
}