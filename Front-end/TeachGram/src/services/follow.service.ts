import {getUserId, User} from "./user.service.ts";
import {API} from "./api.ts";

export type Follow = {
    id: number,
    follower: User
    user: User
};

export type FollowerDTO = {
    id: number,
    follower: User
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

export async function unfollowUser(userName: string , userToUnfollow: string ) {
    try {
        const userNameId = await getUserId(userName);
        const userToFollowId = await getUserId(userToUnfollow);
        console.log(userNameId, userToFollowId)
        return await API.delete(`/users/${userNameId}/unfollow/${userToFollowId}`)
    }catch (error) {
        console.error("Error: Could not unfollow");
    }
}

export async function getAllUserFollowers(userName: string): Promise<Follow[]> {
    try {
        const userId = await getUserId(userName);
        return await API.get(`/users/${userId}/followers`)
            .then(response => {
                return response.data
            })
    } catch (error) {
        console.error("Error: Could not find followers");
        return [];
    }
}

export async function getFollows(userName: string): Promise<Follow[]> {
    try {
        const userId = await getUserId(userName);
        return await API.get(`/users/${userId}/follows`)
            .then(response => {
                return response.data
            })
    } catch (error) {
        console.error("Error: Could not find follows");
        return [];
    }
}

export async function getAllUserFollows(userName: string): Promise<Follow[]> {
    try {
        const userId = await getUserId(userName);
        return await API.get(`/users/${userId}/following`)
            .then(response => {
                return response.data
            })
    } catch (error) {
        console.error("Error: Could not find follows");
        return [];
    }
}

export async function deleteAllFollowsByUserName(userName: string) {
    try {
        const id = await getUserId(userName);
        return await API.delete(`users/${id}/follows`)
    } catch (error) {
        console.error("Error: Could not find follows");
    }
}