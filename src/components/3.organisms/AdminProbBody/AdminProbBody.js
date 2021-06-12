import React, {useState} from 'react';
import StyledAdminProbBody from "./AdminProbBody.styles";
import {Text} from "../../1.atoms/Text/Text";
import {Button} from "../../1.atoms/Button/Button";
import {GroupNameEdit} from "../../1.atoms/InputText/GroupNameEdit/GroupNameEdit";
import {FinalProblemInfo} from "../../2.molecules/FinalProblemInfo/FinalProblemInfo";
import {getProblems} from "../../../_actions/admin_action";

export const AdminProbBody = ({gid, g_name}) => {
    let problems = getProblems(gid)
    console.log(problems)
    let problem_comps = []
    for (let i = 0; i < problems.length; i++) {
        problem_comps.push(<FinalProblemInfo variance={"admin"} problem={problems[i]}/>)
    }
    const [problemList, setProblemList] = useState(problem_comps)
    const [groupName, setGroupName] = useState(g_name)

    const onGroupNameHandler = (event) => setGroupName(event.currentTarget.value)

    function getAllData() {
        let groupName = document.querySelector('.group-name').querySelector('input').value;
        let problemList = []

        let problems = document.querySelector('.problems')
        for (let i = 0; i < problems.querySelectorAll('.question').length; i++) {
            let q_body = problems.querySelectorAll('.question')[i]
                .querySelector('textarea')
            let [s1_body, s2_body, s3_body, s4_body] = problems.querySelectorAll('.selects')[i]
                .querySelectorAll('textarea')
            let [ans, hint] = problems.querySelectorAll('.option')[i]
                .querySelectorAll('textarea')
            problemList.push({
                q_body: q_body.innerHTML,
                s1_body: s1_body.innerHTML,
                s2_body: s2_body.innerHTML,
                s3_body: s3_body.innerHTML,
                s4_body: s4_body.innerHTML,
                ans: ans.innerHTML,
                hint: hint.innerHTML,
            })
        }
        console.log({
            "g_name": groupName,
            "problems": problemList
        })
    }

    const addProblem = () => {
        let copy = [...problemList];
        copy = [...copy, <FinalProblemInfo variance={"admin"} problem={{
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

    return (<StyledAdminProbBody>
        <Text text={"Edit Group"} weight={700} size={"36px"}/>
        <br/>
        <Text text={"edit Group Name"} weight={700} size={"30px"}/>
        <div className={"group-name"}>
            <GroupNameEdit value={groupName} onChange={onGroupNameHandler}/>
        </div>
        <br/>
        <Text text={"edit Problems"} weight={700} size={"30px"}/>
        <div className={"problems"}>
            {problemList}
        </div>
        <div className="buttons">
            <Button label={"Add Problem"} variant={"secondary"} onClick={addProblem}/>
            <Button label={"Save Changes"} variant={"secondary"} onClick={getAllData}/>
        </div>
    </StyledAdminProbBody>);
};

AdminProbBody.propTypes = {};

AdminProbBody.defaultProps = {};
