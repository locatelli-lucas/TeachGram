import {useContext, useEffect} from "react";
import {postContext} from "../contexts/postContext.ts";
import {CloseIcon, NewPostPhotoStyle} from "../styles/GeneralStyle.ts";
import {IoClose} from "react-icons/io5";

export function NewPostPhoto() {
    const {postBody, setOpacityPost, setWindows} = useContext(postContext)


    const handleClick = () => {
        setWindows({firstWindow: false, secondWindow: false, thirdWindow: true})
    }

    const handleClose = () => {
        setOpacityPost(false)
        setWindows({firstWindow: false, secondWindow: false, thirdWindow: false})
    }


    useEffect(() => {
        console.log(postBody);
    }, [postBody]);

    return (
        <NewPostPhotoStyle>
            <div>
                <CloseIcon onClick={handleClose} right={72}><IoClose/></CloseIcon>
                <h2>Criar nova publicação</h2>
                <span onClick={handleClick}>Avançar</span>
            </div>
            <img src={postBody.photoLink!} alt="Post Picture"/>
        </NewPostPhotoStyle>
    )
}