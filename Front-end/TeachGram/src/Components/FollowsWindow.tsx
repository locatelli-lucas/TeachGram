import {FollowsWindowStyle, FollowWindowButtonsStyle} from "../styles/GeneralStyle.ts";
import {useContext, useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {
    Follow,
    getAllUserFollowers,
    getAllUserFollows,
} from "../services/follow.service.ts";
import {FollowElement} from "./FollowElement.tsx";
import {followContext} from "../contexts/followsContext.ts";

export function FollowsWindow() {
    const {userName} = useParams();
    const [followers, setFollowers] = useState<Follow[]>([])
    const [follows, setFollows] = useState<Follow[]>([])
    const [check, setCheck] = useState(true)
    const [clickedFollowers, setClickedFollowers] = useState(false);
    const [clickedFollows, setClickedFollows] = useState(false);
    const {setOpacity, checkClick, setCheckClick} = useContext(followContext)
    const navigate = useNavigate();

    async function handleFollowers() {
        try {
            return await getAllUserFollowers(userName!)
                .then((response) => {
                    setFollowers(response)
                });
        } catch (error) {
            console.log("User not found")
        }
    }

    async function handleFollows() {
        try {
            return await getAllUserFollows(userName!)
                .then((response) => {
                    setFollows(response)
                });
        } catch (error) {
            console.log("User not found")
            return []
        }
    }

    const handleClickedFollowers = () => {
        setClickedFollowers(!clickedFollowers);
        setClickedFollows(!clickedFollows)
        setCheck(true);
    };

    const handleClickedFollows = () => {
        setClickedFollowers(!clickedFollowers);
        setClickedFollows(!clickedFollows)
        setCheck(false);
    };

    const handleClick = (path: string) => {
        setOpacity(false)

        if(checkClick) navigate(`/${userName}/in/${path}`)
        setCheckClick(true)
    }

    useEffect(() => {
        handleFollowers()
        handleFollows()
    }, [check]);

    return (
        <FollowsWindowStyle>
            <svg onClick={() => setOpacity(false)} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#F37671">
                <path
                    d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
            </svg>
            <div>
                <FollowWindowButtonsStyle clicked={!clickedFollowers}
                                          onClick={handleClickedFollowers}>Seguidores</FollowWindowButtonsStyle>
                <FollowWindowButtonsStyle clicked={clickedFollows}
                                          onClick={handleClickedFollows}>Seguindo</FollowWindowButtonsStyle>
            </div>
            <hr/>
            <div>
                {check ?
                    followers.map(follower => {
                        return (
                            <FollowElement onClick={() => handleClick(follower.follower.userName)} check={check} follows={follows} follower={follower.follower} followers={followers}/>
                        )
                    }) :
                    follows.map(follow => {
                        return (
                            <FollowElement onClick={() => handleClick(follow.follower.userName)} check={check} follow={follow.follower} follows={follows}/>
                        )
                    })
                }
            </div>
        </FollowsWindowStyle>
    )
}