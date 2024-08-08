import {
    Body,
    Form, FormName, Inputs,
    TitleForm,
} from "../styles/GeneralStyle.ts"

import {TitleAndLogo} from "../Components/Title.tsx";
import {InputAndLabel} from "../Components/InputForm.tsx";
import {Button, ButtonType} from "../Components/Button.tsx";
import {FirstImage} from "../Components/FirstImage.tsx";
import React, {useContext, useState} from "react";
import {createUser} from "../services/user.service.ts";
import {useNavigate, useParams} from "react-router-dom";
import {BackButton} from "../Components/BackButton.tsx";
import {userContext} from "../contexts/userContext.ts";

export function LinkInsertion() {
    const [errorMessage, setErrorMessage] = useState<string>("");
    const {user, setUser} = useContext(userContext);
    const navigate = useNavigate();
    const {userName} = useParams<string>();

    const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser(prevUser => ({ ...prevUser!, profileLink: e.target.value }));
    }

    const validateLink = (): boolean => {
        if (!user.profileLink) {
            setErrorMessage("Campo vazio, digite seu link");
            return false;
        }
        setErrorMessage("");
        return true;
    }

    const handleLink = async (e: React.FormEvent) => {
        e.preventDefault();
        if (validateLink()) {
            try {
                console.log(user)
                await createUser(user);
                navigate(`/${userName!}`);
            } catch (error) {
                console.error(error);
                setErrorMessage("Erro ao criar usuário, tente novamente.");
            }
        }
    }

    return (
        <Body>
            <BackButton onClick={() => navigate("/register")} />
            <TitleForm>
                <TitleAndLogo marginTop={119} />
                <Form method={"post"} onSubmit={handleLink}>
                    <FormName marginBottom={7}>Insira o link da sua foto de perfil</FormName>
                    <Inputs marginLeft={1.4}>
                        <InputAndLabel
                            marginLeftError={1.6}
                            isValid={!errorMessage}
                            errorMessage={errorMessage}
                            onChange={handleChanges}
                            htmlFor="Link"
                            type="text"
                            placeholder="Insira seu link"
                            name="Link"
                            required={true}
                        />
                        <Button
                            typeButton={ButtonType.Submit}
                            text="Salvar"
                            onClick={validateLink}
                        />
                    </Inputs>
                </Form>
            </TitleForm>
            <FirstImage />
        </Body>
    )
}
