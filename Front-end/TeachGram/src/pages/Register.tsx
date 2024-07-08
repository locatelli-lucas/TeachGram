import {
    Body,
    Form, FormName, Inputs,
    Main, RegisterLink, RegisterStyle,
    TitleForm
} from "../styles/GeneralStyle.ts";
import {TitleAndLogo} from "../Components/Title.tsx";
import {InputAndLabel} from "../Components/InputForm.tsx";
import {Button, ButtonType} from "../Components/Button.tsx";
import {FirstImage} from "../Components/FirstImage.tsx";
import React, {useState} from "react";
import {createUser, User} from "../services/user.service.ts";
import {Unfulfilled} from "../Components/Unfulfilled.tsx";

export function Register() {
    const marginBottom = -1;

    const [user, setUser] = useState<User>({
        name: "",
        email: "",
        userName: "",
        bio: "",
        phone: "",
        password: "",
    });
    const [isValidName, setIsValidName] = useState(true);
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [isValidUsername, setIsValidUsername] = useState(true);
    const [isValidPhone, setIsValidPhone] = useState(true);
    const [isValidPassword, setIsValidPassword] = useState(true);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const {name, value} = e.target;
        setUser({...user, [name]: value});

    }

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        createUser(user)
            .then(response => console.log(response))
            .catch(error => console.error(error))
    }

    const handleValidation = (name: string) => {
        switch (name) {
            case "name":
                setIsValidName(false);
                break;
            case "email":
                setIsValidEmail(false);
                break;
            case "userName":
                setIsValidUsername(false);
                break;
            case "phone":
                setIsValidPhone(false);
                break;
            case "password":
                setIsValidPassword(false);
                break;
            default:
                break;
        }
    }

    return (
        <Main>
            <TitleForm>
                <TitleAndLogo />
                <Body>
                    <Form height={50} gap={1.5} onSubmit={handleFormSubmit}>
                        <FormName marginBottom={0.5}>Crie sua conta</FormName>
                        <Inputs>
                            <InputAndLabel value = {user.name} onChange = {handleChange} marginBottom={marginBottom}  htmlFor="Nome" type="text" placeholder="Digite seu nome" name="name" required={true} isValid={isValidName} invalidCapture={() => handleValidation("name")}/>
                            {!isValidName && <Unfulfilled/>}
                            <InputAndLabel value = {user.email} onChange = {handleChange} marginBottom={marginBottom} htmlFor="E-mail" type="email" placeholder="Digite seu E-mail" name="email" required={true} isValid={isValidEmail} invalidCapture={() => handleValidation("email")}/>
                            {!isValidEmail && <Unfulfilled/>}
                            <InputAndLabel value = {user.userName} onChange = {handleChange} marginBottom={marginBottom} htmlFor="Username" type="text" placeholder="@seu_username" name="userName" required={true} isValid={isValidUsername} invalidCapture={() => handleValidation("userName")}/>
                            {!isValidUsername && <Unfulfilled/>}
                            <InputAndLabel value = {user.bio} onChange = {handleChange} marginBottom={marginBottom} htmlFor="Descrição" type="text" placeholder="Faça uma descrição" name="bio" />
                            <InputAndLabel value = {user.phone} onChange = {handleChange} marginBottom={marginBottom} htmlFor="Celular" type="phone" placeholder="Digite seu número de celular" name="phone" required={true} isValid={isValidPhone} invalidCapture={() => handleValidation("phone")}/>
                            {!isValidPhone && <Unfulfilled/>}
                            <InputAndLabel value = {user.password} onChange = {handleChange} marginBottom={marginBottom} htmlFor="Senha" type="text" placeholder="Digite sua senha" name="password" required={true} isValid={isValidPassword} invalidCapture={() =>handleValidation("password")}/>
                            {!isValidPassword && <Unfulfilled/>}
                            <Button typeButton={ButtonType.Submit} text="Próximo"/>
                            <RegisterStyle marginTop={4.5} marginLeft={5.5}>
                                <span>Já possui conta?</span>
                                <RegisterLink href="/">Entrar</RegisterLink>
                            </RegisterStyle>
                        </Inputs>
                    </Form>
                </Body>
            </TitleForm>
            <FirstImage />
        </Main>
    )
}