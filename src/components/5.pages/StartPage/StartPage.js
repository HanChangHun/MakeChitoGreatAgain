import React from 'react';
import StyledStartPage from "./StartPage.styles";
import Button from "../../1.atoms/Button/Button";
import chito from "../../0.particle/Char/StartChar.png";

export const StartPage = () => {
    return (<StyledStartPage>
        <div className={"main-block"}>
            <img src={chito} />
            <div className={"buttons"}>
                <Button className={"start-btn"} label={"Start Game"}/>
                <Button className={"board-btn"} label={"Leader Board"}/>
            </div>
        </div>
    </StyledStartPage>);
};

StartPage.propTypes = {};

StartPage.defaultProps = {};
