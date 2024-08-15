import {createContext, Dispatch, SetStateAction} from "react";

type Context = {
    deleteOpacity: boolean;
    setDeleteOpacity: Dispatch<SetStateAction<boolean>>;
}

export const deleteContext = createContext<Context>({} as Context)