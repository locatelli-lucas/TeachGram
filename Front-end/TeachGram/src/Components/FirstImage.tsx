// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import Image from "../assets/FirstImage.jpeg";
import {ImageStyle} from "../styles/GeneralStyle.ts";

export function FirstImage() {
    return (
        <ImageStyle src={Image} alt="Two ladies taking a picture"/>
    )
}