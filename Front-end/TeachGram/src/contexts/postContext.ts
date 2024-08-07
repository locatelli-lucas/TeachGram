import {createContext, Dispatch, SetStateAction} from "react";
import {PostBody} from "../services/post.service.ts";

type Context = {
    id: number | undefined;
    setId: Dispatch<SetStateAction<number | undefined>>;
    opacityPost: boolean;
    setOpacityPost: Dispatch<SetStateAction<boolean>>;
    postBody: PostBody;
    editPost: boolean
    setEditPost: Dispatch<SetStateAction<boolean>>;
    deletePost: boolean;
    setDeletePost: Dispatch<SetStateAction<boolean>>;
    setPostBody: Dispatch<SetStateAction<PostBody>>;
    windows: {
        firstWindow: boolean,
        secondWindow: boolean,
        thirdWindow: boolean,
    }
    setWindows: Dispatch<SetStateAction<{     firstWindow: boolean;     secondWindow: boolean;     thirdWindow: boolean; }>>;
}

export const postContext = createContext<Context>({} as Context)