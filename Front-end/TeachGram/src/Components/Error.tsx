import {LittleCircle, ErrorStyle} from "../styles/GeneralStyle.ts";

interface ErrorProps {
    message?: string;
}

export function Error({message}: ErrorProps) {

    return (
        <ErrorStyle>
            <LittleCircle></LittleCircle>
            <span>{message}</span>
        </ErrorStyle>
    )
}