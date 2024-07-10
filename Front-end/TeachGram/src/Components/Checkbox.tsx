import {CheckboxLabel, CheckboxStyle} from "../styles/GeneralStyle.ts";


interface Props {
    label: string;
}

export function Checkbox({label}: Props) {
    return (
        <CheckboxLabel htmlFor="checkbox"><CheckboxStyle type="checkbox" id = "checkbox"/>{label}</CheckboxLabel>
    )
}