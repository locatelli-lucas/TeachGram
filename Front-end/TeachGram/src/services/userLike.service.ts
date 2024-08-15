import {User} from "./user.service.ts";
import {PostBody} from "./post.service.ts";
import {API} from "./api.ts";

export type UserLike = {
    id?: number,
    user: User | undefined,
    post: PostBody | undefined
}

export async function createUserLike(userLike: UserLike) {
    try {
        return await API.post(`/post/likes`, userLike)
    } catch(error) {
        console.error("Error: A error happened");
    }
}

export async function deleteUserLike(id: number | undefined) {
    try {
        return await API.delete(`/post/likes/${id}`);
    } catch (error) {
        console.error("Error: Couldn't find the post " + id);
    }
}

export async function findAllUserLikes(): Promise<UserLike[] | undefined> {
    try {
        const response = await API.get(`/post/likes`)
        return response.data;
    } catch (error) {
        console.error("An error occurred")
    }
}

export async function deleteAllByUserId(userId: number | null | undefined) {
    try {
        return await API.delete(`post/likes/user/${userId}`)
    }
    catch(error) {
        console.error("Error: Couldn't find the user " + userId);
    }
}

export async function deleteAllByPostId(postId: number | null | undefined) {
    try {
        return await API.delete(`post/likes/post/${postId}`)
    }
    catch(error) {
        console.error("Error: Couldn't find the post " + postId);
    }
}