import {User} from "../services/user.service.ts";
import {createContext, Dispatch, SetStateAction} from "react";

type Context = {
    user: User
    setUser: Dispatch<SetStateAction<User>>
    isAuthenticated: boolean
    setIsAuthenticated: Dispatch<SetStateAction<boolean>>
}

export const userContext = createContext<Context>({} as Context);