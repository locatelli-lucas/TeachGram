import {API} from "./api.ts";
import {User} from "./user.service.ts";

export type Post = {
    id: number;
    title: string;
    description: string;
    photoLink?: string;
    videoLink?: string;
    numLikes: string;
    privatePost: boolean;
    user: User
};

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


