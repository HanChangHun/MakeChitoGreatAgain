import React, {useState} from 'react';
import StyledStartPage from "./MainPage.styles";
import {Button} from "../../1.atoms/Button/Button";
import mainChito from "../../0.particle/Char/MainChar.png";
import {Text} from "../../1.atoms/Text/Text";
import {Link, withRouter} from "react-router-dom";
import StudyModalBtn from "../../2.molecules/StudyModalBtn/StudyModalBtn";
import WorkoutModalBtn from "../../2.molecules/WorkoutModalBtn/WorkoutModalBtn";
import InterviewModalBtn from "../../2.molecules/InterviewModalBtn/InterviewModalBtn";


function MainPage(props) {
    const [Year, setYear] = useState(1);
    const [Semester, setSemester] = useState(1);
    const [Week, setWeek] = useState(1);
    const [Grade, setGrade] = useState(null);
    const [Int, setInt] = useState(10);
    const [Health, setHealth] = useState(10);
    const [Speech, setSpeech] = useState(10);
    const [ActiveBtn, setActiveBtn] = useState(0);

    let passParams = {
        Year: Year, setYear: setYear,
        Semester: Semester, setSemester: setSemester,
        Week: Week, setWeek: setWeek,
        Grade: Grade, setGrade: setGrade,
        Int: Int, setInt: setInt,
        Health: Health, setHealth: setHealth,
        Speech: Speech, setSpeech: setSpeech,
        ActiveBtn: ActiveBtn, setActiveBtn: setActiveBtn
    }

    function onLogoutHandler() {
        props.history.push("/");
    }


    return (<StyledStartPage>
        <div className={"main-block"}>
            <div className="logout">
                <Button label={"Logout"} variant={"secondary"} onClick={onLogoutHandler}/>
            </div>
            <img src={mainChito} alt={"chito"}/>
            <div className={(ActiveBtn === 0) ? "buttons1" : "buttons1 disabled"}>
                <StudyModalBtn params={passParams}/>
                <WorkoutModalBtn params={passParams}/>
                <InterviewModalBtn params={passParams}/>
            </div>
            <div className={"buttons2"}>
                <Link to={'/midterm'}  onClick={(ActiveBtn===0) ? (event) => event.preventDefault() : null}>
                    <Button className={(ActiveBtn === 1) ? "midterm-btn" : "midterm-btn disabled"}
                            label={"Midterm Exam"} variant={"secondary"}/>
                </Link>
                <Link to={'/final'} onClick={(ActiveBtn === 0) ? (event) => event.preventDefault() : null}>
                    <Button className={(ActiveBtn === 2) ? "final-btn" : "final-btn disabled"} label={"Final Exam"}
                            variant={"secondary"}/>
                </Link>
            </div>
            <div className={"status"}>
                <Text text={"Semester " + Year + " - " + Semester} size={"48px"} weight={700} color={"white"}/>
                <Text text={"Week: " + Week} size={"36px"} weight={700} color={"white"}/>
                <Text text={"Grade: " + Grade} size={"48px"} weight={700} color={"white"}/>
                <Text text={"Intelligence: " + Int} size={"48px"} weight={700} color={"white"}/>
                <Text text={"Health: " + Health} size={"48px"} weight={700} color={"white"}/>
                <Text text={"Speech: " + Speech} size={"48px"} weight={700} color={"white"}/>
            </div>
        </div>
    </StyledStartPage>);
}

MainPage.propTypes = {};

MainPage.defaultProps = {};

export default withRouter(MainPage);