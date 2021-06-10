import React from 'react';
import StyledAdminSidebar from "./AdminSidebar.styles";
import {useDispatch} from "react-redux";
import {Text} from "../../1.atoms/Text/Text";
import {toExamSelect, toGroupSelect} from "../../../_actions/admin_action";
import {withRouter} from "react-router-dom";
import {Button} from "../../1.atoms/Button/Button";
import {remove} from "react-cookies";

function AdminSidebar(props) {
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

    const onLogoutHandler = () => {
        remove('token', {path: '/'})
        props.history.push('/')
    }

    return (<StyledAdminSidebar>
        <ul>
            <li><Text text={"Edit Group"} size={"30px"} weight={600} onClick={onEditClicked}/></li>
            <li><Text text={"Set Exam"} size={"30px"} weight={600} onClick={onExamClicked}/></li>
        </ul>
        <Button label={"Logout"} variant={"admin"} onClick={onLogoutHandler}/>
    </StyledAdminSidebar>);
}

AdminSidebar.propTypes = {};

AdminSidebar.defaultProps = {};

export default withRouter(AdminSidebar);