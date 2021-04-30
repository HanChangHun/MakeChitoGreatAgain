import React from 'react';
import StyledSignupForm from "./SignupForm.styles";
import {LinkedText, Text} from "../../1.atoms/Text/Text";
import {InputText} from "../../1.atoms/InputText/InputText";
import Button from "../../1.atoms/Button/Button";
import {Shape} from "../../1.atoms/Shape/Shape";

export const SignupForm = () => {
    return (<StyledSignupForm>
        <div className={"inner-form"}>
            <Text text={"Signup"} weight={700} size={"80px"}/>
            <br/>
            <Text text={"ID"} weight={700} size={"48px"}/>
            <InputText placeholder={""}/>
            <Text text={"Password"} weight={700} size={"48px"}/>
            <InputText placeholder={""} type={"password"} />
            <Text text={"Password Confirm"} weight={700} size={"48px"}/>
            <InputText placeholder={""} type={"password"} />
            <Text text={"Email"} weight={700} size={"48px"}/>
            <InputText placeholder={""}/>
            <Button className={"signup"} label={"Sign Up"} variant={"secondary"}/>
        </div>
    </StyledSignupForm>);
};

SignupForm.propTypes = {};

SignupForm.defaultProps = {};
