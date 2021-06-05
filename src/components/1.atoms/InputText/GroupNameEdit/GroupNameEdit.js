import React from 'react';
import {string} from 'prop-types';
import StyledGroupNameEdit from "./GroupNameEdit.styles";

export const GroupNameEdit = ({placeholder, value, onChange, weight, size, rows, width, ...props}) => {
    return (<StyledGroupNameEdit style={{
        fontWeight: weight,
        fontSize: size,
        width: width
    }}
                                 placeholder={placeholder}
                                 value={value}
                                 rows={rows}
                                 onChange={onChange}/>);
};

GroupNameEdit.propTypes = {
    placeholder: string
};

GroupNameEdit.defaultProps = {
    placeholder: "Input Group Name",
    weight: 600,
    width: "700px",
    size: "30px"
};
