import {SideArtCompleteStyle, SideArtStyle} from "../styles/GeneralStyle.ts";

interface Props {
    left?: number
}

export function SideArt({left}: Props) {
    return (
        <SideArtCompleteStyle left={left}>
            <SideArtStyle inverter={false}></SideArtStyle>
            <SideArtStyle inverter={true}></SideArtStyle>
            <SideArtStyle inverter={false}></SideArtStyle>
            <SideArtStyle inverter={true}></SideArtStyle>
            <SideArtStyle inverter={false}></SideArtStyle>
            <SideArtStyle inverter={true}></SideArtStyle>
        </SideArtCompleteStyle>

    )
}