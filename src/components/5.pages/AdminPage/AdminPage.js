import React, {useState} from 'react';
import {withRouter} from "react-router-dom";
import StyledFinalPage from "./AdminPage.styles";
import {AdminHeader} from "../../2.molecules/AdminHeader/AdminHeader";
import AdminSidebar from "../../2.molecules/AdminSidebar/AdminSidebar";
import AdminGroupBody from "../../3.organisms/AdminGroupBody/AdminGroupBody";
import {AdminProbBody} from "../../3.organisms/AdminProbBody/AdminProbBody";
import {AdminExamBody} from "../../3.organisms/AdminExamBody/AdminExamBody";
import {getAllExamInfo, getAllGroupInfo, getFlag} from "../../../_actions/admin_action";

function AdminPage() {
    const [gid, setGid] = useState(null)
    const [gName, setGName] = useState(null)

    if (getFlag().payload === 0) {
        return (<StyledFinalPage>
            <div className={"main-block"}>
                <AdminHeader/>
                <div className={"main-body"}>
                    <AdminSidebar/>
                    <AdminGroupBody groups={getAllGroupInfo()} setGid={setGid} setGName={setGName}/>
                </div>
            </div>
        </StyledFinalPage>);
    } else if (getFlag().payload === 1) {
        return (<StyledFinalPage>
            <div className={"main-block"}>
                <AdminHeader/>
                <div className={"main-body"}>
                    <AdminSidebar/>
                    <AdminProbBody gid={gid} g_name={gName}/>
                </div>
            </div>
        </StyledFinalPage>);
    } else if (getFlag().payload === 2) {
        return (<StyledFinalPage>
            <div className={"main-block"}>
                <AdminHeader/>
                <div className={"main-body"}>
                    <AdminSidebar/>
                    <AdminExamBody exam_info={getAllExamInfo()}/>
                </div>
            </div>
        </StyledFinalPage>);
    }
}

AdminPage.propTypes = {};

AdminPage.defaultProps = {};

export default withRouter(AdminPage);