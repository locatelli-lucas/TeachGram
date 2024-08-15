import {PostConfigWindowStyle} from "../styles/GeneralStyle.ts";
import {useContext} from "react";
import {postContext} from "../contexts";

interface Props {
    id: number | null | undefined
}

export function PostConfigWindow({id}: Props) {
    const {setEditPost, setDeletePost, setId, viewStyle, setViewStyle} = useContext(postContext)

    const handleClick = (state: string) => {
        setId(id)
        setViewStyle(false)
        if(state === "edit")
            setEditPost(true)
        else if(state === "delete")
            setDeletePost(true)
        else
            setViewStyle(false)
    }

    return (
        <PostConfigWindowStyle>
            <button onClick={() => handleClick("edit")}>Editar</button>
            <button onClick={() => handleClick("delete")}>Excluir</button>
            {viewStyle && <button onClick={() => handleClick("close")}>Fechar</button>}
        </PostConfigWindowStyle>
    )
}