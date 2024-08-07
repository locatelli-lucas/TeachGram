import {ProfileConfigButton} from "./ProfileConfigButton.tsx";
import {DeletePopUpStyle} from "../styles/GeneralStyle.ts";
import {deleteContext} from "../contexts/deleteContext.ts";
import {useContext} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {deleteUserByUserName} from "../services/user.service.ts";

export function DeleteWindow() {
    const {setOpacity} = useContext(deleteContext);
    const {userName} = useParams();
    const navigate = useNavigate();

    const deleteUser = async () => {
        try {
            await deleteUserByUserName(userName!)
                .then(() => navigate("/"));
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <DeletePopUpStyle className="delete-popup">
            <h2>Excluir conta</h2>
            <hr/>
            <span>Todos os seus dados serão excluídos.</span>
            <div className={"deletePopUpButtons"}>
                <ProfileConfigButton onClick={() => setOpacity(false)} text={"Cancelar"} backgroundColor={"none"} color={"#f37671"} border={"#f37671 1px solid"} />
                <ProfileConfigButton onClick={deleteUser} text={"Confirmar"} backgroundColor={"#f37671"} color={"#FFFFFF"} border={"#f37671 1px solid"} />
            </div>
        </DeletePopUpStyle>
    )
}