import styled from "styled-components";
import './fonts.css';

interface FormProps {
    height?: number;
    width?: string;
    left?: string;
    gap?: number;
}

interface InputProps {
    marginBottom?: number;
    isValid?: boolean;
}

interface SpanProps {
    marginBottom?: number;
}

interface RegisterStyleProps {
    marginTop?: number;
    marginLeft?: number;
}

interface InputsProps {
    marginLeft?: number;
}

interface ErrorProps {
    marginLeft?: number;
}

interface TitleFormProps {
    marginLeft?: number;
}

export const Main = styled.main`
    position: relative;
    width: 70vw;
    height: 100vh;
    display: flex;
    margin: 0 auto;
`;

export const Body = styled.body`
    height: 100vh;
    position: relative;
    display: flex;
    flex-direction: column;
    margin: -100px 0 0 0;
`

export const Logo = styled.div`
    position: relative;
    border-radius: 50px;
    width: 3.5vw;
    height: 7vh;
    background: linear-gradient(90deg, #FFB629 0%, #EE5A8F 100%);
    top: 15px;
    right: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Draw = styled.div`
    position: relative;
    transform: scale(2);
`;

export const Title = styled.h1`
    font-family: 'Philosopher', sans-serif;
    font-size: 4em;
    color: #303030;
`;

export const LogoTitle = styled.div`
    position: relative;
    display: flex;
    top: 119px;
`;

export const Form = styled.form<FormProps>`
    position: relative;
    font-family: sans-serif;
    color: #303030;
    font-weight: 500;
    display: flex;
    flex-direction: column;
    align-items: start;
    width: ${(props) => `${props.width}`}vw;
    height: ${(props) => `${props.height}`}vh;
    left: ${(props) => `${props.left}`}px;
    gap: ${(props) => `${props.gap}`}em;
`;

export const TitleForm = styled.div<TitleFormProps>`
   display: flex;
   flex-direction: column;
   position: relative;
   gap: 12em;
   margin: 0 auto;
   bottom: 4em;
   align-items: center;
   left: ${props => `${props.marginLeft}`}em;
`

export const FormName = styled.span<SpanProps>`
    position: relative;
    top: 40px;
    font-family: sans-serif;
    font-size: 1.5em;
    font-weight: bold;
    color: #303030;
    margin: 0 0 ${props => `${props.marginBottom}`}em 0.6em;
`;

export const Inputs = styled.div<InputsProps>`
    position: relative;
    display: flex;
    flex-direction: column;
    margin-bottom: 3px;
    margin-left: ${props => `${props.marginLeft}`}em;
`;

export const Input = styled.input<InputProps>`
    position: relative;
    top: 8px;
    padding-left: 10px;
    margin-left: 1em;
    height: 3em;
    width: 19.3em;
    border-radius: 10px;
    border: 1px solid #A09F9F;
    margin-bottom: ${props => `${props.marginBottom}em`};

    &:focus {
        box-shadow: 0 0 0 0;
        outline: 0;
    }
    
    &:invalid {
        border-color: ${props => `${props.isValid ? "" : "#F37671"}`}
    }
    
    &:invalid:focus {
        border-color: ${props => `${props.isValid ? "" : "#F37671"}`}
    }
`;

export const Div_Input = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    margin: 15px 0;
`;

export const Label = styled.label`
    position: relative;
    font-family: sans-serif;
    color: #303030;
    font-size: 0.9em;
    top: 1px;
    margin-left: 1em;
`;

export const CheckboxLabel = styled.label`
    position: relative;
    font-family: sans-serif;
    color: #303030;
    font-size: 0.9em;
    left: 1em;
    top: 1em;
`;

export const CheckboxStyle = styled.input.attrs({type: 'checkbox'})`
    position: relative;
    left: 0.5em;
    margin-right: 0.7em;
`;

export const ForgotPassword = styled.a`
    position: relative;
    font-family: sans-serif;
    color: #303030;
    font-size: 0.9em;
    margin-left: 3.8em;
    top: 15px;
`;

export const ButtonStyle = styled.button`
    position: relative;
    height: 3.5em;
    width: 19.3em;
    border-radius: 10px;
    border: none;
    background: #F37671;
    color: #FFFFFF;
    font-family: sans-serif;
    font-size: 1em;
    font-weight: bold;
    box-shadow: 5px 5px 5px #DCDCDC;
    top: 50px;
    left: 1em;
    cursor: pointer;
    transition: 300ms;

    &:hover {
        transform: scale(1.02);
    }
`;

export const RegisterStyle = styled.div<RegisterStyleProps>`
    display: flex;
    position: relative;
    gap: 7px;
    font-family: sans-serif;
    color: #303030;
    top: ${props => `${props.marginTop}em`};
    left: ${props => `${props.marginLeft}em`};
`;

export const RegisterLink = styled.a`
    color: #F37671;
    font-weight: bold;
`;

export const ImageStyle = styled.img`
    height: 100vh;
    width: 32vw;
    border-top-left-radius: 359px;
    border: #F37671 solid;
    position: relative;
    margin: auto 0;
`;

export const LittleCircle = styled.div`
    position: relative;
    width: 0.7em;
    height: 0.7em;
    border-radius: 50%;
    background: #F37671;
    top: 5px;
`;

export const ErrorStyle = styled.div<ErrorProps>`
    width: 18.5vw;
    height: 10vh;
    position: absolute;
    display: flex;
    justify-content: end;
    top: 4.2em;
    margin-left: ${props => `${props.marginLeft}`}em;
    color: #F37671;
    font-weight: bold;
    gap: 5px;
    transform: scale(0.7);
`

export const BackButtonStyle = styled.button`
    position: absolute;
    border: none;
    background: none;
    cursor: pointer;
    top: 3em;
    left: 3em;
`;

