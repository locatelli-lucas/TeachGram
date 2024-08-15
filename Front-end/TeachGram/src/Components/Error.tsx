import {ErrorStyle, LittleCircle} from "../styles/GeneralStyle.ts";

interface ErrorProps {
    message?: string;
    marginLeft?: number;
    marginTop?: number;

}

export function Error({message, marginLeft, marginTop}: ErrorProps) {
    return (
        <ErrorStyle marginLeft={marginLeft} marginTop={marginTop} >
            {message !== "" ?
                <>
                    <LittleCircle></LittleCircle>
                    <span>{message}</span>
                </>
                :
                    null}
        </ErrorStyle>
    )
}