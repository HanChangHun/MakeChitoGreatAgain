import React, {useState} from 'react';
import {withRouter} from "react-router-dom";
import StyledFinalPage from "./AdminPage.styles";
import {AdminHeader} from "../../2.molecules/AdminHeader/AdminHeader";
import {AdminSidebar} from "../../2.molecules/AdminSidebar/AdminSidebar";
import {AdminGroupBody} from "../../3.organisms/AdminGroupBody/AdminGroupBody";
import {AdminProbBody} from "../../3.organisms/AdminProbBody/AdminProbBody";
import {AdminExamBody} from "../../3.organisms/AdminExamBody/AdminExamBody";
import {array} from "prop-types";
import sample_group_data from './sample_groups_data.json'
import sample_prob_data from './sample_prob_data.json'
import sample_exam_data from './sample_exam_info.json'

function AdminPage({flag, groups, problems, exam_info}) {
    const [gName, setGName] = useState("Software Development Life Cycle (SDLC)")
    const [viewFlag, setViewFlag] = useState(flag);
    console.log(flag)
    console.log(viewFlag)

    if (viewFlag === 0) {
        return (<StyledFinalPage>
            <div className={"main-block"}>
                <AdminHeader/>
                <div className={"main-body"}>
                    <AdminSidebar/>
                    <AdminGroupBody groups={groups}/>
                </div>
            </div>
        </StyledFinalPage>);
    } else if (viewFlag === 1) {
        return (<StyledFinalPage>
            <div className={"main-block"}>
                <AdminHeader/>
                <div className={"main-body"}>
                    <AdminSidebar/>
                    <AdminProbBody g_name={gName} problems={problems}/>
                </div>
            </div>
        </StyledFinalPage>);
    } else if (viewFlag === 2) {
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
    groups: array,
    problems: array,
    exam_info: array
};

AdminPage.defaultProps = {
    groups: sample_group_data.groups,
    problems: sample_prob_data.problems,
    exam_info: sample_exam_data
};

export default withRouter(AdminPage);