import {BackButtonStyle} from "../styles/GeneralStyle.ts";

interface Props {
    onClick: () => void
}

export function BackButton({onClick}: Props) {
    return (
        <BackButtonStyle onClick={onClick}>
            <svg xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 -960 960 960" width="35px" fill="#F37671">
                <path d="m287-446.67 240 240L480-160 160-480l320-320 47 46.67-240 240h513v66.66H287Z"/>
            </svg>
        </BackButtonStyle>
    )
}