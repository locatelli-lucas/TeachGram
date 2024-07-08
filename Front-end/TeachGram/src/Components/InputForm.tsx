import {Div_Input, Input, Label} from "../styles/GeneralStyle.ts";
import React from "react";

interface Props {
    htmlFor: string,
    type: string,
    placeholder: string,
    name: string,
    marginBottom?: number,
    value?: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    required?: boolean
    isValid?: boolean
    invalidCapture?: React.ReactEventHandler<HTMLInputElement>
}

export function InputAndLabel({htmlFor, type, placeholder, name, marginBottom, value, onChange, required, isValid, invalidCapture}: Props) {

    return (
        <Div_Input>
            <Label htmlFor={htmlFor}>{htmlFor}</Label>
            <Input value={value} onChange={onChange} marginBottom={marginBottom} type={type} placeholder={placeholder} name={name} required={required} isValid={isValid} onInvalidCapture={invalidCapture} onInvalid={e => e.preventDefault()}/>
        </Div_Input>
    )
}