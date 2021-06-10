import React, {useEffect, useState} from 'react';
import StyledFinalProblemInfo from "./FinalProblemInfo.styles";
import sample_data from './sample_prob_data.json'
import {object} from "prop-types";
import {Text} from "../../1.atoms/Text/Text";
import {ProblemEdit} from "../../1.atoms/InputText/ProblemEdit/ProblemEdit";
import {Button} from "../../1.atoms/Button/Button";
import cookie from "react-cookies";

export const FinalProblemInfo = ({problem, variance, ...props}) => {
    const [deleteClicked, setDeleteClicked] = useState(0);

    const [qBody, setQBody] = useState(problem.q_body);
    const [s1Body, setS1Body] = useState(problem.s1_body);
    const [s2Body, setS2Body] = useState(problem.s2_body);
    const [s3Body, setS3Body] = useState(problem.s3_body);
    const [s4Body, setS4Body] = useState(problem.s4_body);

    const [ans, setAns] = useState(problem.ans);
    const [ans2, setAns2] = useState("");
    const [hint, setHint] = useState(problem.hint);
    const [hint2, setHint2] = useState("");

    const onQBodyHandler = (event) => setQBody(event.currentTarget.value)
    const onS1BodyHandler = (event) => setS1Body(event.currentTarget.value)
    const onS2BodyHandler = (event) => setS2Body(event.currentTarget.value)
    const onS3BodyHandler = (event) => setS3Body(event.currentTarget.value)
    const onS4BodyHandler = (event) => setS4Body(event.currentTarget.value)
    const onAnsHandler = (event) => setAns(event.currentTarget.value)
    const onAns2Handler = (event) => setAns2(event.currentTarget.value)
    const onHintHandler = (event) => setHint(event.currentTarget.value)

    useEffect(() => {
    }, [qBody, s1Body, s2Body, s3Body, s4Body, ans, hint]);

    let questionBody;
    if (variance === "admin") {
        questionBody = (<div className="question">
            <Text text={"Q: "} size={"18px"} weight={400}/>
            <ProblemEdit rows={1} value={qBody} onChange={onQBodyHandler} size={"16px"} weight={400}
                         placeholder={"Input Question Body"}/>
        </div>)
    } else if (variance === "exam") {
        questionBody = (<div className="question">
            <Text text={"Q: " + qBody} size={"18px"} weight={400}/>
        </div>)
    }

    let selectBody = [];
    let sBodies = [s1Body, s2Body, s3Body, s4Body]
    let sHandlers = [onS1BodyHandler, onS2BodyHandler, onS3BodyHandler, onS4BodyHandler]
    let sIndexTexts = ["1. ", "2. ", "3. ", "4. "]
    if (variance === "admin") {
        for (let i = 0; i < sBodies.length; i++) {
            selectBody.push(<div>
                <Text text={sIndexTexts[i]} size={"16px"} weight={400}/>
                <ProblemEdit value={sBodies[i]} onChange={sHandlers[i]} placeholder={"Input Select1 Body"}
                             size={"16px"} weight={400}/>
            </div>)
        }
    } else if (variance === "exam") {
        for (let i = 0; i < sBodies.length; i++) {
            selectBody.push(<div>
                <Text text={sIndexTexts[i] + sBodies[i]} size={"16px"} weight={400}/>
            </div>)
        }
    }

    let ansBody;
    if (variance === "admin") {
        ansBody = (<div>
            <Text text={"Answer: "} size={"16px"} weight={400}/>
            <ProblemEdit rows={1} value={ans} onChange={onAnsHandler} size={"16px"} weight={400}/>
        </div>)
    } else if (variance === "exam") {
        ansBody = (<div>
            <Text text={"Answer: "} size={"16px"} weight={400}/>
            <ProblemEdit rows={1} value={ans2} onChange={onAns2Handler} size={"16px"} weight={400}
                         placeholder={"Input Answer Number"}/>
        </div>)
    }

    let hintBody;
    if (variance === "admin") {
        hintBody = (<div>
            <Text text={"Hint: "} size={"16px"} weight={400}/>
            <ProblemEdit value={hint} onChange={onHintHandler} size={"16px"} weight={400}/>
        </div>)
    } else if (variance === "exam") {
        hintBody = (<div>
            <Text text={"Hint: " + hint2} size={"16px"} weight={400}/>
        </div>)
    }

    let functionBtn;
    if (variance === "admin") {
        functionBtn = (<div>
            <Button label={"Delete Problem"} variant={"admin"} onClick={deleteOnClick}/>
        </div>)
    } else if (variance === "exam") {
        functionBtn = (<div>
            <Button label={"View Hint"} variant={"admin"} onClick={hintOnClick}/>
        </div>)
    }

    function deleteOnClick() {
        setDeleteClicked(1);
    }

    function hintOnClick() {
        if (cookie.load("hint") && cookie.load("hint") > props.usedHint) {
            props.setUsedHint(props.usedHint + 1)
            setHint2(hint);
        }
    }

    if (deleteClicked === 1) {
        return (<></>);
    }

    return (
        <StyledFinalProblemInfo>
            {questionBody}
            <div className="bottom">
                <div className="selects">
                    {selectBody}
                </div>
                <div className="option">
                    {ansBody}
                    {hintBody}
                    {functionBtn}
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
