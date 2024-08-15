import {createContext, Dispatch, SetStateAction} from "react";
import {PostBody} from "../services/post.service.ts";

type Context = {
    id: number | null | undefined;
    setId: Dispatch<SetStateAction<number | null | undefined>>;
    opacityPost: boolean;
    setOpacityPost: Dispatch<SetStateAction<boolean>>;
    postBody: PostBody;
    editPost: boolean
    setEditPost: Dispatch<SetStateAction<boolean>>;
    deletePost: boolean;
    setDeletePost: Dispatch<SetStateAction<boolean>>;
    setPostBody: Dispatch<SetStateAction<PostBody>>;
    postIdConfigButton: number | null | undefined;
    setPostIdConfigButton: Dispatch<SetStateAction<number | null | undefined>>;
    viewStyle: boolean
    setViewStyle: Dispatch<SetStateAction<boolean>>;
    windows: {
        firstWindow: boolean,
        secondWindow: boolean,
        thirdWindow: boolean,
    }
    setWindows: Dispatch<SetStateAction<{     firstWindow: boolean;     secondWindow: boolean;     thirdWindow: boolean; }>>;
}

export const postContext = createContext<Context>({} as Context)