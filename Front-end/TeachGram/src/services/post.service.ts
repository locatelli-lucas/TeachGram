import {API} from "./api.ts";
import {User} from "./user.service.ts";
import {UserLike} from "./userLike.service.ts";

export type PostBody = {
    id?: number | null | undefined;
    description?: string | undefined;
    photoLink?: string | undefined;
    videoLink?: string | null;
    numLikes?: number | null;
    user?: User | null;
    createdAt?: Date;
    userLikes?: UserLike[] | null;
};

export type PostPatch = {
    description?: string | null;
    photoLink?: string | undefined;
    numLikes?: number | null;
    privatePost?: boolean | null
}

export function deleteAllPostByUserId(userId: number) {
    try {
        return API.delete(`/posts/user/${userId}`);
    } catch (error) {
        console.error("Error: Couldn't find the user " + userId);
    }
}

export function getAllPosts() {
    try {
        return API.get("/posts");
    } catch (error) {
        console.error("Error: Couldn't find the posts");
    }
}

export async function getPostById(id: number | null | undefined): Promise<PostBody> {
    try {
        const response = await API.get(`/posts/${id}`);
        console.log(response.data)
        return response.data;
    } catch (error) {
        console.error("Error: Couldn't find the post " + id);
        return Promise.reject(error);
    }
}

export async function patchPost(id: number | null | undefined, newData: PostPatch) {
    try {
        return await API.patch(`/posts/${id}`, newData)
    } catch (error) {
        console.error("Error: Couldn't find the post " + id);
    }
}

export async function updatePost(id: number, newData: PostBody | undefined) {
    try {
        return await API.put(`/posts/${id}`, newData)
    } catch (error) {
        console.error("Error: Couldn't find the post " + id);
    }
}

export function createPost(post: PostBody) {
    try {
        return API.post(`/posts`, post)
    } catch (error) {
        console.error("Error: Couldn't complete the post")
    }
}

export async function deletePost(id: number | null | undefined) {
    try {
        return await API.delete(`/post/likes/post/${id}`)
            .then(async () => await API.delete(`/posts/${id}`))
    } catch (error) {
        console.error("Error: Couldn't find the post " + id);
    }

}


