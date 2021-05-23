import React from 'react';
import {withRouter} from "react-router-dom";
import StyledFinalPage from "./AdminPage.styles";
import {AdminHeader} from "../../2.molecules/AdminHeader/AdminHeader";
import {AdminSidebar} from "../../2.molecules/AdminSidebar/AdminSidebar";
import {AdminGroupBody} from "../../3.organisms/AdminGroupBody/AdminGroupBody";


function AdminPage(props) {

    return (<StyledFinalPage>
        <div className={"main-block"}>
            <AdminHeader/>
            <div className={"main-body"}>
                <AdminSidebar/>
                <AdminGroupBody/>
            </div>
        </div>
    </StyledFinalPage>);
}

AdminPage.propTypes = {};

AdminPage.defaultProps = {};

export default withRouter(AdminPage);