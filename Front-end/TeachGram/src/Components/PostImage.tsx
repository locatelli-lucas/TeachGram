import {PostImageStyle} from "../styles/GeneralStyle.ts";

interface Props {
    src: string;
    onClick?: () => void;
}

export function PostImage({src, onClick}: Props) {

    return (
        <PostImageStyle src={src} onClick={onClick} alt="Post Image"/>
    )
}