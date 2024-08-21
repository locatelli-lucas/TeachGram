import { BackButton } from "../Components/BackButton.tsx";
import {ConfigAccountPageStyle, ProfileImageStyle} from "../styles/GeneralStyle.ts";
import { SideArt } from "../Components/SideArt.tsx";
import { ConfigInput } from "../Components/ConfigInput.tsx";
import React, { useEffect, useRef, useState } from "react";
import {
    getUserByUserName,
    patchUser,
    User,
    UserDTO,
} from "../services/user.service.ts";
import {useNavigate, useParams} from "react-router-dom";
import { Error } from "../Components/Error.tsx";
import {ProfileConfigButton} from "../Components/ProfileConfigButton.tsx";

export function ProfileConfig() {
    const [marginLeft, setMarginLeft] = useState(0);
    const navigate = useNavigate();
    const { userName } = useParams();
    const inputRefProfileLink = useRef<HTMLInputElement>(null);
    const inputRefUserName = useRef<HTMLInputElement>(null);
    const inputRefBio = useRef<HTMLInputElement>(null);
    const [user, setUser] = useState<User>();
    const [newData, setNewData] = useState<UserDTO>({
        name: "",
        userName: "",
        bio: "",
        phone: "",
        email: "",
        password: "",
        profileLink: "",
    });
    const [isValid, setIsValid] = useState({
        profileLink: true,
        userName: true,
        bio: true
    });
    const [errorMessage, setErrorMessage] = useState({
        profileLink: "",
        userName: "",
        bio: ""
    });
    const [message, setMessage] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNewData((prev) => ({ ...prev, [name]: value }));
        setIsValid((prev) => ({ ...prev, [name]: true }));
        setErrorMessage((prev) => ({ ...prev, [name]: "" }));
    };

    const getUserInfos = async () => {
        try {
            return await getUserByUserName(userName!);
        } catch (error) {
            console.error("Error: User not found");
        }
    };

    const handleInputUserProfileLink = () => {
        if (inputRefProfileLink.current) {
            if (inputRefProfileLink.current.value === user?.profileLink) {
                setErrorMessage((prev) => ({...prev, profileLink: "Foto não alterada"}));
                setIsValid((prev) => ({...prev, profileLink: false}));
                return false
            }
            setIsValid((prev) => ({...prev, profileLink: true}))
            return true;
        }
    };

    const handleInputUserName = async () => {
        if (inputRefUserName.current) {
            if (inputRefUserName.current.value === user?.userName) {
                setErrorMessage((prev) => ({...prev, userName: "Username não alterado"}))
                setIsValid(prev => ({...prev, userName: false}));
                return false;
            } else if (await getUserByUserName(inputRefUserName.current.value)) {
                setErrorMessage((prev) => ({...prev, userName: "Username já cadastrado"}));
                setIsValid((prev) => ({...prev, userName: false}));
                return false;
            }
            setIsValid((prev) => ({...prev, userName: true}))
            return true;
        }
    };

    const handleInputBio = () => {
        if (inputRefBio.current) {
            if (inputRefBio.current.value === user?.bio) {
                setErrorMessage((prev) => ({...prev, bio: "Bio não alterada"}));
                setIsValid((prev) => ({...prev, bio: false}));
                return false
            }
            setIsValid((prev) => ({...prev, bio: true}))
            return true;
        }
    };

    const handleErrorMessages = async (
        event: React.FormEvent<HTMLFormElement>
    ) => {
        event.preventDefault();
        const profileLinkValid = handleInputUserProfileLink();
        const userNameValid = await handleInputUserName();
        const bioValid = handleInputBio();
        return profileLinkValid || userNameValid || bioValid;
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (
            !inputRefProfileLink.current?.value &&
            !inputRefUserName.current?.value &&
            !inputRefBio.current?.value
        ) {
            setMessage("Nenhum campo alterado");
            setMarginLeft(-9.5)
            return;
        }
        if (await handleErrorMessages(event)) {
            try {
                await patchUser(user!.userName, newData);
                setMessage("Dados atualizados com sucesso!");
                setMarginLeft(-6.6)
            } catch (error) {
                console.error("Error: Error found");
            }
        }
    };

    useEffect(() => {
        getUserInfos().then((response) => {
            setUser(response);
        });
    }, [handleSubmit]);

    return (
        <>
            <BackButton onClick={() => navigate(`/${userName}/config`)}/>
            <ConfigAccountPageStyle width={17} top={7} >
                <div>
                    <h2>Editar perfil</h2>
                    <ProfileImageStyle src={user?.profileLink} width={9} height={15} marginTop={15}></ProfileImageStyle>
                    <form method={"post"} onSubmit={handleSubmit} noValidate>
                        <ConfigInput
                            name={"profileLink"}
                            isValid={isValid.profileLink}
                            errorMessage={errorMessage.profileLink}
                            onChange={handleChange}
                            inputRef={inputRefProfileLink}
                            label={"Foto de perfil"}
                            type={"text"}
                            placeholder={user?.profileLink}
                            button={false}
                        />
                        {!isValid.profileLink && (
                            <Error marginTop={3.8} marginLeft={1.4} message={errorMessage.profileLink} />
                        )}
                        <ConfigInput
                            name={"userName"}
                            isValid={isValid.userName}
                            errorMessage={errorMessage.userName}
                            onChange={handleChange}
                            inputRef={inputRefUserName}
                            label={"Nome de usuário"}
                            type={"text"}
                            placeholder={user?.userName}
                            button={false}
                        />
                        {!isValid.userName && (
                            <Error marginTop={9} marginLeft={1.4} message={errorMessage.userName} />
                        )}
                        <ConfigInput
                            name={"bio"}
                            onChange={handleChange}
                            inputRef={inputRefBio}
                            label={"Bio"}
                            type={"text"}
                            placeholder={user?.bio}
                            button={false}
                            isValid={isValid.bio}
                        />
                        {!isValid.bio && (
                            <Error marginTop={14} marginLeft={1.4} message={errorMessage.bio} />
                        )}
                        <div>
                            <ProfileConfigButton
                                backgroundColor={"#FFFFFF"}
                                color={"#F37671"}
                                border={"1px solid #F37671"}
                                text={"Cancelar"}
                                type={"reset"}
                                onClick={() => {
                                    setIsValid({profileLink: true, userName: true, bio: true})
                                }}
                            />
                            <ProfileConfigButton
                                backgroundColor={"#F37671"}
                                color={"#FFFFFF"}
                                border={"1px solid #F37671"}
                                text={"Atualizar"}
                                type={"submit"}
                            />
                            {message && <Error marginTop={1} marginLeft={marginLeft} message={message} />}
                        </div>
                    </form>
                </div>
                <div>
                    <SideArt />
                </div>
            </ConfigAccountPageStyle>
        </>
    );
}
