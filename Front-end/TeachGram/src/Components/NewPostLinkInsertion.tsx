import {CloseIcon, NewPostLinkInsertionWindowStyle, NextIcon} from "../styles/GeneralStyle.ts";
import {FaArrowRight} from "react-icons/fa";
import {useContext, useEffect, useRef, useState} from "react";
import {postContext} from "../contexts/postContext.ts";
import {IoClose} from "react-icons/io5";
import {getUserByUserName, User} from "../services/user.service.ts";
import {useParams} from "react-router-dom";

export function NewPostLinkInsertion() {
    const {setOpacityPost, postBody, setPostBody, setWindows} = useContext(postContext);
    const inputLink = useRef<HTMLInputElement>(null)
    const [linkClick, setLinkClick] = useState(false);
    const [link, setLink] = useState("");
    const [user, setUser] = useState<User>();
    const {userName} = useParams();

    const getUser = async () => {
        try {
            return await getUserByUserName(userName!);
        } catch (error) {
            console.error("Error: User not found");
        }
    }

    const handleChange = () => {
        if(link) setPostBody(prev => ({...prev, photoLink: link, user: user!}))

        console.log(postBody)
    }

    const handleClick = () => {
        handleChange()
        setLinkClick(!linkClick);
        setWindows({firstWindow: false, secondWindow: true, thirdWindow: false})
    }

    const handleClose = () => {
        setOpacityPost(false)
        setWindows({firstWindow: false, secondWindow: false, thirdWindow: false})
    }

    useEffect(() => {
        getUser().then(response => {
            setUser(response)
        })
    }, []);

    return (
        <NewPostLinkInsertionWindowStyle>
            <h2>Criar nova publicação</h2>
            <button onClick={handleClose}>
                <CloseIcon bottom={7} right={1}><IoClose /></CloseIcon>
            </button>
            <div>
                <input onChange={e => setLink(e.target.value)}
                       ref={inputLink} type="text" placeholder={"Insira aqui a url da imagem"}/>
                <button onClick={handleClick}>
                    <NextIcon><FaArrowRight/></NextIcon>
                </button>
            </div>
        </NewPostLinkInsertionWindowStyle>
    )
}