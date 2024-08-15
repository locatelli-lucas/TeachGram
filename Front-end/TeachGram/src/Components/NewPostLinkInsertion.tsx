import {CloseIcon, NewPostLinkInsertionWindowStyle, NextIcon} from "../styles/GeneralStyle.ts";
import {FaArrowRight} from "react-icons/fa";
import {useCallback, useContext, useEffect, useRef, useState} from "react";
import {postContext} from "../contexts";
import {IoClose} from "react-icons/io5";
import {getUserByUserName, User} from "../services/user.service.ts";
import {useParams} from "react-router-dom";
import {Error} from "./Error.tsx";

export function NewPostLinkInsertion() {
    const {setOpacityPost, postBody, setPostBody, setWindows} = useContext(postContext);
    const inputLink = useRef<HTMLInputElement>(null)
    const [linkClick, setLinkClick] = useState(false);
    const [link, setLink] = useState("");
    const [user, setUser] = useState<User>();
    const [errorMessage, setErrorMessage] = useState("");
    const {userName} = useParams();

    const getUser = useCallback(async () => {
        try {
            return await getUserByUserName(userName!);
        } catch (error) {
            console.error("Error: User not found");
        }
    }, [userName])

    const handleChange = () => {
        if (link) setPostBody(prev => ({...prev, photoLink: link, user: user!}))
        console.log(postBody)
    }

    const handleClick = () => {
        if (inputLink.current?.validity.valid) {
            handleChange()
            setLinkClick(!linkClick);
            setWindows({firstWindow: false, secondWindow: true, thirdWindow: false})
        }
    }

    const handleClose = () => {
        setOpacityPost(false)
        setWindows({firstWindow: true, secondWindow: false, thirdWindow: false})
    }

    const handleErrorMessage = () => {
        console.log(inputLink.current?.validity.valueMissing)
        if (inputLink.current?.validity.valueMissing) {
            setErrorMessage("Preencha este campo")
            console.log(errorMessage)
            return false;
        }
        setErrorMessage("")
        return true;
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
                <CloseIcon bottom={7} right={1}><IoClose/></CloseIcon>
            </button>
            <form onSubmit={(e) => {
                e.preventDefault();
                if (handleErrorMessage()) {
                    handleClick();
                }
            }}>
                <input name={"inputLink"} onChange={e => setLink(e.target.value)}
                       ref={inputLink} type="text" placeholder={"Insira aqui a url da imagem"} required
                       onClick={() => console.log(inputLink.current?.validity)} onInvalid={e => e.preventDefault()}/>
                {inputLink.current?.validity.valueMissing &&
                    <Error message={errorMessage} marginLeft={5.5} marginTop={0.5}/>
                }
                <button type="submit" onClick={handleErrorMessage}>
                    <NextIcon><FaArrowRight/></NextIcon>
                </button>
            </form>

        </NewPostLinkInsertionWindowStyle>
    )
}