import React, {useState} from 'react';
import StyledStartPage from "./StartPage.styles";
import {Button as MyButton} from "../../1.atoms/Button/Button";
import chito from "../../0.particle/Char/StartChar.png";
import {LoginForm} from "../../2.molecules/LoginForm/LoginForm";


export const StartPage = () => {
    const [Login, setLogin] = useState(false)

    const loginButtonClicked = () => {
        setLogin(true)
    }

    if (Login) {
        return (<StyledStartPage>
            <div className={"main-block"}>
                <div className={"modal-login"}>
                    <LoginForm/>
                </div>
            </div>
        </StyledStartPage>)
    } else {
        return (<StyledStartPage>
            <div className={"main-block"}>
                <img src={chito} alt={"chito"}/>
                <div className={"start-buttons"}>
                    <MyButton className={"start-btn"} label={"Start Game"} onClick={loginButtonClicked}/>
                    <MyButton className={"board-btn"} label={"Leader Board"}/>
                </div>
            </div>
        </StyledStartPage>)
    }
}