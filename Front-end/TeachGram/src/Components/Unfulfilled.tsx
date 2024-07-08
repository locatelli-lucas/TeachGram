import {LittleCircle, UnfulffiledStyle} from "../styles/GeneralStyle.ts";

export function Unfulfilled() {
    return (
        <UnfulffiledStyle>
            <LittleCircle></LittleCircle>
            <span>Campo não preenchido</span>
        </UnfulffiledStyle>
    )
}