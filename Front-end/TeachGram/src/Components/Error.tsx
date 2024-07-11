import {LittleCircle, ErrorStyle} from "../styles/GeneralStyle.ts";

interface ErrorProps {
    message?: string;
    marginLeft?: number;
}

export function Error({message, marginLeft}: ErrorProps) {

    return (
        <ErrorStyle marginLeft={marginLeft}>
            <LittleCircle></LittleCircle>
            <span>{message}</span>
        </ErrorStyle>
    )
}