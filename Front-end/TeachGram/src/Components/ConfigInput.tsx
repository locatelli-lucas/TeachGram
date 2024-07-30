import {InputConfigStyle} from "../styles/GeneralStyle.ts";
import React from "react";

interface Props {
    label?: string;
    type: string;
    placeholder?: string | undefined;
    value?: string;
    button?: boolean;
    inputRef?: React.RefObject<HTMLInputElement>;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    isValid?: boolean;
    errorMessage?: string;
    message?: string;
    name: string;
    pattern?: string;
    onClick?: () => void;
}

export function ConfigInput({label, type, placeholder, value, button, inputRef, onChange, isValid, name, pattern, onClick}: Props) {

    return (
        <>
            <label htmlFor={name}>{label}</label>
            <InputConfigStyle name={name}
                              isValid={isValid}
                              ref={inputRef}
                              type={type}
                              placeholder={placeholder}
                              value={value} button={button}
                              onChange={onChange}
                              onInvalid={e => e.preventDefault()} onClick={onClick}
                              pattern={pattern}/>
        </>


    )
}