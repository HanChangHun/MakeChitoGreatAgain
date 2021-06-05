import React from 'react';
import StyledAdminSidebar from "./AdminSidebar.styles";
import {useDispatch} from "react-redux";
import {Text} from "../../1.atoms/Text/Text";
import {toExamSelect, toGroupSelect} from "../../../_actions/admin_action";

export const AdminSidebar = (props) => {
    const dispatch = useDispatch();

    const onEditClicked = (event) => {
        event.preventDefault();
        dispatch(toGroupSelect())
        props.history.push('/admin')
    }

    const onExamClicked = (event) => {
        event.preventDefault();
        dispatch(toExamSelect())
        props.history.push('/admin')
    }

    return (<StyledAdminSidebar>
        <ul>
            <li><Text text={"Edit Group"} size={"30px"} weight={600} onClick={onEditClicked}/></li>
            <li><Text text={"Set Exam"} size={"30px"} weight={600} onClick={onExamClicked}/></li>
        </ul>
    </StyledAdminSidebar>);
};

AdminSidebar.propTypes = {};

AdminSidebar.defaultProps = {};
