import {createContext, Dispatch, SetStateAction} from "react";

type Context = {
    opacity: boolean;
    setOpacity: Dispatch<SetStateAction<boolean>>;
}

export const deleteContext = createContext<Context>({} as Context)