import React from 'react';
import {number, string} from 'prop-types';
import StyledLink from "./Link.styles";

export const Link = ({label, href, variant}) => {
    return (<StyledLink href={href} variant={variant}>{label}</StyledLink>);
};

Link.propTypes = {
    label: string,
    href: string,
    variant: string,
    weight: number
};

Link.defaultProps = {
    label: "로그인",
    href: "/login",
    variant: "primary",
};
