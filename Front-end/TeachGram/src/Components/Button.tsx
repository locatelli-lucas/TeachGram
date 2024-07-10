import {ButtonStyle} from "../styles/GeneralStyle.ts";

// eslint-disable-next-line react-refresh/only-export-components
export enum ButtonType {
    Submit = "submit",
    Reset = "reset",
    Button = "button"
}

interface Props {
    typeButton: ButtonType;
    text: string;
    onClick?: () => void;
}

export function Button({typeButton, text, onClick}: Props) {
    return (
        <ButtonStyle type={typeButton} onClick={onClick}>{text}</ButtonStyle>
    )
}