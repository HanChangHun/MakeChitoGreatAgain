import React from 'react';
import {string} from 'prop-types';
import StyledInputText from "./InputText.styles";

export const InputText = ({type, placeholder, value, onChange}) => {
    return (<StyledInputText type={type} placeholder={placeholder} value ={value} onChange={onChange} />);
};

InputText.propTypes = {
    type: string,
    placeholder: string
};

InputText.defaultProps = {
    type: "text",
    placeholder: "hello world"
};
