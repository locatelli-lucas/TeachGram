import {createContext, Dispatch, SetStateAction} from "react";

type Context = {
    opacity: boolean;
    setOpacity: Dispatch<SetStateAction<boolean>>;
    checkClick: boolean
    setCheckClick: Dispatch<SetStateAction<boolean>>
}

export const followContext = createContext<Context>({} as Context)