import React, {useState} from 'react';
import StyledProblemGroup from "./ProblemGroup.styles";
import {Text} from "../../1.atoms/Text/Text";
import {Button} from "../../1.atoms/Button/Button";

export const ProblemGroup = ({g_name, num_prob}) => {
    const [deleteClicked, setDeleteClicked] = useState(0);
    function deleteGroup() {
        setDeleteClicked(1);
    }
    if (deleteClicked === 1){
        return (<></>);
    }
    return (<StyledProblemGroup>
        <div className={"group-info"}>
            <Text text={g_name} weight={600} size={"24px"}/>
            <br/>
            <Text text={"Number of Problems: " + num_prob} weight={400} size={"20px"}/>
        </div>
        <div>
            <Button label={"✏️"} variant={"admin"}/>
            <Button label={"🗑️"} variant={"admin"} onClick={deleteGroup}/>
        </div>
    </StyledProblemGroup>);
};

ProblemGroup.propTypes = {};

ProblemGroup.defaultProps = {};
