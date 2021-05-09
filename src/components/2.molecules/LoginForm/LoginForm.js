import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {withRouter} from "react-router-dom";
import cookie from 'react-cookies';
import {loginUser} from '../../../_actions/user_action';
import StyledLoginForm from "./LoginForm.styles";
import {LinkedText, Text} from "../../1.atoms/Text/Text";
import {InputText} from "../../1.atoms/InputText/InputText";
import {Button} from "../../1.atoms/Button/Button";
import {Shape} from "../../1.atoms/Shape/Shape";
import {SignupForm} from "../SignupForm/SignupForm";
import StartPage from "../../5.pages/StartPage/StartPage";

function LoginForm(props) {
    const dispatch = useDispatch();

    const [Id, setId] = useState("")
    const [Passwd, setPasswd] = useState("")
    const [Signup, setSignup] = useState(false);
    const [Close, setClose] = useState(false);

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
        dispatch(loginUser(body))
            .then(response => {
                if (response.payload.token) {
                    console.log(response.payload)
                    cookie.save("token", response.payload.token)
                    props.history.push('/main')
                } else {
                    alert('Error˝')
                }
            })
    }

    const onSignupHandler = (event) => {
        event.preventDefault();
        setSignup(true)
    }
    const onCloseHandler = (event) => {
        event.preventDefault();
        setClose(true)
    }

    if (!Signup && !Close) {
        return (<StyledLoginForm>
            <div className={"inner-form"}>
                <span className="close" onClick={onCloseHandler}>
                  &times;
                </span>
                <Text text={"Login"} weight={700} size={"80px"}/>
                <br/>
                <Text text={"ID"} weight={700} size={"48px"}/>
                <InputText placeholder={""} value={Id} onChange={onIdHandler}/>
                <Text text={"Password"} weight={700} size={"48px"}/>
                <InputText placeholder={""} type={"Password"} value={Passwd} onChange={onPasswdHandler}/>
                <div className={"buttons"}>
                    <Button className={"signup"} label={"Sign Up"} variant={"secondary"} onClick={onSignupHandler}/>
                    <Button className={"login"} label={"Login"} variant={"secondary"} onClick={onLoginHandler}/>
                </div>
                <Shape/>
                <LinkedText text={"Forgot ID/Password?"}/>
            </div>
        </StyledLoginForm>);
    } else if (Close)
        return (<StartPage/>)
    else
        return (<SignupForm/>);
}

LoginForm.propTypes = {};

LoginForm.defaultProps = {};

export default withRouter(LoginForm);