import React from "react";
import {func, node, string} from "prop-types";
import StyledButton, {StyledLinkButton, StyledToggle} from "./Button.styles";
import {Dropdown} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const Icons = {};

const CustomToggle = React.forwardRef(({children, onClick}, ref) => (
    <StyledToggle
        ref={ref}
        onClick={(e) => {
            e.preventDefault();
            onClick(e);
        }}>
        {children}
    </StyledToggle>
));

const Button = ({label, href, icon, onClick, variant, items}) => {
    if (!href && !items)
        return (
            <StyledButton onClick={onClick} variant={variant}>
                {icon && <ButtonIcon name={icon}/>}
                {label}
            </StyledButton>
        ); else if (href)
        return (
            <StyledLinkButton href={href} variant={variant}>
                {icon && <ButtonIcon name={icon}/>}
                {label}
            </StyledLinkButton>
        );
    return (
        <Dropdown>
            <Dropdown.Toggle as={CustomToggle}>
              {label}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {items.titles.map(title =>(
                  <Dropdown.Item>{title}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
        </Dropdown>);
};

// Expected prop values
Button.propTypes = {
    label: node.isRequired,
    href: string,
    icon: string,
    onClick: func,
    variant: string
};

// Default prop values
Button.defaultProps = {
    label: "Button text",
    variant: "primary"
};

const ButtonIcon = ({name}) => {
    // If icon name value doesn't match Icons object keys then return null
    if (Icons[name] === undefined) return null;
    // If icon found, return the icon in a span element
    const Icon = Icons[name];
    return (
        <span className="button__icon">
			<Icon/>
		</span>
    );
};

// Button Icon component always expects on prop value for icon name
ButtonIcon.propTypes = {
    name: string.isRequired
};

export default Button;