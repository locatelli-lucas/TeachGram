import {PostStyle} from "../styles/GeneralStyle.ts";
import {User} from "../services/user.service.ts";
import {PostHeader} from "./PostHeader.tsx";
import {LikeSection} from "./LikeSection.tsx";

interface Props {
    id: number | undefined
    description: string | null
    photoLink: string | undefined | null
    numLikes: number | null
    user: User | null
}

export function Post({id, description, photoLink, user}: Props) {

    return (
        <PostStyle>
            <PostHeader user={user} id={id}/>
            <p>{description}</p>
            <img src={photoLink!} alt="Post picture"/>
            <LikeSection id={id!}/>
        </PostStyle>
    )
}