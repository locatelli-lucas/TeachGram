import {PostImageStyle} from "../styles/GeneralStyle.ts";

interface Props {
    src: string;
}

export function PostImage({src}: Props) {
    return (
        <PostImageStyle src={src} alt="Post Image"/>
    )
}