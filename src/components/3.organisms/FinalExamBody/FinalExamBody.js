import React from 'react';
import StyledAdminProbBody from "./FinalExamBody.styles";
import {Text} from "../../1.atoms/Text/Text";
import {Button} from "../../1.atoms/Button/Button";
import {FinalProblemInfo} from "../../2.molecules/FinalProblemInfo/FinalProblemInfo";
import {array} from "prop-types";

export const FinalExamBody = ({g_name, problems}) => {
    let problem_comps = []
    for (let i = 0; i < problems.length; i++) {
        problem_comps.push(<FinalProblemInfo variance={"exam"} problem={problems[i]}/>)
    }

    function getAllData() {
        let answerList = []

        let problems = document.querySelector('.problems')
        for (let i = 0; i < problems.querySelectorAll('.question').length; i++) {
            let [ans, hint] = problems.querySelectorAll('.option')[i]
                .querySelectorAll('textarea')
            answerList.push({
                ans: ans.innerHTML,
            })
        }
        console.log({
            "problems": answerList
        })
    }

    return (<StyledAdminProbBody>
        <Text text={"Final Exam"} weight={700} size={"50px"}/>
        <Text text={"Exam Name"} weight={700} size={"30px"}/>
        <div className={"group-name"}>
            <Text text={g_name} weight={600} size={"24px"}/>
        </div>
        <div className={"problems"}>
            {problem_comps}
        </div>
        <div className="buttons">
            <Button label={"Submit"} variant={"secondary"} onClick={getAllData}/>
        </div>
    </StyledAdminProbBody>);
};

FinalExamBody.propTypes = {
    g_name: String,
    problems: array
};

FinalExamBody.defaultProps = {};
