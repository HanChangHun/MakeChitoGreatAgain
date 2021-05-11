import React from 'react';
import StyledStartPage from "./MainPage.styles";
import {Button} from "../../1.atoms/Button/Button";
import mainChito from "../../0.particle/Char/MainChar.png";
import {Text} from "../../1.atoms/Text/Text";
import {withRouter} from "react-router-dom";
import StudyModalBtn from "../../2.molecules/StudyModalBtn/StudyModalBtn";
import WorkoutModalBtn from "../../2.molecules/WorkoutModalBtn/WorkoutModalBtn";
import InterviewModalBtn from "../../2.molecules/InterviewModalBtn/InterviewModalBtn";


function MainPage(props) {
    let semester = "1-1";
    let timePoint = 10;
    let grade = 0.0;
    let int = 10;
    let health = 10;
    let speech = 10;

    function onLogoutHandler() {
        props.history.push("/");
    }

    return (<StyledStartPage>
        <div className={"main-block"}>
            <div className="logout">
                <Button label={"Logout"} variant={"secondary"} onClick={onLogoutHandler} />
            </div>
            <img src={mainChito} alt={"chito"} />
            <div className={"buttons1"}>
                <StudyModalBtn />
                <WorkoutModalBtn />
                <InterviewModalBtn />
            </div>
            <div className={"buttons2"}>
                <Button className={"start-btn"} label={"Midterm Exam"} variant={"secondary"}/>
                <Button className={"board-btn"} label={"Final Exam"} variant={"secondary"}/>
            </div>
            <div className={"status"}>
                <Text text={"Semester - " + semester} size={"48px"} weight={700} color={"white"}/>
                <Text text={"Time Point: " + timePoint} size={"48px"} weight={700} color={"white"}/>
                <Text text={"Grade: " + grade} size={"48px"} weight={700} color={"white"}/>
                <Text text={"Intelligence: " + int} size={"48px"} weight={700} color={"white"}/>
                <Text text={"Health: " + health} size={"48px"} weight={700} color={"white"}/>
                <Text text={"Speech: " + speech} size={"48px"} weight={700} color={"white"}/>
            </div>
        </div>
    </StyledStartPage>);
}

MainPage.propTypes = {};

MainPage.defaultProps = {};

export default withRouter(MainPage);