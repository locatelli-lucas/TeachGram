import {createContext, Dispatch, SetStateAction} from "react";

type Context = {
    followOpacity: boolean;
    setFollowOpacity: Dispatch<SetStateAction<boolean>>;
    checkClick: boolean
    setCheckClick: Dispatch<SetStateAction<boolean>>
}

export const followContext = createContext<Context>({} as Context)