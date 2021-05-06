import React, {useState} from 'react';
import StyledLoginForm from "./LoginForm.styles";
import {LinkedText, Text} from "../../1.atoms/Text/Text";
import {InputText} from "../../1.atoms/InputText/InputText";
import {Button} from "../../1.atoms/Button/Button";
import {Shape} from "../../1.atoms/Shape/Shape";
import axios from "axios";

export const LoginForm = () => {
    const [Id, setId] = useState("")
    const [Passwd, setPasswd] = useState("")

    const onIdHandler = (event) => {
        setId(event.currentTarget.value)
    }

    const onPasswdHandler = (event) => {
        setPasswd(event.currentTarget.value)
    }

    const onLoginHandler = (event) => {
        event.preventDefault();

        let body = {
            username: Id,
            password: Passwd
        }
        console.log(body)

        axios.post('/api/authenticate',null, {params: body})
            .then(response => console.log(response.data))
    }

    return (<StyledLoginForm>
        <div className={"inner-form"}>
            <Text text={"Login"} weight={700} size={"80px"}/>
            <br/>
            <Text text={"ID"} weight={700} size={"48px"}/>
            <InputText placeholder={""} value={Id} onChange={onIdHandler} />
            <Text text={"Password"} weight={700} size={"48px"}/>
            <InputText placeholder={""} type={"Password"} value={Passwd} onChange={onPasswdHandler} />
            <div className={"buttons"}>
                <Button className={"signup"} label={"Sign Up"} variant={"secondary"}/>
                <Button className={"login"} label={"Login"} variant={"secondary"} onClick={onLoginHandler} />
            </div>
            <Shape />
            <LinkedText text={"Forgot ID/Password?"} />
        </div>
    </StyledLoginForm>);
};

LoginForm.propTypes = {};

LoginForm.defaultProps = {};
