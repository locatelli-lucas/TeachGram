// import {useParams} from "react-router-dom";
// import {useContext, useEffect, useState} from "react";
// import {followContext} from "../contexts/followsContext.ts";
// import {getUserByUserName, User} from "../services/user.service.ts";
// import {Overlay} from "../Components/Overlay.tsx";
// import {
//     Body,
//     ProfileMain
// } from "../styles/GeneralStyle.ts";
// import {SideBar} from "../Components/SideBar.tsx";
// import {SideArt} from "../Components/SideArt.tsx";
// import {getAllPosts, Post} from "../services/post.service.ts";
// import {Posts} from "../Components/Posts.tsx";
//
// export function MainPage() {
//     //const navigate = useNavigate();
//     const {userName} = useParams();
//     const {opacity} = useContext(followContext);
//     const [user, setUser] = useState<User>();
//     const [posts, setPosts] = useState<Post[]>([]);
//
//     const getUser = async() => {
//         try {
//             return await getUserByUserName(userName!)
//                 .then((response) => {
//                     setUser(response)
//                     console.log((response))
//                 })
//         } catch (error) {
//             console.log("User not found")
//         }
//     }
//
//     const getPosts = async () => {
//         try {
//             const response = await getAllPosts()
//             console.log(response)
//             if (response) setPosts(response.data)
//         } catch (error) {
//             console.log("Error fetching posts")
//         }
//     }
//
//     useEffect(() => {
//         getUser()
//         getPosts()
//     }, []);
//
//     return (
//         <>
//             {opacity && <Overlay followsWindow={opacity}/>}
//             <Body>
//                 <SideBar/>
//                 <ProfileMain>
//                     {posts.map({} => {
//                         return (
//                             <div>
//                                 <Posts />
//                             </div>
//                         )
//                     })}
//                 </ProfileMain>
//                 <SideArt left={20}/>
//             </Body>
//         </>
//     )
// }