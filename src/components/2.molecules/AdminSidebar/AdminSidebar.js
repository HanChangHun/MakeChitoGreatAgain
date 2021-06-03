import React from 'react';
import StyledAdminSidebar from "./AdminSidebar.styles";

export const AdminSidebar = () => {
    return (<StyledAdminSidebar>
        <ul>
            <li><a href="#problems">Edit Group</a></li>
            <li><a href="#exams">Set Exam</a></li>
        </ul>
    </StyledAdminSidebar>);
};

AdminSidebar.propTypes = {};

AdminSidebar.defaultProps = {};
