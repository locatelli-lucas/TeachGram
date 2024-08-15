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
import {useCallback, useContext, useEffect, useState} from "react";
import {UserStats} from "../Components/UserStats.tsx";
import {Overlay} from "../Components/Overlay.tsx";
import {followContext, postContext} from "../contexts";

export function Profile() {
    const navigate = useNavigate();
    const {userName} = useParams();
    const {followOpacity} = useContext(followContext);
    const {opacityPost, viewStyle, setViewStyle, editPost, deletePost} = useContext(postContext)
    const [user, setUser] = useState<User>();
    const [postId, setPostId] = useState<number>();

    const getUser = useCallback(async() => {
        try {
            return await getUserByUserName(userName!)
                .then((response) => {
                    setUser(response)
                    console.log((response))
                })
        } catch (error) {
            console.log("User not found")
        }
    }, [userName])

    const handleClick = (index: number) => {
        setViewStyle(true)
        setPostId(index)
    }

    useEffect(() => {
        getUser()
    }, [opacityPost, viewStyle, editPost, deletePost]);

    return (
        <>
        {followOpacity && <Overlay followsWindow={followOpacity}/>}
        {opacityPost && <Overlay postWindow={opacityPost}/>}
        {viewStyle && <Overlay postId={postId} postView={viewStyle}/>}
        {editPost && <Overlay editPost={editPost}/>}
        {deletePost && <Overlay postDelete={deletePost}/>}
        <Body>
            <div>
                <BackButton onClick={() => navigate(`/${userName}/feed`)}/>
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
                    {user?.posts.slice().reverse().map((post) => {
                        return (
                            <PostImage
                                key={post.id}
                                onClick={() => handleClick(post.id!)}
                                src={post.photoLink!}
                                alt={`Post ${post.id! + 1} by ${user.name}`}
                            />
                        );
                    })}
                </ProfilePosts>
            </ProfileMain>
        </Body>
        </>
    )
}