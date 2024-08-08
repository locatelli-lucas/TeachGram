import {Draw, Logo, LogoTitle, Title} from "../styles/GeneralStyle.ts";
import {BsEyeglasses} from "react-icons/bs";

interface Props {
    scale?: number;
    marginTop?: number;
}

export function TitleAndLogo({scale, marginTop}: Props) {
    return (
        <LogoTitle marginTop={marginTop} scale={scale}>
            <Logo>
                <Draw>
                    <BsEyeglasses />
                </Draw>
            </Logo>
            <Title>
                Teachgram
            </Title>
        </LogoTitle>
    )
}