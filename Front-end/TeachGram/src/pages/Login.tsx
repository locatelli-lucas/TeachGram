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

export function Login() {
    return (
        <Main>
            <TitleForm>
                <TitleAndLogo />
                <Form method="get">
                    <FormName marginBottom={2}>Faça seu login</FormName>
                    <Inputs>
                        <InputAndLabel htmlFor="E-mail" type="email" placeholder="Digite seu E-mail" name="email" />
                        <InputAndLabel htmlFor="Senha" type="text" placeholder="Digite sua senha" name="password" />
                        <div>
                            <Checkbox label="Lembrar de mim"/>
                            <ForgotPassword href="#">Esqueci minha senha</ForgotPassword>
                        </div>
                        <Button typeButton={ButtonType.Submit} text="Entrar" />
                    </Inputs>
                </Form>
                <RegisterStyle marginTop={-8} marginLeft={0}>
                    <span>Ainda não tem conta?</span>
                    <RegisterLink href="/register">Cadastre-se</RegisterLink>
                </RegisterStyle>
            </TitleForm>
            <FirstImage />
        </Main>
    )
}