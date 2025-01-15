import {ProfilePostsFriends} from "../styles/GeneralStyle.ts";
import {User} from "../services/user.service.ts";
import {useCallback, useEffect, useState} from "react";
import {FollowDTO, getAllUserFollowers, getAllUserFollows} from "../services/follow.service.ts";

interface Props {
    user: User
    click?: boolean
}

export function UserStats({user, click}: Props) {
    const [followers, setFollowers] = useState<FollowDTO[]>([])
    const [follows, setFollows] = useState<FollowDTO[]>([])

    const handleFollowers = useCallback(async () => {
        try {
            return await getAllUserFollowers(user.userName)
                .then((response) => {
                    setFollowers(response)
                });
        } catch (error) {
            console.log("User not found")
        }
    }, [click])

    const handleFollows = useCallback(async () => {
        try {
            return await getAllUserFollows(user.userName)
                .then((response) => {
                    setFollows(response)
                });
        } catch (error) {
            console.log("User not found")
            return []
        }
    }, [click])

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