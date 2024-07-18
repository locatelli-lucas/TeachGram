import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {followUser, getUserByUserName, unfollowUser, User} from "../services/user.service.ts";
import {
    Main, PostImage,
    ProfileBio,
    ProfileBioImage,
    ProfileBody,
    ProfileImageStyle, ProfilePosts,
    ProfileTitle
} from "../styles/GeneralStyle.ts";
import {BackButton} from "../Components/BackButton.tsx";
import {SideBar} from "../Components/SideBar.tsx";
import {UserStats} from "../Components/UserStats.tsx";

export function UserProfile() {
    const navigate = useNavigate();
    const {userName, userProfile} = useParams();
    const [user, setUser] = useState<User>();
    const [userVisitor, setUserVisitor] = useState<User>();
    const [clicked, setClicked] = useState(false);

    const getUser = async(username: string) => {
        try {
            return await getUserByUserName(username!)
        } catch (error) {
            console.log("User not found")
        }
    }

    useEffect(() => {
        getUser(userName!).then((response) => setUser(response))
        console.log(user)
        getUser(userProfile!).then((response) => setUserVisitor(response))
        console.log(userVisitor)
    }, []);

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
        <Main>
            <div>
                <BackButton onClick={() => navigate("#")}/>
                <SideBar/>
            </div>
            <ProfileBody>
                <ProfileBioImage>
                    <ProfileImageStyle src={userVisitor?.profileLink}></ProfileImageStyle>
                    <ProfileBio click={clicked} onClick={() => handleFollowButtonClick()}>
                        <ProfileTitle>{userVisitor?.name}</ProfileTitle>
                        <p>{userVisitor?.bio}</p>
                        <button>Adicionar</button>
                    </ProfileBio>
                </ProfileBioImage>
                {userVisitor !== undefined && <UserStats user={userVisitor} />}
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
            </ProfileBody>
        </Main>
    )
}