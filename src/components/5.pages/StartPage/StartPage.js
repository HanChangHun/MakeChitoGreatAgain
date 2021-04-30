import React from 'react';
import StyledStartPage from "./StartPage.styles";
import Button from "../../1.atoms/Button/Button";
import chito from "../../0.particle/Char/StartChar.png";
import StartPageBg from "../../0.particle/BgImages/StartPageBg.png"

export const StartPage = () => {
    return (<StyledStartPage style={{
        background: `url(${StartPageBg}) no-repeat center fixed`,
        height: "100vh",
    }}>
        <div className={"main-block"}>
            <img src={chito} style={{
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
            }}/>
            <div className={"buttons"} style={{}}>
                <Button className={"start-btn"} label={"Start Game"}/>
                <Button className={"board-btn"} label={"Leader Board"}/>
            </div>
        </div>
    </StyledStartPage>);
};

StartPage.propTypes = {};

StartPage.defaultProps = {};
