import { BackButton } from "../Components/BackButton.tsx";
import {ConfigAccountPageStyle} from "../styles/GeneralStyle.ts";
import { SideArt } from "../Components/SideArt.tsx";
import { ConfigInput } from "../Components/ConfigInput.tsx";
import React, {useCallback, useEffect, useRef, useState} from "react";
import {
    getUserByEmail,
    getUserByPhone,
    getUserByUserName,
    patchUser,
    User,
    UserDTO,
} from "../services/user.service.ts";
import {useNavigate, useParams} from "react-router-dom";
import { Error } from "../Components/Error.tsx";

export function AccountConfig() {
    const [marginLeft, setMarginLeft] = useState(0);
    const navigate = useNavigate();
    const { userName } = useParams();
    const inputRefName = useRef<HTMLInputElement>(null);
    const inputRefEmail = useRef<HTMLInputElement>(null);
    const inputRefPhone = useRef<HTMLInputElement>(null);
    const inputRefPassword = useRef<HTMLInputElement>(null);
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
        name: true,
        email: true,
        phone: true,
        password: true,
    });
    const [errorMessage, setErrorMessage] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
    });
    const [message, setMessage] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNewData((prev) => ({ ...prev, [name]: value }));
        setIsValid((prev) => ({ ...prev, [name]: true }));
        setErrorMessage((prev) => ({ ...prev, [name]: "" }));
    };

    const getUserInfos = useCallback(async () => {
        try {
            return await getUserByUserName(userName!);
        } catch (error) {
            console.error("Error: User not found");
        }
    }, [userName]);

    const handleInputName = () => {
        if (inputRefName.current) {
            if (inputRefName.current.value === user?.name) {
                setErrorMessage((prev) => ({...prev, name: "Nome não alterado"}));
                setIsValid((prev) => ({...prev, name: false}));
                return false
            }
            setIsValid((prev) => ({...prev, name: true}))
            return true;
        }
    };

    const handleInputEmail = async () => {
        if (inputRefEmail.current) {
            if (inputRefEmail.current.value === user?.email) {
                setErrorMessage((prev) => ({...prev, email: "E-mail não alterado"}))
                setIsValid(prev => ({...prev, email: false}));
                return false;
            } else if (await getUserByEmail(inputRefEmail.current.value)) {
                setErrorMessage((prev) => ({...prev, email: "E-mail já cadastrado"}));
                setIsValid((prev) => ({...prev, email: false}));
                return false;
            } else if (inputRefEmail.current?.validity.typeMismatch) {
                setErrorMessage((prev) => ({...prev, email: "E-mail inválido"}));
                setIsValid((prev) => ({...prev, email: false}));
                console.log(isValid.email)
                return false;
            }
            setIsValid((prev) => ({...prev, email: true}))
            return true;
        }
    };

    const handleInputPhone = async () => {
        if (inputRefPhone.current?.value) {
            const phonePattern = /^\d{10,15}$/;
            if (!phonePattern.test(inputRefPhone.current.value)) {
                setErrorMessage((prev) => ({ ...prev, phone: "Número inválido" }));
                setIsValid((prev) => ({ ...prev, phone: false }));
                return false;
            } else if (await getUserByPhone(inputRefPhone.current.value)) {
                setErrorMessage((prev) => ({ ...prev, phone: "Número já cadastrado" }));
                setIsValid((prev) => ({ ...prev, phone: false }));
                return false;
            }
            setIsValid((prev) => ({ ...prev, phone: true }))
            return true;
        }
    };

    const handleInputPassword = () => {
        if (inputRefPassword.current) {
            if (inputRefPassword.current.value === user?.password) {
                setErrorMessage((prev) => ({...prev, password: "Senha não alterada"}));
                setIsValid((prev) => ({...prev, password: false}));
                return false;
            }
            setIsValid((prev) => ({...prev, password: true}))
            return true;
        }
    };

    const handleErrorMessages = async (
        event: React.FormEvent<HTMLFormElement>
    ) => {
        event.preventDefault();
        const nameValid = handleInputName();
        const emailValid = await handleInputEmail();
        const phoneValid = await handleInputPhone();
        const passwordValid = handleInputPassword();
        return nameValid || emailValid || phoneValid || passwordValid;
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (
            !inputRefName.current?.value &&
            !inputRefEmail.current?.value &&
            !inputRefPhone.current?.value &&
            !inputRefPassword.current?.value
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
    }, []);

    return (
        <>
            <BackButton onClick={() => navigate(`/${userName}/config`)}/>
            <ConfigAccountPageStyle top={7} >
                <div>
                    <h2>Configurações da conta</h2>
                    <form method={"post"} onSubmit={handleSubmit} noValidate>
                        <ConfigInput
                            name={"name"}
                            isValid={isValid.name}
                            errorMessage={errorMessage.name}
                            onChange={handleChange}
                            inputRef={inputRefName}
                            label={"Nome"}
                            type={"text"}
                            placeholder={user?.name}
                            button={false}
                        />
                        {!isValid.name && (
                            <Error marginTop={3.8} marginLeft={-1.5} message={errorMessage.name} />
                        )}
                        <ConfigInput
                            name={"email"}
                            isValid={isValid.email}
                            errorMessage={errorMessage.email}
                            onChange={handleChange}
                            inputRef={inputRefEmail}
                            label={"E-mail"}
                            type="email"
                            placeholder={user?.email}
                            button={false}
                        />
                        {!isValid.email && (
                            <Error marginTop={9} marginLeft={-1.5} message={errorMessage.email} />
                        )}
                        <ConfigInput
                            name={"phone"}
                            isValid={isValid.phone}
                            errorMessage={errorMessage.phone}
                            onChange={handleChange}
                            inputRef={inputRefPhone}
                            label={"Celular"}
                            type={"tel"}
                            placeholder={user?.phone}
                            button={false}
                        />
                        {!isValid.phone && <Error marginTop={14} marginLeft={-1.5} message={errorMessage.phone} />}
                        <ConfigInput
                            name={"password"}
                            isValid={isValid.password}
                            errorMessage={errorMessage.password}
                            onChange={handleChange}
                            inputRef={inputRefPassword}
                            label={"Senha"}
                            type={"password"}
                            placeholder={"Senha"}
                            button={false}
                        />
                        {!isValid.password && <Error marginTop={19.3} marginLeft={-1.5} message={errorMessage.password} />}
                        <ConfigInput
                            name={"button"}
                            message={message}
                            type={"submit"}
                            value={"Salvar"}
                            button={true}
                            onClick={() => handleErrorMessages}
                        />
                        {message && <Error marginTop={25} marginLeft={marginLeft} message={message} />}
                    </form>
                </div>
                <div>
                    <SideArt />
                </div>
            </ConfigAccountPageStyle>
        </>
    );
}
