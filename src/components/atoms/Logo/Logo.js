import React from 'react';
import {string} from 'prop-types';
import './Logo.css';

import IconLogo from "../../assets/Logo.svg"

const Icons = {
    "Logo": IconLogo,
};

export const Logo = ({icon, size}) => {
    return (<LogoIcon name={icon} size={size} />);
};

Logo.propTypes = {
    icon: string,
    size: string
};

Logo.defaultProps = {
    icon: "Logo",
    size: "small"
};

const LogoIcon = ({name, size}) => {
    if (Icons[name] === undefined) return null;

    const Icon = Icons[name];
    return (
        <img src={Icon} className={`logo-icon--${size}`}  alt="logo"/>
    );
};

LogoIcon.propTypes = {
    name: string.isRequired,
    size: string
};