import {API} from "./api.ts";

export type User = {
    name: string;
    userName: string;
    bio: string;
    phone: string;
    email: string;
    password: string;
};

export async function createUser(user: User) {
    try {
        return await API.post(`/users`, user)
            .then(response => console.log("Sucess: ", response.data));
    } catch (error) {
        console.error("Error: ", error);
    }
}