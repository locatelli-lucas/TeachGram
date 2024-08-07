import {useContext, useEffect, useState} from "react";
import {postContext} from "../contexts/postContext.ts";
import {NewPostLinkInsertion} from "./NewPostLinkInsertion.tsx";
import {NewPostPhoto} from "./NewPostPhoto.tsx";
import {SharePost} from "./SharePost.tsx";

export function NewPostWindow() {
    const [currentWindow, setCurrentWindow] = useState(<NewPostLinkInsertion />);
    const {windows} = useContext(postContext)

    const handleWindowChange = () => {
        if(windows.firstWindow) setCurrentWindow(<NewPostLinkInsertion />)
        else if(windows.secondWindow) setCurrentWindow(<NewPostPhoto />)
        else setCurrentWindow(<SharePost/>)
    }

    useEffect(() => {
        handleWindowChange()
    }, [windows]);

    return (
        <div>
            {currentWindow}
        </div>
    )
}