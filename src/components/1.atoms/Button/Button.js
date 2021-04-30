import React from "react";
import {func, node, string} from "prop-types";
import StyledButton from "./Button.styles";
import 'bootstrap/dist/css/bootstrap.min.css';


const Button = ({label, onClick, variant, className}) => {
    return (
        <StyledButton className={className} onClick={onClick} variant={variant}>
            {label}
        </StyledButton>
    );
};

// Expected prop values
Button.propTypes = {
    label: node.isRequired,
    onClick: func,
    variant: string
};

// Default prop values
Button.defaultProps = {
    label: "Button text",
    variant: "primary"
};

export default Button;