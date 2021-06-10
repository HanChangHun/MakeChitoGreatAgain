import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {registerUser} from '../../../_actions/user_action';
import StyledSignupForm from "./SignupForm.styles";
import {Text} from "../../1.atoms/Text/Text";
import {InputText} from "../../1.atoms/InputText/InputText";
import {Button} from "../../1.atoms/Button/Button";
import LoginForm from "../LoginForm/LoginForm";

export const SignupForm = () => {
    const dispatch = useDispatch();

    const [Id, setId] = useState("")
    const [Passwd, setPasswd] = useState("")
    const [PasswdConf, setPasswdConf] = useState("")
    const [Nickname, setNickname] = useState("")
    const [Close, setClose] = useState(false);

    const onIdHandler = (event) => {
        setId(event.currentTarget.value)
    }

    const onPasswdHandler = (event) => {
        setPasswd(event.currentTarget.value)
    }

    const onPasswdConfHandler = (event) => {
        setPasswdConf(event.currentTarget.value)
    }
    const onNicknameHandler = (event) => {
        setNickname(event.currentTarget.value)
    }

    const onSignupHandler = (event) => {
        event.preventDefault();

        if (Passwd !== PasswdConf) {
            return alert('Password and Password Configuration are not same.')
        }

        let body = {
            username: Id,
            password: Passwd,
            nickname: Nickname,
        }
        dispatch(registerUser(body))
            .then(response => {
                if (response.payload.authorities) {
                    setClose(true)
                } else {
                    throw Error("error")
                }
            }).catch(() => alert('Duplicate ID.'))
    }
    const onCloseHandler = (event) => {
        event.preventDefault();
        setClose(true)
    }
    if (!Close) {
        return (<StyledSignupForm>
            <div className={"inner-form"}>
                <span className="close" onClick={onCloseHandler}>
                  &times;
                </span>
                <Text text={"Signup"} weight={700} size={"80px"}/>
                <br/>
                <Text text={"ID"} weight={700} size={"48px"}/>
                <InputText placeholder={""} value={Id} onChange={onIdHandler}/>
                <Text text={"Password"} weight={700} size={"48px"}/>
                <InputText placeholder={""} type={"password"} value={Passwd} onChange={onPasswdHandler}/>
                <Text text={"Password Confirm"} weight={700} size={"48px"}/>
                <InputText placeholder={""} type={"password"} value={PasswdConf} onChange={onPasswdConfHandler}/>
                <Text text={"Nickname"} weight={700} size={"48px"}/>
                <InputText placeholder={""} value={Nickname} onChange={onNicknameHandler}/>
                <Button className={"signup"} label={"Sign Up"} variant={"secondary"} onClick={onSignupHandler}/>
            </div>
        </StyledSignupForm>);
    } else
        return (<LoginForm/>);
};

SignupForm.propTypes = {};

SignupForm.defaultProps = {};
