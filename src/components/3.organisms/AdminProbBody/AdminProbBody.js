import React, {useState} from 'react';
import StyledAdminGroupBody from "./AdminProbBody.styles";
import {Text} from "../../1.atoms/Text/Text";
import {FinalProblemInfo} from "../../2.molecules/FinalProblemInfo/FinalProblemInfo";
import sample_data from './sample_prob_data.json'
import {array} from "prop-types";
import {Button} from "../../1.atoms/Button/Button";
import {ProblemEdit} from "../../1.atoms/InputText/ProblemEdit/ProblemEdit";
import {InputText} from "../../1.atoms/InputText/InputText";
import {GroupNameEdit} from "../../1.atoms/InputText/GroupNameEdit/GroupNameEdit";

export const AdminProbBody = ({g_name, problems}) => {
    let problem_comps = []
    for (let i = 0; i < problems.length; i++) {
        problem_comps.push(<FinalProblemInfo problem={problems[i]}/>)
    }
    const [problemList, setProblemList] = useState(problem_comps)
    const [groupName, setGroupName] = useState(g_name)

    const onGroupNameHandler = (event) => setGroupName(event.currentTarget.value)

    function getAllData() {
        let allData = []
        let problems = document.querySelector('.problems')
        for (let i = 0; i < problems.querySelectorAll('.question').length; i++) {
            let q_body = problems.querySelectorAll('.question')[i]
                .querySelector('textarea')
            let [s1_body, s2_body, s3_body, s4_body] = problems.querySelectorAll('.selects')[i]
                .querySelectorAll('textarea')
            let [ans, hint] = problems.querySelectorAll('.option')[i]
                .querySelectorAll('textarea')
            allData.push({
                q_body: q_body.innerHTML,
                s1_body: s1_body.innerHTML,
                s2_body: s2_body.innerHTML,
                s3_body: s3_body.innerHTML,
                s4_body: s4_body.innerHTML,
                ans: ans.innerHTML,
                hint: hint.innerHTML,
            })
        }
        console.log(allData)
    }

    const addProblem = () => {
        let copy = [...problemList];
        copy = [...copy, <FinalProblemInfo problem={{
            q_body: "",
            s1_body: "",
            s2_body: "",
            s3_body: "",
            s4_body: "",
            ans: "",
            hint: "",
        }}/>];
        setProblemList(copy);
    }

    return (<StyledAdminGroupBody>
        <Text text={"Edit Group"} weight={700} size={"36px"}/>
        <Text text={"edit Group Name"} weight={700} size={"30px"}/>
        <GroupNameEdit value={groupName} onChange={onGroupNameHandler} />
        <br/>
        <Text text={"edit Problems"} weight={700} size={"30px"}/>
        <div className={"problems"}>
            {problemList}
        </div>
        <div className="buttons">
            <Button label={"Add Problem"} variant={"secondary"} onClick={addProblem}/>
            <Button label={"Save Changes"} variant={"secondary"} onClick={getAllData}/>
        </div>
    </StyledAdminGroupBody>);
};

AdminProbBody.propTypes = {
    problems: array
};

AdminProbBody.defaultProps = {
    problems: sample_data.problems
};
