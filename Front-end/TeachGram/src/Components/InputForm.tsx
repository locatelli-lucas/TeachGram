import {Div_Input, Input, Label} from "../styles/GeneralStyle.ts";
import React from "react";
import {Error} from "./Error.tsx";

interface Props {
    htmlFor: string,
    type: string,
    placeholder: string,
    name: string,
    marginBottom?: number,
    value?: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    required?: boolean
    userData?: string
    inputRef?: React.RefObject<HTMLInputElement>
    errorMessage?: string
    isValid?: boolean
    onInvalidCapture?: (e: React.FormEvent<HTMLInputElement>) => void
    marginLeftError?: number
}

export function InputAndLabel({htmlFor, type, placeholder, name, marginBottom, value, onChange, required, inputRef, errorMessage, isValid, onInvalidCapture, marginLeftError}: Props) {

    function handleClick() {
        if (inputRef?.current) {
            const value = inputRef.current?.validity;
            console.log("Valor do input:", value);
        }
    }

    return (
        <Div_Input>
            <Label htmlFor={htmlFor}>{htmlFor}</Label>
            <Input ref={inputRef} onClick={handleClick} value={value} onChange={onChange} marginBottom={marginBottom} type={type} placeholder={placeholder} name={name} required={required} isValid={isValid} onInvalidCapture={onInvalidCapture} onInvalid={e => e.preventDefault()} />
            {!isValid && <Error message={errorMessage} marginLeft={marginLeftError}/>}
        </Div_Input>
    )
}