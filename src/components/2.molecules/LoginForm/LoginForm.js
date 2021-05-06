import React from 'react';
import StyledLoginForm from "./LoginForm.styles";
import {LinkedText, Text} from "../../1.atoms/Text/Text";
import {InputText} from "../../1.atoms/InputText/InputText";
import {Button} from "../../1.atoms/Button/Button";
import {Shape} from "../../1.atoms/Shape/Shape";

export const LoginForm = () => {
    return (<StyledLoginForm>
        <div className={"inner-form"}>
            <Text text={"Login"} weight={700} size={"80px"}/>
            <br/>
            <Text text={"ID"} weight={700} size={"48px"}/>
            <InputText placeholder={""} />
            <Text text={"Password"} weight={700} size={"48px"}/>
            <InputText placeholder={""} type={"Password"}  />
            <div className={"buttons"}>
                <Button className={"signup"} label={"Sign Up"} variant={"secondary"}/>
                <Button className={"login"} label={"Login"} variant={"secondary"}/>
            </div>
            <Shape />
            <LinkedText text={"Forgot ID/Password?"} />
        </div>
    </StyledLoginForm>);
};

LoginForm.propTypes = {};

LoginForm.defaultProps = {};
