import React from 'react';
import {Header} from "../../3.organisms/Header/Header"
import {items_login} from "./LoginPage-data.json"
import {Footer} from "../../3.organisms/Footer/Footer";
import {Logo} from "../../1.atoms/Logo/Logo";
import {LoginForm} from "../../2.molecules/LoginForm/LoginForm";
import StyledLoginPage from "./LoginPage.styles";

export const LoginPage = () => {
    return (<>
        <StyledLoginPage/>
        <Header items1={[]} items2={items_login}/>
        <div className={"article"}>
        <div className={"article-logo"}><Logo size={"big"} /></div>
        <div className={"article-form"}><LoginForm /></div>
        </div>
        <Footer />
    </>);
};

LoginPage.propTypes = {};

LoginPage.defaultProps = {};