import {ProfilePostsFriends} from "../styles/GeneralStyle.ts";
import {User} from "../services/user.service.ts";
import {useEffect, useState} from "react";
import {FollowerDTO, getAllUserFollowers, getAllUserFollows} from "../services/follow.service.ts";

interface Props {
    user: User
    click?: boolean
}

export function UserStats({user, click}: Props) {
    const [followers, setFollowers] = useState<FollowerDTO[]>([])
    const [follows, setFollows] = useState<FollowerDTO[]>([])

    async function handleFollowers() {
        try {
            return await getAllUserFollowers(user.userName)
                .then((response) => {
                    setFollowers(response)
                });
        } catch (error) {
            console.log("User not found")
        }
    }

    async function handleFollows() {
        try {
            return await getAllUserFollows(user.userName)
                .then((response) => {
                    setFollows(response)
                });
        } catch (error) {
            console.log("User not found")
            return []
        }
    }

    useEffect(() => {
        handleFollowers()
        handleFollows()
    }, [click]);

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
                <b>{followers.length}</b>
                <span>
                    Seguidores
                </span>
            </div>
            <hr/>
            <div>
                <b>{follows.length}</b>
                <span>
                    Seguindo
                </span>
            </div>
        </ProfilePostsFriends>
    )
}