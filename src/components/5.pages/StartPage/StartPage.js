import React from 'react';
import StyledStartPage from "./StartPage.styles";
import {Button as MyButton} from "../../1.atoms/Button/Button";
import chito from "../../0.particle/Char/StartChar.png";
import {Dialog, DialogAction, DialogTitle,DiaglogContent, TextField, Button, withStyles} from '@material-ui/core';
import {LoginForm} from "../../2.molecules/LoginForm/LoginForm";


export const StartPage = () => {
    return (<StyledStartPage>
        <div className={"main-block"}>
            <img src={chito} />
            <div className={"buttons"}>
                <MyButton className={"start-btn"} label={"Start Game"}/>
                <MyButton className={"board-btn"} label={"Leader Board"}/>
            </div>
            <div className={"modal-login"} style={{
                margin: "50vh auto 0",
                transform: "translateY(-50%)",
                backgroundColor:"black",
                border:"1px solid black"
            }}><LoginForm />
            </div>
        </div>
    </StyledStartPage>);
};

StartPage.propTypes = {};

StartPage.defaultProps = {};
