import {ProfilePostsFriends} from "../styles/GeneralStyle.ts";
import {getFollowers, getFollows, User} from "../services/user.service.ts";
import {useEffect, useState} from "react";

interface Props {
    user: User
}

export function UserStats({user}: Props) {
    const [followers, setFollowers] = useState<void | User[]>([]);
    const [followings, setFollowings] = useState<void | User[]>([]);

    const handleFollowers = async() => {
        return await getFollowers(user.userName)
    }

    const handleFollowings = async() => {
        return await getFollows(user.userName)
    }

    useEffect(() => {
        handleFollowers().then(response => {
            setFollowers(response)
            console.log(response)
        })
        handleFollowings().then(response => {
            setFollowings(response)
            console.log(response)
        })
        console.log(followers)
        console.log(followings)
    }, []);

    return (
        <ProfilePostsFriends>
            <div>
                <b>{user?.posts.length}</b>
                <span>
                    Posts
                </span>
            </div>
            <hr/>
            <div>
                <b>{followers?.length}</b>
                <span>
                    Seguidores
                </span>
            </div>
            <hr/>
            <div>
                <b>{followings?.length}</b>
                <span>
                    Seguindo
                </span>
            </div>
        </ProfilePostsFriends>
    )
}