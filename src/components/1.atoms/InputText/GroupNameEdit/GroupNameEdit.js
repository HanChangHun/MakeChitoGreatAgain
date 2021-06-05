import React from 'react';
import {string} from 'prop-types';
import StyledGroupNameEdit from "./GroupNameEdit.styles";

export const GroupNameEdit = ({placeholder, value, onChange, weight, size, rows, ...props}) => {
    return (<StyledGroupNameEdit style={{fontWeight: weight, fontSize: size}}
                               placeholder={placeholder}
                               value={value}
                               rows={rows}
                               onChange={onChange}/>);
};

GroupNameEdit.propTypes = {
    placeholder: string
};

GroupNameEdit.defaultProps = {
    placeholder: "Input Question",
    weight: 600,
    size: "30px"
};
