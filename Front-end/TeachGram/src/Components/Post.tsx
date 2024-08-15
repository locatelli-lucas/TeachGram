import {PostStyle} from "../styles/GeneralStyle.ts";
import {User} from "../services/user.service.ts";
import {PostHeader} from "./PostHeader.tsx";
import {LikeSection} from "./LikeSection.tsx";
import {PostImage} from "./PostImage.tsx";

interface Props {
    id: number | null | undefined
    description?: string | null
    photoLink?: string | undefined | null
    numLikes?: number | null
    user: User | null | undefined
}

export function Post({id, description, photoLink, user}: Props) {

    return (
        <PostStyle>
            <PostHeader user={user} id={id}/>
            <p>{description}</p>
            <PostImage src={photoLink!}/>
            <LikeSection id={id}/>
        </PostStyle>
    )
}