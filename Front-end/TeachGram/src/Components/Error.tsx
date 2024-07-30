import {ErrorStyle, LittleCircle} from "../styles/GeneralStyle.ts";

interface ErrorProps {
    message?: string;
    marginLeft?: number;
    marginTop?: number;

}

export function Error({message, marginLeft, marginTop}: ErrorProps) {
    return (
        <ErrorStyle marginLeft={marginLeft} marginTop={marginTop} >
            <LittleCircle></LittleCircle>
            <span>{message}</span>
        </ErrorStyle>
    )
}