import React, {useState} from 'react';
import {withRouter} from "react-router-dom";
import StyledFinalPage from "./AdminPage.styles";
import {AdminHeader} from "../../2.molecules/AdminHeader/AdminHeader";
import {AdminSidebar} from "../../2.molecules/AdminSidebar/AdminSidebar";
import {AdminGroupBody} from "../../3.organisms/AdminGroupBody/AdminGroupBody";
import {AdminProbBody} from "../../3.organisms/AdminProbBody/AdminProbBody";
import {AdminExamBody} from "../../3.organisms/AdminExamBody/AdminExamBody";
import {array, number} from "prop-types";
import sample_group_data from './sample_groups_data.json'
import sample_prob_data from './sample_prob_data.json'
import sample_exam_data from './sample_exam_info.json'
import {useDispatch} from "react-redux";
import {getFlag} from "../../../_actions/admin_action";

function AdminPage({flag, groups, problems, exam_info}) {
    const dispatch = useDispatch();

    const [gName, setGName] = useState("Software Development Life Cycle (SDLC)")

    if (getFlag().payload === 0) {
        return (<StyledFinalPage>
            <div className={"main-block"}>
                <AdminHeader/>
                <div className={"main-body"}>
                    <AdminSidebar/>
                    <AdminGroupBody groups={groups}/>
                </div>
            </div>
        </StyledFinalPage>);
    } else if (getFlag().payload === 1) {
        return (<StyledFinalPage>
            <div className={"main-block"}>
                <AdminHeader/>
                <div className={"main-body"}>
                    <AdminSidebar/>
                    <AdminProbBody g_name={gName} problems={problems}/>
                </div>
            </div>
        </StyledFinalPage>);
    } else if (getFlag().payload === 2) {
        return (<StyledFinalPage>
            <div className={"main-block"}>
                <AdminHeader/>
                <div className={"main-body"}>
                    <AdminSidebar/>
                    <AdminExamBody exam_info={exam_info}/>
                </div>
            </div>
        </StyledFinalPage>);
    }
}

AdminPage.propTypes = {
    flag: number,
    groups: array,
    problems: array,
    exam_info: array
};

AdminPage.defaultProps = {
    flag: 0,
    groups: sample_group_data.groups,
    problems: sample_prob_data.problems,
    exam_info: sample_exam_data
};

export default withRouter(AdminPage);