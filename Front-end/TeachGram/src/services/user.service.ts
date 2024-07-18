import {API} from "./api.ts";
import {Post} from "./post.service.ts";

export type User = {
    id: number;
    name: string;
    userName: string;
    bio: string;
    phone: string;
    email: string;
    password: string;
    profileLink: string;
    posts: Post[]
    follow: {
        followers: User[];
        following: User[];
    }
};

export type UserDTO = {
    name: string | null;
    userName: string | null;
    bio: string | null;
    phone: string | null;
    email: string | null;
    password: string | null;
    profileLink: string | null;
};

export async function createUser(user: User) {
    try {
        return await API.post(`/users`, user)
            .then(response => console.log("Sucess: ", response.data));
    } catch (error) {
        console.error("Error: ", error);
    }
}

export async function getUsers() {
    try {
        const response = await API.get("/users")
        return response.data
    } catch (error) {
        console.error("Error: ", error);
    }
}

export async function getUserByEmail(email: string) {
    try {
        const response = await API.get(`/users`)
        return response.data.find((user: { email: string }) => user.email === email)
    } catch (error) {
        console.error("Error: ", error);
    }
}

export async function getUserByUserName(userName: string) {
    try {
        const response = await API.get(`/users`)
        return response.data.find((user: { userName: string }) => user.userName === userName)
    } catch (error) {
        console.error("Error: ", error);
    }
}

export async function getUserByPhone(phone: string) {
    try {
        const response = await API.get(`/users`)
        return response.data.find((user: { phone: string }) => user.phone === phone)
    } catch (error) {
        console.error("Error: ", error);
    }
}

export async function getUserId(userName: string) {
    try {
        const user = await getUserByUserName(userName)
        return user?.id
    } catch (error) {
        console.error("Error: ", error);
    }
}

export async function patchUser(userName: string, newData: UserDTO) {
    try {
        const id = await getUserId(userName);
        return await API.patch(`/users/${id}`, newData);
    } catch (error) {
        console.error("Error: ", error);
    }
}

export async function followUser(userName: string , userToFollow: string ) {
    try {
        const userNameId = await getUserId(userName);
        const userToFollowId = await getUserId(userToFollow);
        console.log(userNameId, userToFollowId)
        return await API.post(`/users/${userNameId}/follow/${userToFollowId}`)
    }catch (error) {
        console.error("Error: Could not follow");
    }
}

export async function unfollowUser(userName: string , userToFollow: string ) {
    try {
        const userNameId = await getUserId(userName);
        const userToFollowId = await getUserId(userToFollow);
        console.log(userNameId, userToFollowId)
        return await API.delete(`/users/${userNameId}/unfollow/${userToFollowId}`)
    }catch (error) {
        console.error("Error: Could not unfollow");
    }
}

export async function getFollowers(userName: string): Promise<void | User[]>{
    try {
        const userId = await getUserId(userName);
        return await API.get(`/users/${userId}/followers`)
            .then(response => console.log(response))
    } catch (error) {
        console.error("Error: Could not find followers");
        return [];
    }
}

export async function getFollows(userName: string): Promise<void | User[]> {
    try {
        const userId = await getUserId(userName);
        return await API.get(`/users/${userId}/follows`)
            .then(response => console.log(response.data))
    } catch (error) {
        console.error("Error: Could not find follows");
    }
}
