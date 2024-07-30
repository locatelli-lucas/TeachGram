import {PostStyle, ProfileImageStyle} from "../styles/GeneralStyle.ts";
import {User} from "../services/user.service.ts";

interface Props {
    id: number
    title: string
    description: string
    photoLink?: string
    videoLink?: string
    numLikes: string
    privatePost: boolean
    user: User
}

export function Posts({description, photoLink, numLikes, user}: Props) {

    return (
        <PostStyle>
            <div>
                <ProfileImageStyle></ProfileImageStyle>
                <div>
                    <h2>@{user.userName}</h2>
                    <span>5 min ago</span>
                </div>
            </div>
            <p>{description}</p>
            <img src={photoLink} alt="Post picture"/>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                     fill="#F37671">
                    <path
                        d="M480-147q-14 0-28.5-5T426-168l-69-63q-106-97-191.5-192.5T80-634q0-94 63-157t157-63q53 0 100 22.5t80 61.5q33-39 80-61.5T660-854q94 0 157 63t63 157q0 115-85 211T602-230l-68 62q-11 11-25.5 16t-28.5 5Zm-38-543q-29-41-62-62.5T300-774q-60 0-100 40t-40 100q0 52 37 110.5T285.5-410q51.5 55 106 103t88.5 79q34-31 88.5-79t106-103Q726-465 763-523.5T800-634q0-60-40-100t-100-40q-47 0-80 21.5T518-690q-7 10-17 15t-21 5q-11 0-21-5t-17-15Zm38 189Z"/>
                </svg>
                <span>{numLikes} curtidas</span>
            </div>
        </PostStyle>
    )
}