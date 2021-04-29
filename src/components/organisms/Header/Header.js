import React from 'react';
import StyledHeader from "../Header/Header.styles";
import {Navigation} from "../../molecules/Navigation/Navigation";
import {Logo} from "../../atoms/Logo/Logo";


export const Header = ({items1, items2}) => {
    return (<StyledHeader>
        <Logo size={"small"} />
        <Navigation name={"header-left"} items={items1}/>
        <Navigation name={"header-right"} items={items2}/>
    </StyledHeader>);
};

Header.propTypes = {};

Header.defaultProps = {};