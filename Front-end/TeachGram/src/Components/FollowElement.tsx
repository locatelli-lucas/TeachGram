import {FollowStyle, ProfileImageStyle} from "../styles/GeneralStyle.ts";
import {User} from "../services/user.service.ts";
import {ProfileConfigButton} from "./ProfileConfigButton.tsx";
import {useParams} from "react-router-dom";
import {Follow, followUser, unfollowUser} from "../services/follow.service.ts";
import {useContext, useEffect, useState} from "react";
import {followContext} from "../contexts";

interface Props {
    check: boolean
    follower?: User,
    follow?: User
    followers?: Follow[]
    follows?: Follow[]
    onClick?: () => void
}

export function FollowElement({follow, follower, check, follows, followers, onClick}:Props) {
    const {userName} = useParams()

    const [clicked, setClicked] = useState(false);
    const [followInUse, setFollowInUse] = useState<User>();

    const {setCheckClick} = useContext(followContext);

    useEffect(() => {
        if(check) {
            setFollowInUse(follower)
        } else {
            setFollowInUse(follow)
        }
        console.log(follows, followers)
        console.log(follow, follower)

    }, [follow, follower, check, follows, followers]);

    useEffect(() => {
        const checkFollow = async () => {

            const checkById = check ?
                (followers?.find(element => element.follower.id === follower?.id) ?? false) &&
                (follows?.find(element => element.follower.id === follower?.id) ?? false)
                : follows?.find(element => element.follower.id === follow?.id) ?? false


            console.log(checkById)

            if(checkById) setClicked(true)
            else setClicked(false)
        }

        checkFollow();
    }, [check]);


    const handleClicked = () => {
        if(!clicked) {
            followUser(userName!, followInUse!.userName!);
        } else {
            unfollowUser(userName!, followInUse!.userName!);
        }
        setClicked(!clicked);
        setCheckClick(false);
    }

    return (
        <FollowStyle>
            <ProfileImageStyle src={followInUse?.profileLink} width={3.4} height={6.5}></ProfileImageStyle>
            <div onClick={onClick}>
                <h3>{followInUse?.userName}</h3>
                <span>{followInUse?.name}</span>
            </div>
                <ProfileConfigButton
                    backgroundColor={clicked ?  "none" :  "#F37671"}
                    border={"1px solid #F37671"}
                    text={clicked ? "Seguindo ✔" : "Seguir"}
                    color={clicked? "#F37671" : "#FFFFFF"}
                    onClick={() => handleClicked()}
                    />
        </FollowStyle>
    )
}