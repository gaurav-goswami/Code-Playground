import React from 'react'
import { ICustomInputProps } from '../../Interface/Interface';

const CustomInput : React.FC <ICustomInputProps> = (props) => {

  const {name, type, onChange, value, placeholder, required, style, autocomplete} = props;

  return (
    <>
        <input 
            type={type}
            name={name}
            onChange={(e) => onChange(e)}
            placeholder={placeholder}
            required={required}
            value={value}  
            autoComplete={autocomplete}
            className={`${style ? style : 'px-3 py-1 border border-gray-500 font-inconsolata placeholder:text-gray-400 outline-none'}`}      
        />
    </>
  )
}

export default CustomInput
