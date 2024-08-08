import {SideBar} from "../Components/SideBar.tsx";
import {
    Body,
    PostImage,
    ProfileBio,
    ProfileBioImage,
    ProfileImageStyle, ProfileMain, ProfilePosts,
    ProfileTitle
} from "../styles/GeneralStyle.ts";
import {BackButton} from "../Components/BackButton.tsx";
import {useNavigate, useParams} from "react-router-dom";
import {getUserByUserName, User} from "../services/user.service.ts";
import {useContext, useEffect, useState} from "react";
import {UserStats} from "../Components/UserStats.tsx";
import {Overlay} from "../Components/Overlay.tsx";
import {followContext} from "../contexts/followsContext.ts";
import {postContext} from "../contexts/postContext.ts";

export function Profile() {
    const navigate = useNavigate();
    const {userName} = useParams();
    const {opacity} = useContext(followContext);
    const {opacityPost} = useContext(postContext)
    const [user, setUser] = useState<User>();

    const getUser = async() => {
        try {
            return await getUserByUserName(userName!)
                .then((response) => {
                    setUser(response)
                    console.log((response))
                })
        } catch (error) {
            console.log("User not found")
        }
    }

    useEffect(() => {
        getUser()
    }, []);

    return (
        <>
        {opacity && <Overlay followsWindow={opacity}/>}
        {opacityPost && <Overlay postWindow={opacityPost}/>}
        <Body>
            <div>
                <BackButton onClick={() => navigate("#")}/>
                <SideBar/>
            </div>
            <ProfileMain>
                <ProfileBioImage>
                    <ProfileImageStyle width={13} height={27} src={user?.profileLink}></ProfileImageStyle>
                    <ProfileBio>
                        <ProfileTitle>{user?.name}</ProfileTitle>
                        <p>{user?.bio}</p>
                    </ProfileBio>
                </ProfileBioImage>
                {user !== undefined && <UserStats user={user} />}
                <ProfilePosts>
                    {user?.posts.slice().reverse().map((post, index) => {
                        return (
                            <PostImage
                                key={index}
                                src={post.photoLink!}
                                alt={`Post ${index + 1} by ${user.name}`}
                            />
                        );
                    })}
                </ProfilePosts>
            </ProfileMain>
        </Body>
        </>
    )
}