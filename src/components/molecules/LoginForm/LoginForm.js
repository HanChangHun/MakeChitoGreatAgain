import React from 'react';

import {InputText} from "../../atoms/InputText/InputText";
import Button from "../../atoms/Button/Button";
import {Shape} from "../../atoms/Shape/Shape";
import {Link} from "../../atoms/Link/Link";
import StyledLoginForm from "./LoginForm.styles";

export const LoginForm = () => {
    return (
        <>
            <StyledLoginForm>
                <div><InputText placeholder={"아이디"}/></div>
                <br/>
                <div><InputText placeholder={"비밀번호"} type={"password"}/></div>
                <br/>
                <br/>
                <div><Button label={"로그인"}/></div>
                <br/>
                <br/>
                <div><Shape/></div>
                <div>
                    <div style={{float: "left"}}><Link label={"아이디/비밀번호 찾기"} /></div>
                    <div style={{float: "right"}}><Link label={"회원 가입"} /></div>
                </div>
            </StyledLoginForm>
        </>
    );
};

LoginForm.propTypes = {};

LoginForm.defaultProps = {};