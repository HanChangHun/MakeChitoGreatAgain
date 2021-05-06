import React, {useState} from 'react';
import StyledStartPage from "./StartPage.styles";
import {Button as MyButton} from "../../1.atoms/Button/Button";
import chito from "../../0.particle/Char/StartChar.png";
import {LoginForm} from "../../2.molecules/LoginForm/LoginForm";
import {SignupForm} from "../../2.molecules/SignupForm/SignupForm";


export const StartPage = () => {
    const [Login, setLogin] = useState(false)
    const [Signup, setSignup] = useState(false)

    const loginButtonClicked = () => {
        setLogin(true)
    }
    const signupButtonClicked = () => {
        setSignup(true)
    }


    return (<StyledStartPage>
        {(!Login && !Signup) ? (
            <div className={"main-block"}>
                <img src={chito} alt={"chito"}/>
                <div className={"buttons"}>
                    <MyButton className={"start-btn"} label={"Start Game"} onClick={loginButtonClicked}/>
                    <MyButton className={"board-btn"} label={"Leader Board"} onClick={signupButtonClicked}/>
                </div>
            </div>
        ) : ((Login) ? (
            <div className={"modal-login"} style={{
                margin: "50vh auto 0",
                transform: "translateY(-50%)",
            }}>
                <LoginForm/>
            </div>
        ) : <div className={"modal-signup"} style={{
            margin: "50vh auto 0",
            transform: "translateY(-50%)",
        }}>
            <SignupForm/>
        </div>)
        }
    </StyledStartPage>);
}