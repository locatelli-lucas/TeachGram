import {useEffect, useState} from "react";
import {getAllPosts, PostBody} from "../services/post.service.ts";
import {Post} from "./Post.tsx";
import {PostListStyle} from "../styles/GeneralStyle.ts";

export function PostList() {
    const [posts, setPosts] = useState<PostBody[]>([]);

    const getPosts = async () => {
        try {
            const response = await getAllPosts()
            console.log(response)
            if (response) setPosts(response.data)
        } catch (error) {
            console.log("Error fetching posts")
        }
    }

    useEffect(() => {
        getPosts();
        console.log(posts)
    }, []);

    return (
        <PostListStyle>
            {posts.slice().reverse().map(post => {
                return (
                    <Post key={post.id} id={post.id!} description={post.description!} photoLink={post.photoLink} numLikes={post.numLikes!} user={post.user!}/>
                )
            })}
        </PostListStyle>
    )
}