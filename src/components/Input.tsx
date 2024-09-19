import { useState } from "react";
import React from "react";
import "../stories/input.css";

export interface InputProps {
  value?: string;
  placeholder: string;
  backgroundColor: string;
  onChange?: (value: string) => void;
  type?: string;
}
export const Input = ({
  backgroundColor,
  value: initialValue ="",
  placeholder = "",
  type = "email",
  onChange = () => {},
  ...props
}: InputProps) => {
  const [value, setValue] = useState(initialValue);
  const handleChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
    const newValue = event.target.value;
    setValue(newValue);
    onChange(newValue);
  }

  return (
    <input
      value={value}
      className="storybook-input"
      type={type}
      style={{ backgroundColor }}
      placeholder={placeholder}
      onChange={handleChange}
      {...props}
    ></input>
  );
};
