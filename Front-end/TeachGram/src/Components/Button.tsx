import {ButtonStyle} from "../styles/GeneralStyle.ts";

export enum ButtonType {
    Submit = "submit",
    Reset = "reset",
    Button = "button"
}

interface Props {
    typeButton: ButtonType;
    text: string;
}

export function Button({typeButton, text}: Props) {
    return (
        <ButtonStyle type={typeButton}>{text}</ButtonStyle>
    )
}