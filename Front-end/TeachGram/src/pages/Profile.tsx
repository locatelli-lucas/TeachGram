import {SideBar} from "../Components/SideBar.tsx";
import {
    Main, PostImage,
    ProfileBio,
    ProfileBioImage,
    ProfileBody,
    ProfileImageStyle, ProfilePosts,
    ProfileTitle
} from "../styles/GeneralStyle.ts";
import {BackButton} from "../Components/BackButton.tsx";
import {useNavigate, useParams} from "react-router-dom";
import {getUserByUserName, User} from "../services/user.service.ts";
import {useEffect, useState} from "react";
import {UserStats} from "../Components/UserStats.tsx";

export function Profile() {
    const navigate = useNavigate();
    const {userName} = useParams()
    const [user, setUser] = useState<User>();

    const getUser = async() => {
        try {
            return await getUserByUserName(userName!)
                .then((response) => setUser(response))
        } catch (error) {
            console.log("User not found")
        }
    }

    useEffect(() => {
        getUser().then(r => console.log(r))
    }, []);

    return (
        <Main>
            <div>
                <BackButton onClick={() => navigate("#")}/>
                <SideBar/>
            </div>
            <ProfileBody>
                <ProfileBioImage>
                    <ProfileImageStyle src={user?.profileLink}></ProfileImageStyle>
                    <ProfileBio>
                        <ProfileTitle>{user?.name}</ProfileTitle>
                        <p>{user?.bio}</p>
                    </ProfileBio>
                </ProfileBioImage>
                {user !== undefined && <UserStats user={user} />}
                <ProfilePosts>
                    {user?.posts.map((post, index) => {
                        return (
                            <PostImage
                                key={index}
                                src={post.photoLink}
                                alt={`Post ${index + 1} by ${user.name}`}
                            />
                        );
                    })}
                </ProfilePosts>
            </ProfileBody>
        </Main>
    )
}