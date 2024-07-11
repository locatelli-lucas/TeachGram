import {ComponentType} from "react";

interface Props {
    img: ComponentType,
    text: string
}

export function SideBarButton({img: Img, text}: Props) {
    return (
        <button>
            <Img />
            {text}
        </button>
    )
}