import { CheckboxStyle, Label } from "../styles/GeneralStyle.ts";


interface Props {
    label: string;
}

export function Checkbox({label}: Props) {
    return (
        <Label htmlFor="checkbox"><CheckboxStyle type="checkbox" id = "checkbox"/>{label}</Label>
    )
}