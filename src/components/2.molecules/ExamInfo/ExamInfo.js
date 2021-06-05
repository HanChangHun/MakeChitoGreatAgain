import React, {useState} from 'react';
import StyledExamInfo from "./ExamInfo.styles";
import {Text} from "../../1.atoms/Text/Text";
import {array, number, string} from "prop-types";
import {GroupNameEdit} from "../../1.atoms/InputText/GroupNameEdit/GroupNameEdit";
import {CutOff} from "./CutOff/CutOff";


export const ExamInfo = ({semester, g_name, num_probs, cut_off, ...props}) => {
    const [groupName, setGroupName] = useState(g_name)
    const [numProbs, setNumProbs] = useState(num_probs)


    const onGroupNameHandler = (event) => setGroupName(event.currentTarget.value)
    const onNumProbsHandler = (event) => setNumProbs(event.currentTarget.value)

    return (<StyledExamInfo>
        <Text text={semester} size={"30px"}/>
        <div className={"exam-body"}>
            <div className={"group"}>
                <Text text={"Group Name"} size={"24px"} weight={400}/>
                <GroupNameEdit width={"500px"} weight={400} size={"20px"} value={groupName}
                               onChange={onGroupNameHandler}/>
            </div>
            <div className="num-probs">
                <Text text={"Number of Problem"} size={"24px"} weight={400}/>
                <GroupNameEdit width={"100px"} weight={400} size={"20px"} value={numProbs}
                               placeholder={"Input Number of Problems"} onChange={onNumProbsHandler}/>
            </div>
            <div className="cut-off">
                <Text text={"Grade Cut-off"} size={"24px"} weight={400}/>
                <CutOff cut_off={cut_off}/>
            </div>
        </div>
    </StyledExamInfo>);
};

ExamInfo.propTypes = {
    semester: string,
    g_name: string,
    num_probs: number,
    cutOff: array,
};

ExamInfo.defaultProps = {
    semester: "1-1",
    g_name: "Software Development Life Cycle (SDLC)",
    num_probs: 23,
    cutOff: [90, 80, 70, 60, 50, 40]
};
