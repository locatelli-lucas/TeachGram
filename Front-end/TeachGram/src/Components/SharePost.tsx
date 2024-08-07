import {useContext, useEffect, useRef, useState} from "react";
import {postContext} from "../contexts/postContext.ts";
import {CloseIcon, SharePostStyle} from "../styles/GeneralStyle.ts";
import {createPost, PostBody} from "../services/post.service.ts";
import {FaArrowLeft} from "react-icons/fa";

export function SharePost() {
    const {postBody, setPostBody, setOpacityPost, setWindows} = useContext(postContext)
    const inputRef = useRef<HTMLInputElement>(null);
    const [description, setDescription] = useState("");

    const createNewPost = async (post: PostBody) => {
        try {
            return await createPost(post);
        } catch (error) {
            console.log(error)
        }
    }

    const handleClick = async () => {
        // Log antes de criar o post
        console.log("Antes de criar o post:", postBody);

        await createNewPost(postBody).then(response => console.log(response?.data))

        // Log depois de criar o post
        console.log("Depois de criar o post:", postBody);

        setWindows({firstWindow: false, secondWindow: false, thirdWindow: false})
        setPostBody(prev => ({...prev, description: "", user: null, photoLink: ""}));
        setOpacityPost(false)
    }

    const handleBack = () => {
        setWindows({firstWindow: false, secondWindow: true, thirdWindow: false})
    }

    useEffect(() => {
        setPostBody(prev => ({...prev, description: description}));
        console.log(postBody);
    }, [description]);

    return (
        <SharePostStyle>
            <div>
                <CloseIcon onClick={handleBack} right={72}><FaArrowLeft /></CloseIcon>
                <h2>Criar nova publicação</h2>
                <span onClick={() => handleClick()}>Compartilhar</span>
            </div>
            <img src={postBody.photoLink!} alt="Post Picture"/>
            <input ref={inputRef} onChange={e => setDescription(e.target.value)} type="text" placeholder="Escreva uma legenda..."/>
        </SharePostStyle>

    )
}