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
import React, {useRef, useState} from "react";
import {createUser, getUserByEmail, getUserByPhone, getUserByUserName, User} from "../services/user.service.ts";

export function Register() {
    const marginBottom = -0.3;
    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const userNameRef = useRef<HTMLInputElement>(null);
    const bioRef = useRef<HTMLInputElement>(null);
    const phoneRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const [isValid, setIsValid] = useState({
        name: true,
        email: true,
        userName: true,
        phone: true,
        password: true
    })
    const [errorMessage, setErrorMessage] = useState({
        name: "",
        email: "",
        userName: "",
        bio: "",
        phone: "",
        password: ""
    });
    const [user, setUser] = useState<User>({
        name: "",
        email: "",
        userName: "",
        bio: "",
        phone: "",
        password: "",
    });


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        const {name, value} = e.target;
        setUser(prevUser => ({...prevUser, [name]: value}));
        setIsValid(prev => ({...prev, [name]: true}))
        setErrorMessage(prev => ({...prev, [name]: ""}))
    }

    const searchUserByEmail = async (email: string) => {
        try {
            return await getUserByEmail(email);
        } catch (error) {
            console.error(error);
        }
    }

    const searchUserByUsername = async (username: string) => {
        try {
            return await getUserByUserName(username);
        } catch (error) {
            console.error(error);
        }
    }

    const searchUserByPhone = async (phone: string) => {
        try {
            return await getUserByPhone(phone);
        } catch (error) {
            console.error(error);
        }
    }

    const handleName = () => {
        if(nameRef.current) {
            if (nameRef.current?.validity.valueMissing) {
                setErrorMessage(prev => ({...prev, name: "Campo vazio, digite seu nome"}))
                setIsValid(prev => ({...prev, name: false}))
                return false
            }
        }
        setIsValid(prev => ({...prev, name: true}))
        return true
    }

    const handleEmail = async () => {
        if (emailRef.current) {
            if (emailRef.current?.validity.valueMissing) {
                setErrorMessage(prev => ({...prev, email: "Campo vazio, digite seu e-mail"}))
                setIsValid(prev => ({...prev, email: false}))
                return false
            } else if (emailRef.current?.validity.typeMismatch) {
                setErrorMessage(prev => ({...prev, email: "Digite um e-mail válido"}))
                setIsValid(prev => ({...prev, email: false}))
                return false
            } else if (await searchUserByEmail(emailRef.current.value)) {
                setErrorMessage(prev => ({...prev, email: "E-mail já cadastrado"}))
                setIsValid(prev => ({...prev, email: false}))
                return false
            }
        }
        setIsValid(prev => ({...prev, email: true}))
        return true
    }

    const handleUserName = async () => {
        if (userNameRef.current) {
            if (userNameRef.current?.validity.valueMissing) {
                setErrorMessage(prev => ({...prev, userName: "Campo vazio, digite seu username"}))
                setIsValid(prev => ({...prev, userName: false}))
                return false
            } else if (await searchUserByUsername(userNameRef.current.value)) {
                setErrorMessage(prev => ({...prev, userName: "Usuário já cadastrado"}))
                setIsValid(prev => ({...prev, userName: false}))
                return false
            }
        }
        setIsValid(prev => ({...prev, userName: true}))
        return true
    }

    const handlePhone = async () => {
        if (phoneRef.current) {
            if (phoneRef.current?.validity.valueMissing) {
                setErrorMessage(prev => ({...prev, phone: "Campo vazio, digite seu número de celular"}))
                setIsValid(prev => ({...prev, phone: false}))
                return false
            } else if (phoneRef.current?.validity.typeMismatch) {
                setErrorMessage(prev => ({...prev, phone: "Digite um número de celular válido"}))
                setIsValid(prev => ({...prev, phone: false}))
                return false
            } else if (await searchUserByPhone(phoneRef.current.value)) {
                setErrorMessage(prev => ({...prev, phone: "Número já cadastrado"}))
                setIsValid(prev => ({...prev, phone: false}))
                return false
            }
        }
        setIsValid(prev => ({...prev, phone: true}))
        return true
    }

    const handlePassword = () => {
        if(passwordRef.current) {
            if (passwordRef.current?.validity.valueMissing) {
                setErrorMessage(prev => ({...prev, password: "Campo vazio, digite sua senha"}))
                setIsValid(prev => ({...prev, password: false}))
                return false
            }
        }
        setIsValid(prev => ({...prev, password: true}))
        return true
    }

    const handleErrorMessages = async () => {
        handleName()
        await handleEmail()
        await handleUserName()
        await handlePhone()
        handlePassword()
        console.log("name: " + isValid.name)
        console.log("email: " + isValid.email)
        console.log("userName: " + isValid.userName)
        console.log("phone: " + isValid.phone)
        console.log("password: " + isValid.password)

        return handleName() && await handleEmail() && await handleUserName() && await handlePhone() && handlePassword();
    }

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        createUser(user)
            .then(response => console.log(response))
            .catch(error => console.error(error))
    }

    return (
        <Main>
            <TitleForm>
                <TitleAndLogo />
                <Body>
                    <Form height={50} gap={1.5} onSubmit={handleFormSubmit}>
                        <FormName marginBottom={0.5}>Crie sua conta</FormName>
                        <Inputs>
                            <InputAndLabel inputRef={nameRef} errorMessage={errorMessage.name} isValid={isValid.name} value = {user.name} onChange = {handleChange} marginBottom={marginBottom}  htmlFor="Nome" type="text" placeholder="Digite seu nome" name="name" required={true}  />
                            <InputAndLabel inputRef={emailRef} errorMessage={errorMessage.email} isValid={isValid.email} value = {user.email} onChange = {handleChange} marginBottom={marginBottom} htmlFor="E-mail" type="email" placeholder="Digite seu E-mail" name="email" required={true}  />
                            <InputAndLabel inputRef={userNameRef} errorMessage={errorMessage.userName} isValid={isValid.userName} value = {user.userName} onChange = {handleChange} marginBottom={marginBottom} htmlFor="Username" type="text" placeholder="@seu_username" name="userName" required={true}  />
                            <InputAndLabel inputRef={bioRef} isValid={true} value = {user.bio} onChange = {handleChange} marginBottom={marginBottom} htmlFor="Descrição" type="text" placeholder="Faça uma descrição" name="bio" />
                            <InputAndLabel inputRef={phoneRef} errorMessage={errorMessage.phone} isValid={isValid.phone} value = {user.phone} onChange = {handleChange} marginBottom={marginBottom} htmlFor="Celular" type="tel" placeholder="Digite seu número de celular" name="phone" required={true}  />
                            <InputAndLabel inputRef={passwordRef} errorMessage={errorMessage.password} isValid={isValid.password} value = {user.password} onChange = {handleChange} marginBottom={marginBottom} htmlFor="Senha" type="password" placeholder="Digite sua senha" name="password" required={true}  />
                            <Button typeButton={ButtonType.Submit} text="Próximo" onClick={handleErrorMessages}/>
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