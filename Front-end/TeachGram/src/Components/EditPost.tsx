import {useCallback, useContext, useEffect, useRef, useState} from "react";
import {CloseIcon, SharePostStyle} from "../styles/GeneralStyle.ts";
import {IoClose} from "react-icons/io5";
import {getPostById, PostBody, updatePost} from "../services/post.service.ts";
import {postContext} from "../contexts";

interface Props {
    id: number | null | undefined;
}

export function EditPost({id}: Props) {
    const inputRef = useRef<HTMLInputElement>(null);
    const [description, setDescription] = useState("");
    const [post, setPost] = useState<PostBody>();
    const {setEditPost, setPostIdConfigButton} = useContext(postContext)

    const getPost = useCallback(async () => {
        try {
            return await getPostById(id!)
        } catch (error) {
            console.error("Error: Post not found");
        }
    }, [id])

    const handleClose = () => {
        setEditPost(false);
        setPostIdConfigButton(undefined);
    }

    const handleSave = async () => {
        return await updatePost(id!, post)
            .then(() => {
                setEditPost(false)
                setPostIdConfigButton(undefined);
            })
    }

    useEffect(() => {
        getPost()
            .then(response => {
                console.log(response);
                setPost(response)
            })
    }, []);

    useEffect(() => {
        setPost(prevState => ({ ...prevState, description: description}))
    }, [description]);

    return (
        <SharePostStyle>
            <div>
                <CloseIcon onClick={handleClose} right={72}><IoClose/></CloseIcon>
                <h2>Editar publicação</h2>
                <span onClick={() => handleSave()}>Salvar</span>
            </div>
            <img src={post?.photoLink} alt="Post Picture"/>
            <input ref={inputRef} onChange={e => setDescription(e.target.value)} type="text" placeholder={post?.description}/>
        </SharePostStyle>

    )
}