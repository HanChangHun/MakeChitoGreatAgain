import React, {useEffect, useState} from 'react';
import StyledSignupForm from "./SignupForm.styles";
import {Text} from "../../1.atoms/Text/Text";
import {InputText} from "../../1.atoms/InputText/InputText";
import {Button} from "../../1.atoms/Button/Button";
import axios from "axios";

export const SignupForm = (props) => {

    const [Id, setId] = useState("")
    const [Passwd, setPasswd] = useState("")
    const [PasswdConf, setPasswdConf] = useState("")
    const [Email, setEmail] = useState("")

    const onIdHandler = (event) => {
        setId(event.currentTarget.value)
    }

    const onPasswdHandler = (event) => {
        setPasswd(event.currentTarget.value)
    }

    const onPasswdConfHandler = (event) => {
        setPasswdConf(event.currentTarget.value)
    }
    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value)
    }

    const onSignupHandler = (event) => {
        event.preventDefault();

        let body = {
            username: Id,
            password: Passwd
            // passwordConf: PasswdConf,
            // email: Email,
        }
        console.log(body)

        const req = axios.post('/api/register',null, {params: body})
            .then(response => console.log(response.data))
    }

    return (<StyledSignupForm>
        <div className={"inner-form"}>
            <Text text={"Signup"} weight={700} size={"80px"}/>
            <br/>
            <Text text={"ID"} weight={700} size={"48px"}/>
            <InputText placeholder={""} value={Id} onChange={onIdHandler}/>
            <Text text={"Password"} weight={700} size={"48px"}/>
            <InputText placeholder={""} type={"password"} value={Passwd} onChange={onPasswdHandler} />
            <Text text={"Password Confirm"} weight={700} size={"48px"}/>
            <InputText placeholder={""} type={"password"} value={PasswdConf} onChange={onPasswdConfHandler} />
            <Text text={"Email"} weight={700} size={"48px"}/>
            <InputText placeholder={""} value={Email} onChange={onEmailHandler}/>
            <Button className={"signup"} label={"Sign Up"} variant={"secondary"} onClick={onSignupHandler}/>
        </div>
    </StyledSignupForm>);
};

SignupForm.propTypes = {};

SignupForm.defaultProps = {};
