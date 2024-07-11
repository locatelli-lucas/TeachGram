import {
    Form, FormName, Inputs,
    Main, TitleForm,
} from "../styles/GeneralStyle.ts"

import {TitleAndLogo} from "../Components/Title.tsx";
import {InputAndLabel} from "../Components/InputForm.tsx";
import {Button, ButtonType} from "../Components/Button.tsx";
import {FirstImage} from "../Components/FirstImage.tsx";
import React, {useRef, useState} from "react";
import {getUserByUserName, patchUser, UserDTO} from "../services/user.service.ts";
import {useNavigate, useParams} from "react-router-dom";
import {BackButton} from "../Components/BackButton.tsx";

export function LinkInsertion() {
    const [isValid, setIsValid] = useState(true)
    const linkRef = useRef<HTMLInputElement>(null);
    const [errorMessage, setErrorMessage] = useState("");
    const [link, setLink] = useState("");
    const [user, setUser] = useState<UserDTO>({
        name: null,
        userName: null,
        bio: null,
        phone: null,
        email: null,
        password: null,
        profileLink: null
    })

    const navigate = useNavigate();

    const {userName} = useParams<string>();

    const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLink(e.target.value);
        setUser(prevUser => ({...prevUser, profileLink: e.target.value}))
    }

    const handleErrorMessages = () => {
        if (linkRef.current) {
            if (!link) {
                setErrorMessage("Campo vazio, digite seu link")
                setIsValid(false);
                return false;
            }
        }
        setIsValid(true);
        return true;
    }

    const handleLink = async (e: React.FormEvent) => {
        e.preventDefault();
        const isValidate = handleErrorMessages();
        console.log(isValidate);
        console.log(user)
        if (isValidate) {
            try {
                await patchUser(userName!, user);
                const user1 = await getUserByUserName(userName!)
                console.log(user1)
            } catch (error) {
                console.error(error);
            }
        }
    }

    return (
        <Main>
            <BackButton onClick={() => navigate("/register")}/>
            <TitleForm>
                <TitleAndLogo/>
                <Form method={"post"} onSubmit={handleLink}>
                    <FormName marginBottom={7}>Insira o link da sua foto de perfil</FormName>
                    <Inputs marginLeft={1.4}>
                        <InputAndLabel marginLeftError={1.6} inputRef={linkRef} isValid={isValid} errorMessage={errorMessage}
                                       onChange={handleChanges} htmlFor="Link" type="text" placeholder="Insira seu link"
                                       name="Link" required={true}/>
                        <Button typeButton={ButtonType.Submit} text="Salvar" onClick={handleErrorMessages}/>
                    </Inputs>
                </Form>
            </TitleForm>
            <FirstImage/>
        </Main>
    )
}