import React, {useEffect, useState} from 'react';
import StyledFinalProblemInfo from "./FinalProblemInfo.styles";
import sample_data from './sample_prob_data.json'
import {object} from "prop-types";
import {Text} from "../../1.atoms/Text/Text";
import {ProblemEdit} from "../../1.atoms/InputText/ProblemEdit/ProblemEdit";

export const FinalProblemInfo = ({problem}) => {
    const [qBody, setQBody] = useState(problem.q_body);
    const [s1Body, setS1Body] = useState(problem.s1_body);
    const [s2Body, setS2Body] = useState(problem.s2_body);
    const [s3Body, setS3Body] = useState(problem.s3_body);
    const [s4Body, setS4Body] = useState(problem.s4_body);
    const [ans, setAns] = useState(problem.ans);
    const [hint, setHint] = useState(problem.hint);

    const onQBodyHandler = (event) => setQBody(event.currentTarget.value)
    const onS1BodyHandler = (event) => setS1Body(event.currentTarget.value)
    const onS2BodyHandler = (event) => setS2Body(event.currentTarget.value)
    const onS3BodyHandler = (event) => setS3Body(event.currentTarget.value)
    const onS4BodyHandler = (event) => setS4Body(event.currentTarget.value)
    const onAnsHandler = (event) => setAns(event.currentTarget.value)
    const onHintHandler = (event) => setHint(event.currentTarget.value)

    useEffect(() => {
    }, [qBody, s1Body, s2Body, s3Body, s4Body, ans, hint]);

    return (<StyledFinalProblemInfo>
        <div className="question">
            <Text text={"Q: "} size={"17px"} weight={400}/>
            <ProblemEdit value={qBody} onChange={onQBodyHandler} size={"16px"} weight={400} placeholder={"Input Question Body"} />
        </div>
        <div className="bottom">
            <div className="selects">
                <div>
                    <Text text={"1. "} size={"16px"} weight={400}/>
                    <ProblemEdit value={s1Body} onChange={onS1BodyHandler} placeholder={"Input Select1 Body"} size={"16px"} weight={400}/>
                </div>
                <div>
                    <Text text={"2. "} size={"16px"} weight={400}/>
                    <ProblemEdit value={s2Body} onChange={onS2BodyHandler} placeholder={"Input Select2 Body"} size={"16px"} weight={400}/>
                </div>
                <div>
                    <Text text={"3. "} size={"16px"} weight={400}/>
                    <ProblemEdit value={s3Body} onChange={onS3BodyHandler} placeholder={"Input Select3 Body"} size={"16px"} weight={400}/>
                </div>
                <div>
                    <Text text={"4. "} size={"16px"} weight={400}/>
                    <ProblemEdit value={s4Body} onChange={onS4BodyHandler} placeholder={"Input Select4 Body"} size={"16px"} weight={400}/>
                </div>
            </div>
            <div className="option">
                <div>
                    <Text text={"Answer: "} size={"16px"} weight={400}/>
                    <ProblemEdit rows={1} value={ans} onChange={onAnsHandler} size={"16px"} placeholder={"Input Answer Number"} weight={400}/>
                </div>
                <div>
                    <Text text={"Hint: "} size={"16px"} weight={400}/>
                    <ProblemEdit value={hint} onChange={onHintHandler} size={"16px"} weight={400} placeholder={"Input Hint Body"}/>
                </div>
            </div>
        </div>
    </StyledFinalProblemInfo>);
};

FinalProblemInfo.propTypes = {
    problem: object
};

FinalProblemInfo.defaultProps = {
    problem: sample_data
};
