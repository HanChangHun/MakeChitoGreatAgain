import React, {useState} from 'react';
import StyledProblemGroup from "./ProblemGroup.styles";
import {Text} from "../../1.atoms/Text/Text";
import {Button} from "../../1.atoms/Button/Button";
import {withRouter} from "react-router-dom";
import {useDispatch} from "react-redux";
import {toEditProblem} from "../../../_actions/admin_action";

function ProblemGroup(props, {g_name, num_prob}) {
    const dispatch = useDispatch();

    const [deleteClicked, setDeleteClicked] = useState(0);

    function deleteGroup() {
        setDeleteClicked(1);
    }

    if (deleteClicked === 1) {
        return (<></>);
    }

    const editGroup = (event) => {
        event.preventDefault();
        dispatch(toEditProblem())
        props.history.push('/admin')
    }

    return (<StyledProblemGroup>
        <div className={"group-info"}>
            <Text text={g_name} weight={600} size={"24px"}/>
            <br/>
            <Text text={"Number of Problems: " + num_prob} weight={400} size={"20px"}/>
        </div>
        <div>
            <Button label={"✏️"} variant={"admin"} onClick={editGroup}/>
            <Button label={"🗑️"} variant={"admin"} onClick={deleteGroup}/>
        </div>
    </StyledProblemGroup>);
};

ProblemGroup.propTypes = {};

ProblemGroup.defaultProps = {};

export default withRouter(ProblemGroup);