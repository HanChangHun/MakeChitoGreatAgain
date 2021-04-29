import React from 'react';
import {Header} from "../../organisms/Header/Header"
import {items_login} from "./LoginPage-data.json"
import {Footer} from "../../organisms/Footer/Footer";
import {Logo} from "../../atoms/Logo/Logo";
import {LoginForm} from "../../molecules/LoginForm/LoginForm";
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