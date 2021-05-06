import React from 'react';
import StyledStartPage from "./MainPage.styles";
import {Button} from "../../1.atoms/Button/Button";
import mainChito from "../../0.particle/Char/MainChar.png";
import {Text} from "../../1.atoms/Text/Text";

export const MainPage = () => {
    let timePoint = 10;
    let grade = 0.0;
    let int = 10;
    let health = 10;
    let speech = 10;

    return (<StyledStartPage>
        <div className={"main-block"}>
            <img src={mainChito}/>
            <div className={"buttons1"}>
                <Button className={"study-btn"} label={"Study"} variant={"secondary"}/>
                <Button className={"workout-btn"} label={"Workout"} variant={"secondary"}/>
                <Button className={"interview-btn"} label={"Prepare Interview"} variant={"secondary"}/>
            </div>
            <div className={"buttons2"}>
                <Button className={"start-btn"} label={"Midterm Exam"} variant={"secondary"}/>
                <Button className={"board-btn"} label={"Final Exam"} variant={"secondary"}/>
            </div>
            <div className={"status"}>
                <Text text={"Time Point: " + timePoint} size={"48px"} weight={700} color={"white"}/>
                <Text text={"Grade: " + grade} size={"48px"} weight={700} color={"white"}/>
                <Text text={"Intelligence: " + int} size={"48px"} weight={700} color={"white"}/>
                <Text text={"Health: " + health} size={"48px"} weight={700} color={"white"}/>
                <Text text={"Speech: " + speech} size={"48px"} weight={700} color={"white"}/>
            </div>
        </div>
    </StyledStartPage>);

};

MainPage.propTypes = {};

MainPage.defaultProps = {};
