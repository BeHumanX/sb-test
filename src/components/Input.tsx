import React from "react";
import '../stories/input.css';

export interface InputProps{
    inputType?: 'text' | 'password' | 'file';
    placeholder:string;
}

export const Input = ({
    inputType = 'text',
    placeholder,
    ...props
}: InputProps) => {
    return(
        <input type={`${inputType}`}
        className="storybook-input" 
        placeholder={`${placeholder}`}
        {...props}
        />
    )
}