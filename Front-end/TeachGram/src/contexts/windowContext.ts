import {createContext, Dispatch, SetStateAction} from "react";

type Context = {
    opacity: boolean;
    setOpacity: Dispatch<SetStateAction<boolean>>;
}

export const windowContext = createContext<Context>({} as Context)