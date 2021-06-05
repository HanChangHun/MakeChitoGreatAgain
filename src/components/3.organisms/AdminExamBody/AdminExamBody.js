import React, {useState} from 'react';
import StyledAdminExamBody from "./AdminExamBody.styles";
import {Text} from "../../1.atoms/Text/Text";
import {Button} from "../../1.atoms/Button/Button";
import StyledAdminGroupBody from "../AdminProbBody/AdminProbBody.styles";

export const AdminExamBody = ({}) => {
    function saveChanges() {

    }

    return (<StyledAdminExamBody>
        <Text text={"Set Exams"} weight={700} size={"36px"}/>
        <br/>
        <div className="buttons">
            <Button label={"Save Changes"} variant={"secondary"} onClick={saveChanges}/>
        </div>
    </StyledAdminExamBody>);
};

AdminExamBody.propTypes = {};

AdminExamBody.defaultProps = {};
