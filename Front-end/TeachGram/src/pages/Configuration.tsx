import {ConfigPageStyle} from "../styles/GeneralStyle.ts";
import {SideArt} from "../Components/SideArt.tsx";
import {useNavigate, useParams} from "react-router-dom";
import {BackButton} from "../Components/BackButton.tsx";
import {DeleteButton} from "../Components/DeleteButton.tsx";
import {useContext, useEffect} from "react";
import {Overlay} from "../Components/Overlay.tsx";
import {windowContext} from "../contexts/windowContext.ts";

export function Configuration() {
    const navigate = useNavigate();
    const {userName} = useParams();

    const {opacity, setOpacity} = useContext(windowContext);

    useEffect(() => {
        console.log(opacity)
    }, [opacity]);

    return (
        <>
            {opacity && <Overlay deleteWindow={opacity}/>}
            <BackButton />
            <ConfigPageStyle top={11}>
                <div>
                    <button onClick={() => navigate(`/${userName}/config/accountConfig`)}>
                        <span>Configurações da conta</span>
                        <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px"
                             fill="#f37671">
                            <path d="m288-96-68-68 316-316-316-316 68-68 384 384L288-96Z"/>
                        </svg>
                    </button>

                    <button onClick={() => navigate(`/${userName}/config/profileConfig`)}>
                        <span>Editar perfil</span>
                        <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px"
                             fill="#f37671">
                            <path d="m288-96-68-68 316-316-316-316 68-68 384 384L288-96Z"/>
                        </svg>
                    </button>
                    <DeleteButton onClick={() => setOpacity(!opacity)}/>
                </div>
                <div>
                    <SideArt/>
                </div>
            </ConfigPageStyle>
        </>
    )
}