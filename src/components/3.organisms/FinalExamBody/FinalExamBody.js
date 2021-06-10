import React, {useState} from 'react';
import StyledAdminProbBody from "./FinalExamBody.styles";
import {Text} from "../../1.atoms/Text/Text";
import {Button} from "../../1.atoms/Button/Button";
import {FinalProblemInfo} from "../../2.molecules/FinalProblemInfo/FinalProblemInfo";
import {array} from "prop-types";
import cookie from "react-cookies";
import {getExamInfo} from "../../../_actions/exam_action";
import Modal from "react-modal";
import {finalEnd} from "../../../_actions/ability_action";
import {useDispatch} from "react-redux";
import {withRouter} from "react-router-dom";

const endModalStyles = {
    content: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '1020px',
        height: '692px',
        fontSize: '50px',
    }
};

function FinalExamBody({g_name, problems, answers, ...props}) {
    const dispatch = useDispatch();
    const [Hint, setHint] = useState(cookie.load("hint"));
    const [score, setScore] = useState(null);
    const [grade, setGrade] = useState(null);
    const [usedHint, setUsedHint] = useState(null);
    const [OpenEndModal, setOpenEndModal] = useState(false);

    let problem_comps = []
    for (let i = 0; i < problems.length; i++) {
        problem_comps.push(<FinalProblemInfo variance={"exam"} problem={problems[i]}/>)
    }

    function scoreGrade(score) {
        let cutOff = getExamInfo(parseInt(cookie.load('semester'))).cut_off
        if (score >= cutOff[0]) return 4.5
        else if (score >= cutOff[1]) return 4.0
        else if (score >= cutOff[2]) return 3.5
        else if (score >= cutOff[3]) return 3.0
        else if (score >= cutOff[4]) return 2.5
        else if (score >= cutOff[5]) return 2.0
        else return 0.0
    }

    function submit() {
        let userAnswers = []
        let options = document.querySelectorAll('.option')
        for (let i = 0; i < options.length; i++) {
            let ans = options[i].querySelector('textarea')

            if (ans.innerHTML !== "") {
                userAnswers.push(parseInt(ans.innerHTML))
            } else {
                userAnswers.push(0)
            }
        }
        let num_correct = 0;
        for (let i = 0; i < userAnswers.length; i++) {
            if (userAnswers[i] === answers[i]) {
                num_correct = num_correct + 1
            }
        }
        setScore(num_correct / userAnswers.length * 100)
        setGrade(scoreGrade(num_correct / userAnswers.length * 100))
        setOpenEndModal(true)

    }

    function toMain(e) {
        e.preventDefault()
        props.history.push('/main')

        dispatch(finalEnd(cookie.load("token"), grade, 1)).then(response => {
            console.log(response)
        })
    }

    return (<StyledAdminProbBody>
        <Text text={"Final Exam"} weight={700} size={"50px"}/>
        <div className={"body-top"}>
            <Text text={"Exam Name"} weight={700} size={"30px"}/>
            <Text text={"# hint: " + Hint} weight={400} size={"24px"}/>
        </div>
        <div className={"group-name"}>
            <Text text={g_name} weight={600} size={"24px"}/>
        </div>
        <div className={"problems-body"}>
            {problem_comps}
        </div>
        <div className="buttons">
            <Button label={"Submit"} variant={"secondary"} onClick={submit}/>
        </div>
        <Modal
            isOpen={OpenEndModal}
            ariaHideApp={false}
            style={endModalStyles}>
            <p style={{
                textAlign: "center"
            }}>Your Score: {score}</p>
            <p style={{
                textAlign: "center"
            }}>Grade: {grade}</p>
            <Button onClick={toMain} label={"OK"}/>
        </Modal>

    </StyledAdminProbBody>);
};

FinalExamBody.propTypes = {
    g_name: String,
    problems: array
};

FinalExamBody.defaultProps = {};

export default withRouter(FinalExamBody)