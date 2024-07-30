import {DeleteButtonStyle} from "../styles/GeneralStyle.ts";

interface Props {
    onClick?: () => void;
}

export function DeleteButton({onClick}: Props) {
    return (
        <DeleteButtonStyle onClick={onClick}>
            <span>Excluir conta</span>
        </DeleteButtonStyle>
    )
}