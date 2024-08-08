import {ProfileConfigButton} from "./ProfileConfigButton.tsx";
import {useContext} from "react";
import {postContext} from "../contexts/postContext.ts";
import {deletePost} from "../services/post.service.ts";
import {PostDeleteStyle} from "../styles/GeneralStyle.ts";

interface Props {
    id: number | undefined
}

export function DeletePost({id}: Props) {
    const {setDeletePost, setConfigButtonClick} = useContext(postContext)

    const deleteCurrentPost = async () => {
        return await deletePost(id!)
            .then(() => {
                setDeletePost(false)
                setConfigButtonClick(false)
            })
    }

    return (
        <PostDeleteStyle>
            <h2>Excluir publicação?</h2>
            <div>
                <ProfileConfigButton onClick={() => setDeletePost(false)} text={"Cancelar"} backgroundColor={"none"} color={"#f37671"} border={"#f37671 1px solid"} />
                <ProfileConfigButton onClick={deleteCurrentPost} text={"Confirmar"} backgroundColor={"#f37671"} color={"#FFFFFF"} border={"#f37671 1px solid"} />
            </div>
        </PostDeleteStyle>
    )
}