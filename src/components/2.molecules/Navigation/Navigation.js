import React from 'react';
import {arrayOf, shape, string} from "prop-types";
import StyledNavigation from "../Navigation/Navigation.styles";
import {Link} from "../../1.atoms/Link/Link";


export const Navigation = ({items, name}) => {
    return (
        <StyledNavigation className={`nav-${name}`} >
            {items.map(item => (<Link
                href={item.href}
                label={item.label}
                variant={item.variant}
            />))}
        </StyledNavigation>
    );
};

Navigation.propTypes = {
    name: string,
    items: arrayOf(
        shape({
            href: string.isRequired,
            label: string.isRequired
        })
    )
};

Navigation.defaultProps = {
    name: "login",
    items: [],
};