import React from 'react';
import StyledAdminExamBody from "./AdminExamBody.styles";
import {Text} from "../../1.atoms/Text/Text";
import {Button} from "../../1.atoms/Button/Button";
import {array} from "prop-types";
import {ExamInfo} from "../../2.molecules/ExamInfo/ExamInfo";



export const AdminExamBody = ({exam_info}) => {
    let exams = [];
    let semester = ["1-1", "1-2", "2-1", "2-2", "3-1", "3-2", "4-1", "4-2"]
    for (let i = 0; i < exam_info.length; i++) {
        exams.push(<ExamInfo
            semester={semester[i]}
            g_id={exam_info[i]["gid"]}
            num_probs={exam_info[i]["num_problem"]}
            cut_off={exam_info[i]["cut_off"]}
        />);
    }

    console.log(exam_info)
    function saveChanges() {

    }

    return (<StyledAdminExamBody>
        <Text text={"Set Exams"} weight={700} size={"36px"}/>
        <br/>
        <div className="exams">
            {exams}
        </div>
        <div className="buttons">
            <Button label={"Save Changes"} variant={"secondary"} onClick={saveChanges}/>
        </div>
    </StyledAdminExamBody>);
};

AdminExamBody.propTypes = {
    exam_info:array
};

AdminExamBody.defaultProps = {
};
