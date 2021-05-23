import React from 'react';
import {Text} from "../../1.atoms/Text/Text";
import StyledAdminHeader from "./AdminHeader.styles";
import admin_chito from "../../0.particle/Char/admin_chito.png"

export const AdminHeader = () => {
    return (<StyledAdminHeader>
        <div className={"page-info"}>
            <Text text={"Admin Page"} size={"72px"} weight={800}/>
        </div>
        <div className={"greeting"}>
            <Text text={"Hi! Professor"} size={"36px"} weight={500}/>
            <img src={admin_chito} alt="admin chito"/>
        </div>

    </StyledAdminHeader>);
};

AdminHeader.propTypes = {};

AdminHeader.defaultProps = {};
