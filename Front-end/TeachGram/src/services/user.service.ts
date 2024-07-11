import {API} from "./api.ts";

export type User = {
    id: number;
    name: string;
    userName: string;
    bio: string;
    phone: string;
    email: string;
    password: string;
    profileLink: string;
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

