import {
    ForgotPassword,
    Form, FormName, Inputs,
    Main, RegisterLink, RegisterStyle, TitleForm,
} from "../styles/GeneralStyle.ts"
import { Checkbox } from "../Components/Checkbox";
import {TitleAndLogo} from "../Components/Title.tsx";
import {InputAndLabel} from "../Components/InputForm.tsx";
import {Button, ButtonType} from "../Components/Button.tsx";
import {FirstImage} from "../Components/FirstImage.tsx";
import {getUserByEmail, getUsers} from "../services/user.service.ts";
import React, {useRef, useState} from "react";

export function Login() {
    const inputRefEmail = useRef<HTMLInputElement>(null);
    const inputRefPassword = useRef<HTMLInputElement>(null);
    const [form, setForm] = useState({
        email: "",
        password: ""
    });
    const [errorMessage, setErrorMessage] = useState({
        email: "",
        password: ""
    });
    const [isValid, setIsValid] = useState({
        email: true,
        password: true
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        const {name, value} = e.target;
        setForm(prevUser => ({...prevUser, [name]: value}));
        setErrorMessage(prev => ({...prev, [name]: ""}));
        console.log(form)
    }

    const searchUserByEmail = async (email: string) => {
        try {
            return await getUserByEmail(email);
        } catch (error) {
            console.error(error);
        }
    }

    const handleEmail = async () => {
        if (inputRefEmail.current) {
            if (inputRefEmail.current.validity.valueMissing) {
                setErrorMessage(prev => ({...prev, email: "Campo vazio, digite seu e-mail"}))
                setIsValid(prev => ({...prev, email: false}))
                return false;
            } else if (inputRefEmail.current.validity.typeMismatch) {
                setErrorMessage(prev => ({...prev, email: "E-mail inválido"}))
                setIsValid(prev => ({...prev, email: false}))
                return false;
            } else {
                const user = await searchUserByEmail(inputRefEmail.current.value);
                if (!user) {
                    setErrorMessage(prev => ({...prev, email: "E-mail não encontrado"}))
                    setIsValid(prev => ({...prev, email: false}))
                    return false;
                }
            }
        }
        setIsValid(prev => ({...prev, email: true}))
        return true;
    }

    const handlePassword = () => {
        if (inputRefPassword.current) {
            if (inputRefPassword.current.validity.valueMissing) {
                setErrorMessage(prev => ({...prev, password: "Campo vazio, digite sua senha"}))
                setIsValid(prev => ({...prev, password: false}))
                return false;
            }
        }
        setIsValid(prev => ({...prev, password: true}))
        return true;
    }

    const handleErrorMessages = async () => {
        await handleEmail();
        handlePassword();
        console.log("Email: " + await handleEmail())
        console.log("Password: " + handlePassword())

        return await handleEmail() && handlePassword()
    }

    const handleLogin = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const response = await getUsers()
        console.log(response)

        if(response) {
            const user = response.find((user: { email: string | undefined; }) => user.email === inputRefEmail.current?.value)
            if(user.password === inputRefPassword.current?.value)
                console.log("Login realizado com sucesso!")
            else {
                setErrorMessage(prev => ({...prev, password: "Senha incorreta"}));
                setIsValid(prev => ({...prev, password: false}))
            }
        }
    }

    return (
        <Main>
            <TitleForm>
                <TitleAndLogo />
                <Form method="get" onSubmit={handleLogin}>
                    <FormName marginBottom={2}>Faça seu login</FormName>
                    <Inputs>
                        <InputAndLabel inputRef={inputRefEmail} errorMessage={errorMessage.email} isValid={isValid.email} onChange={handleChange} htmlFor="E-mail" type="email" placeholder="Digite seu E-mail" name="LoginEmail" required={true}/>
                        <InputAndLabel inputRef={inputRefPassword} errorMessage={errorMessage.password} isValid={isValid.password} onChange={handleChange} htmlFor="Senha" type="password" placeholder="Digite sua senha" name="LoginPassword" required={true}/>
                        <div>
                            <Checkbox label="Lembrar de mim"/>
                            <ForgotPassword href="#">Esqueci minha senha</ForgotPassword>
                        </div>
                        <Button typeButton={ButtonType.Submit} text="Entrar" onClick={handleErrorMessages}/>
                    </Inputs>
                </Form>
                <RegisterStyle marginTop={-8}>
                    <span>Ainda não tem conta?</span>
                    <RegisterLink href="/register">Cadastre-se</RegisterLink>
                </RegisterStyle>
            </TitleForm>
            <FirstImage />
        </Main>
    )
}