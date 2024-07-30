import styled from "styled-components";
import './fonts.css';

interface SideArtProps {
    inverter: boolean
}

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
    marginTop?: number;
    position?: string;
    width?: number;
    gap?: number;
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
    transform?: string;
}

interface ConfigPageStyleProps {
    top?: number;
    width?: number;
}

interface InputConfigStyleProps {
    background?: string;
    width?: number;
    color?: string;
    border?: string;
    borderRadius?: number;
    fontWeight?: string;
    button?: boolean;
    isValid?: boolean;
}

interface ProfileConfigButtonStyleProps {
    backgroundColor: string;
    color: string;
    border: string;
}

interface OpacityDivProps {
    opacity?: boolean;
}

interface FollowWindowButtonProps {
    clicked: boolean
}

interface SideArtCompleteStyleProps {
    left?: number
}

export const Body = styled.body`
    position: relative;
    width: 70vw;
    height: 100vh;
    display: flex;
    margin: 0 auto;
`;

export const BodyRegister = styled.body`
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
    display: flex;
`

export const ErrorStyle = styled.div<ErrorProps>`
    width: 18.5vw;
    position: absolute;
    display: flex;
    justify-content: end;
    margin-left: ${props => `${props.marginLeft}`}em;
    margin-top: ${props => `${props.marginTop}`}em;
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
    width: ${props => `${props.width}%`};
    height: ${props => `${props.height}vh`};
    border-radius: 50%;
    border: #E2E2E2 solid 1px;
    top: ${props => `${props.marginTop}vh`};
    left: 1em;
    background-image: url(${props => `${props.src}`});
    background-repeat: no-repeat;
    background-size: cover;

`;

export const ProfileMain = styled.main`
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
    top: 3em;
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
    height: 25vh;
    
    & p {
        overflow-wrap: break-word;
        color: #6A6F73;
    }
    
    & button {
        position: relative;
        height: 2.6em;
        width: 6.7em;
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
    top: 6em;
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
    top: 8em;
`

export const PostImage = styled.img`
    height: 19.4em;
    width: 19.4em;
    border: #FFFFFF solid 1px;
`

export const ConfigPageStyle = styled.body<ConfigPageStyleProps>`
    position: relative;
    width: 70vw;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    font-family: sans-serif;
    
    & div {
        display: flex;
        flex-direction: column;
    }
    
    & span {
        color: #303030;
        font-size: 1.1em;
        
    }
    
    & button {
        position: relative;
        width: 32vh;
        height: 8vh;
        margin-bottom: 1em;
        border: none;
        border-radius: 15px;
        background: none;
        color: #303030;
        font-size: 1.2em;
        top: 13em;
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`

export const ConfigAccountPageStyle = styled.body<ConfigPageStyleProps>`
    position: relative;
    width: 70vw;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    font-family: sans-serif;
    
    & h2 {
        color: #303030;
        margin-bottom: 2em;
        position: relative;
        top: ${props => `${props.top}em`};
    }
    
    & form {
        display: flex;
        flex-direction: column;
        position: relative;
        top: 11em;
        gap: 1em;
        width: ${props => `${props.width}vw`};
    }
    
`

export const ProfileConfigButtonStyle = styled.button<ProfileConfigButtonStyleProps>`
    background: ${props => `${props.backgroundColor}`};
    border: ${props => `${props.border}`};
    color: ${props => `${props.color}`};
    border-radius: 8px;
    transform: scale(1.1);
    cursor: pointer;
    margin-right: 1.5em;
`

export const SideArtStyle = styled.div<SideArtProps>`
    height: 9.7em;
    width: 9.7em;
    background: #fef2f1;
    border: #f37671 1px solid;
    position: relative;
    border-top-left-radius: 100px;
    transform: ${props => `${props.inverter ? "scaleX(-1)" : "scaleX(1)"}`};
    right: ${props => `${props.inverter ? "0" : "9.7"}em`};
    z-index: 0;
`

export const SideArtCompleteStyle = styled.div<SideArtCompleteStyleProps>`
    display: flex;
    flex-direction: column;
    position: relative;
    left: ${props => `${props.left}em`};
`

export const InputConfigStyle = styled.input<InputConfigStyleProps>`
    border: none;
    border-bottom: 1px solid #E6E6E6;
    position: relative;
    bottom: 8px;
    background: ${props => `${props.button ? "#f37671" : null}`};
    border: ${props => `${props.button ? "none" : null}`};
    border-bottom: ${props => `${props.button ? "none" : "1px solid #E6E6E6"}`};
    border-radius: ${props => `${props.button ? "8" : null}px`};
    width: ${props => `${props.button ? "4vw" : null}`};
    height: ${props => `${props.button ? "3.3vh" : null}`};
    color: ${props => `${props.button ? "#FFFFFF" : null}`};
    cursor: ${props => `${props.button ? "pointer" : null}`};
    border-bottom-color: ${props => `${props.isValid ? "" : "#F37671"}`};
    
    &:focus {
        box-shadow: 0 0 0 0;
        outline: 0;
    }
    
`

export const DeleteButtonStyle = styled.button`
    border: none;
    background: none;
    width: 5vw;
    
    & span {
        color: #F37671;
        text-decoration-line: underline;
    }
`

export const OpacityDiv = styled.div<OpacityDivProps>`
    background-color: rgba(0, 0, 0, 0.35);
    z-index: 10;
    height: 100%;
    width: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
`;


export const DeletePopUpStyle = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;

    height: 32vh;
    width: 30vw;
    border-radius: 34px;
    background: #FFFFFF;
    z-index: 10;
    font-family: sans-serif;
    color: #303030;
    
    & h2 {
        position: relative;
        margin: 1.5em 0;
        left: 1.5em;
    }
    
    & hr {
        height: 2px;
        width: 100%;
        background-color: #CECECE;
        border: none;
    }
    
    & span {
        position: relative;
        margin: 1.8em 0;
        left: 3em;
    }
    
    & div {
        display: flex;
        width: 100%;
        position: relative;
        left: 12em;
        top: 1.5em;
        gap: 15px;
    }
`

export const FollowsWindowStyle = styled.div`
    position: absolute;
    height: 60vh;
    width: 27vw;
    border-radius: 34px;
    border: none;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    padding: 3em 4em;
    overflow-y: auto;
    scrollbar-width: none;
    
    
    & hr {
        position: relative;
        width: 100%;
        margin: 0 auto;
        border: 1px solid #CECECE;
    }
    
    & svg {
        position: absolute;
        right: 2.5em;
        top: 1.5em;
        border-radius: 35px;
        cursor: pointer;
    }
    
    & svg:hover {
        background: #dcdcdc;
    }
`

export const FollowStyle = styled.div`
    position: relative;
    top: 2em;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-family: sans-serif;
    color: #303030;
    transition: 300ms;
    height: 8vh;
    z-index: 0;

    & span {
        color: #A09F9F;
        font-size: 0.9em;
        position: relative;
        left: 2.3em;
        cursor: pointer;
    }

    & h3 {
        font-size: 1em;
        position: relative;
        left: 2em;
        cursor: pointer;
    }

    & button {
        transform: scale(0.9);
        position: absolute;
        left: 17em;
        width: 6vw;
        top: 1.6em;
    }

    &:hover {
        background: #dcdcdc;
    }
`

export const FollowWindowButtonsStyle = styled.button<FollowWindowButtonProps>`
    color: #303030;
    background: ${props => `${props.clicked ? "#E2E2E2" : "none"}`};
    border: none;
    font-family: sans-serif;
    font-size: 1.5em;
    font-weight: bold;
    width: 50%;
    height: 7vh;
    transition: 300ms;
    z-index: 10;

    &:hover {
        background: #f3ecec;
    }
`

export const PostStyle = styled.div `
    height: 60vh;
    width: 29.7vw;
    border: 1px solid black;
`


