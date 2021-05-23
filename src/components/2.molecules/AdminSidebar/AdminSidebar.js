import React from 'react';
import StyledAdminSidebar from "./AdminSidebar.styles";

export const AdminSidebar = () => {
    return (<StyledAdminSidebar>
        <ul>
            <li><a href="#problems">Change Problems</a></li>
            <li><a href="#exams">Set Exams</a></li>
        </ul>
    </StyledAdminSidebar>);
};

AdminSidebar.propTypes = {};

AdminSidebar.defaultProps = {};
