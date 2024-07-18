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

interface LogoTitleProps {
    scale?: number;
    marginTop?: number
}

interface SideBarButtonImgProps {
    src?: string;
}

interface ProfileBioProps {
    click?: boolean;
}

interface ProfileImageStyleProps {
    src?: string;
    height?: number;
    width?: number;
    marginTop?: number;
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

export const LogoTitle = styled.div<LogoTitleProps>`
    position: relative;
    display: flex;
    scale: ${props => `${props.scale}`};
    top: ${props => `${props.marginTop}`}px;
    left: 5px;
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
    top: 2.8em;
    left: 3em;
    z-index: 1;
    transition: 400ms;
    border-radius: 150px;
    height: 3em;
    
    &:hover {
        background-color: #E2E2E2;
    }
`;

export const SideBarStyle = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 2em;
    left: 2em;
    background-color: #FFF;
    align-items: center;
`;

export const SideBarButtonStyle = styled.button`
    position: relative;
    width: 13.69em;
    height: 4.56em;
    border-radius: 15px;
    border: 1px #E2E2E2 solid;
    background: none;
    color: #8E8E8E;
    font-family: sans-serif;
    font-size: 1.2em;
    font-weight: 300;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 2em;
    top: 2em;
    left: 1em;
`;

export const SideBarIconStyle = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 10px;
    bottom: 3px;
    scale: 1.8;
    margin-left: 1em;
    color: #6A6F73;
`;

export const SideBarButtonImg = styled.div<SideBarButtonImgProps>`
    position: relative;
    display: flex;
    border-radius: 150px;
    left: 1em;
    bottom: 3px;
    height: 1.8em;
    width: 1.8em;
    border: 2px #E2E2E2 solid;
    background-image: url(${props => `${props.src}`});
    background-repeat: no-repeat;
    background-size: cover;
`;

export const ProfileImageStyle = styled.div<ProfileImageStyleProps>`
    position: relative;
    width: 18em;
    height: 18em;
    border-radius: 50%;
    border: #E2E2E2 solid 1px;
    top: 2em;
    left: 1em;
    background-image: url(${props => `${props.src}`});
    background-size: cover;

`;

export const ProfileBody = styled.body`
    position: relative;
    left: 5em;
    font-family: sans-serif;
    overflow-wrap: break-word;
    overflow-y: scroll;
    scrollbar-width: none;
`

export const ProfileBioImage = styled.div`
    display: flex;
    position: relative;
    align-items: center;
`

export const ProfileBio = styled.div<ProfileBioProps>`
    position: relative;
    left: 3em;
    display: flex;
    flex-direction: column;
    gap: 2em;
    top: 1em;
    color: #303030;
    font-size: 1.3em;
    
    & p {
        overflow-wrap: break-word;
        color: #6A6F73;
    }
    
    & button {
        position: relative;
        height: 2.6em;
        width: 5.7em;
        border-radius: 8px;
        font-family: sans-serif;
        font-size: 0.7em;
        box-shadow: 5px 5px 5px #DCDCDC;
        top: 20px;
        cursor: pointer;
        border: ${props => `${props.click ? "1px solid #666666" : "none"}`};
        background: ${props => `${props.click ? "none" : '#F37671'}`};
        color: ${props => `${props.click ? "#666666" : '#FFFFFF'}`};
    }
`

export const ProfileTitle = styled.h3`
    position: relative;
    font-family: sans-serif;
    font-size: 1.5em;
    color: #303030;
`

export const ProfilePostsFriends = styled.div`
    display: flex;
    position: relative;
    left: 2em;
    top: 3em;
    color: #303030;
    justify-content: center;
    margin: 2em 0 0.5em 0;
    
    
    & div {
        display: flex;
        flex-direction: column;
        align-items: center;
        
    }
    
    & b {
        position: relative;
        font-size: 1.4em;
        right: 5px;
    }
    
    & span {
        position: relative;
        font-size: 1.4em;
        bottom: 10px;
        color: #6A6F73;
        
    }
    
    & hr {
        position: relative;
        top: 15px;
        width: 2px;
        height: 1.9em;
        margin: 0 1em;
        border: 1px solid #DBDADA;
    }
`

export const ProfilePosts = styled.div`
    display: flex;
    position: relative;
    flex-wrap: wrap;
    top: 5em;
`

export const PostImage = styled.img`
    height: 19.4em;
    width: 19.4em;
    border: #FFFFFF solid 1px;
`
