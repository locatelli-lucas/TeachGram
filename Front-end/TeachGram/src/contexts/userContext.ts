import {User} from "../services/user.service.ts";
import {createContext, Dispatch, SetStateAction} from "react";

type Context = {
    user: User
    setUser: Dispatch<SetStateAction<User>>
}

export const userContext = createContext({} as Context);