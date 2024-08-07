import {PostConfigWindowStyle} from "../styles/GeneralStyle.ts";
import {useContext} from "react";
import {postContext} from "../contexts/postContext.ts";

interface Props {
    id: number | undefined
}

export function PostConfigWindow({id}: Props) {
    const {setEditPost, setDeletePost, setId} = useContext(postContext)

    const handleClick = (state: string) => {
        setId(id)
        if(state === "edit")
            setEditPost(true)
        else
            setDeletePost(true)
    }

    return (
        <PostConfigWindowStyle>
            <button onClick={() => handleClick("edit")}>Editar</button>
            <button onClick={() => handleClick("delete")}>Excluir</button>
        </PostConfigWindowStyle>
    )
}