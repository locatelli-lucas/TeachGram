import {ProfileConfigButtonStyle} from "../styles/GeneralStyle.ts";

interface Props {
    text: string;
    backgroundColor: string;
    color: string;
    border: string;
    type?: "reset" | "submit"
    onClick?: () => void;
}

export function ProfileConfigButton({text, backgroundColor, color, border, type, onClick}:Props) {
    return (
        <ProfileConfigButtonStyle type={type} backgroundColor={backgroundColor} color={color} border={border} onClick={onClick}>
            {text}
        </ProfileConfigButtonStyle>
    )
}