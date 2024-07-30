import {useNavigate, useParams} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import { getUserByUserName, User} from "../services/user.service.ts";
import {
    Body,
    PostImage,
    ProfileBio,
    ProfileBioImage,
    ProfileImageStyle, ProfileMain, ProfilePosts,
    ProfileTitle
} from "../styles/GeneralStyle.ts";
import {BackButton} from "../Components/BackButton.tsx";
import {SideBar} from "../Components/SideBar.tsx";
import {UserStats} from "../Components/UserStats.tsx";
import {Follow, followUser, getFollows, unfollowUser} from "../services/follow.service.ts";
import {followContext} from "../contexts/followsContext.ts";
import {Overlay} from "../Components/Overlay.tsx";

export function UserProfile() {
    const navigate = useNavigate();
    const {userName, userProfile} = useParams();
    const [, setUser] = useState<User>();
    const [userVisitor, setUserVisitor] = useState<User>();
    const [clicked, setClicked] = useState(false);
    const [, setFollows] = useState<Follow[]>([])
    const {opacity} = useContext(followContext);

    const getUser = async(username: string) => {
        try {
            return await getUserByUserName(username!)
        } catch (error) {
            console.log("User not found")
        }
    }

    async function handleFollows() {
        try {
            return await getFollows(userName!)
        } catch (error) {
            console.log("User not found")
            return []
        }
    }

    useEffect(() => {
        async function fetchData() {
            const userResponse = await getUser(userName!);
            const userVisitorResponse = await getUser(userProfile!);
            const followsResponse = await handleFollows();

            setUser(userResponse);
            setUserVisitor(userVisitorResponse);
            setFollows(followsResponse);

            if (userResponse && userVisitorResponse) {
                const checkButton = followsResponse.find(element => element.follower.id === userResponse.id && element.user.id === userVisitorResponse.id);
                setClicked(!!checkButton);
            }
        }
        fetchData();
    }, [userName, userProfile, opacity]);

    const handleFollowButtonClick = async () => {
        if(!clicked) {
            await followUser(userName!, userVisitor!.userName)
                .then(response => console.log(response))
        } else {
            await unfollowUser(userName!, userVisitor!.userName)
                .then(response => console.log(response))
        }
        setClicked(!clicked)
    }

    return (
        <>
        {opacity && <Overlay followsWindow={opacity}/>}
        <Body>
            <div>
                <BackButton onClick={() => navigate("#")}/>
                <SideBar/>
            </div>
            <ProfileMain>
                <ProfileBioImage>
                    <ProfileImageStyle width={25} height={27} src={userVisitor?.profileLink}></ProfileImageStyle>
                    <ProfileBio click={clicked}>
                        <ProfileTitle>{userVisitor?.name}</ProfileTitle>
                        <p>{userVisitor?.bio}</p>
                        <button onClick={() => handleFollowButtonClick()}>{clicked ? "Seguindo ✔" : "Seguir"}</button>
                    </ProfileBio>
                </ProfileBioImage>
                {userVisitor !== undefined && <UserStats user={userVisitor} click={clicked}/>}
                <ProfilePosts>
                    {userVisitor?.posts.map((post, index) => {
                        return (
                            <PostImage
                                key={index}
                                src={post.photoLink}
                                alt={`Post ${index + 1} by ${userVisitor.name}`}
                            />
                        );
                    })}
                </ProfilePosts>
            </ProfileMain>
        </Body>
        </>
    )
}