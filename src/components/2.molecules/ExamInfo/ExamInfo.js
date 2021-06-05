import React, {useState} from 'react';
import StyledExamInfo from "./ExamInfo.styles";
import {Text} from "../../1.atoms/Text/Text";
import {array, number, string} from "prop-types";
import {CutOff} from "./CutOff/CutOff";


export const ExamInfo = ({semester, g_id, num_probs, cut_off}) => {
    const [selectedGroup, setSelectedGroup] = useState("" + g_id)
    const [numProbs, setNumProbs] = useState(num_probs)

    const onSelectGroupHandler = (event) => setSelectedGroup(event.currentTarget.value)
    const onNumProbsHandler = (event) => setNumProbs(event.currentTarget.value)

    let groupOptions = [
        "Software Development Life Cycle (SDLC)",
        "SDLC models",
        "Scrum",
        "Game Development Roles And Process",
        "Object-Oriented Analysis(OOA)",
        "Object-Oriented Design(OOD)",
        "Design Pattern 1",
        "Design Pattern 2"
    ]

    return (<StyledExamInfo>
        <Text text={semester} size={"30px"}/>
        <div className={"exam-body"}>
            <div className={"group"}>
                <Text text={"Group Name"} size={"24px"} weight={400}/>
                <select value={selectedGroup} id={"group"} onChange={onSelectGroupHandler}>
                    <option value="1">{groupOptions[0]}</option>
                    <option value="2">{groupOptions[1]}</option>
                    <option value="3">{groupOptions[2]}</option>
                    <option value="4">{groupOptions[3]}</option>
                    <option value="5">{groupOptions[4]}</option>
                    <option value="6">{groupOptions[5]}</option>
                    <option value="7">{groupOptions[6]}</option>
                    <option value="8">{groupOptions[7]}</option>
                </select>
            </div>
            <div className="num-probs">
                <Text text={"Number of Problem"} size={"24px"} weight={400}/>
                <input className={"num-prob"} type={"number"} value={numProbs} onChange={onNumProbsHandler}/>
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
    g_id: string,
    num_probs: number,
    cutOff: array,
};

ExamInfo.defaultProps = {
    semester: "1-1",
    g_id: "1",
    num_probs: 23,
    cutOff: [90, 80, 70, 60, 50, 40]
};
