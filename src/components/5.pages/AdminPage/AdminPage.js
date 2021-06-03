import React, {useState} from 'react';
import {withRouter} from "react-router-dom";
import StyledFinalPage from "./AdminPage.styles";
import {AdminHeader} from "../../2.molecules/AdminHeader/AdminHeader";
import {AdminSidebar} from "../../2.molecules/AdminSidebar/AdminSidebar";
import {AdminGroupBody} from "../../3.organisms/AdminGroupBody/AdminGroupBody";
import {array} from "prop-types";
import sample_group_data from './sample_groups_data.json'
import sample_prob_data from './sample_prob_data.json'
import {AdminProbBody} from "../../3.organisms/AdminProbBody/AdminProbBody";

function AdminPage({groups, problems}) {
    const [gName,setGName] = useState("Software Development Life Cycle (SDLC)")

    let group_flag;
    let prob_flag;

    if (groups !== null) {
        group_flag = 1;
        prob_flag = 0;
    } else if (problems !== null) {
        group_flag = 0;
        prob_flag = 1;
    }

    if (group_flag) {
        return (<StyledFinalPage>
            <div className={"main-block"}>
                <AdminHeader/>
                <div className={"main-body"}>
                    <AdminSidebar/>
                    <AdminGroupBody groups={groups}/>
                </div>
            </div>
        </StyledFinalPage>);
    } else if (prob_flag) {
        return (<StyledFinalPage>
            <div className={"main-block"}>
                <AdminHeader/>
                <div className={"main-body"}>
                    <AdminSidebar/>
                    <AdminProbBody g_name={gName} problems={problems}/>
                </div>
            </div>
        </StyledFinalPage>);
    }
}

AdminPage.propTypes = {
    groups: array,
    problems: array
};

AdminPage.defaultProps = {
    groups: sample_group_data.groups,
    problems: sample_prob_data.problems
};

export default withRouter(AdminPage);