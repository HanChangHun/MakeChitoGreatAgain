import React from 'react';
import {string} from 'prop-types';
import StyledProblemEdit from "./ProblemEdit.styles";

export const ProblemEdit = ({placeholder, value, onChange, weight, size, rows}) => {
    return (<StyledProblemEdit style={{fontWeight: weight, fontSize: size}}
                               placeholder={placeholder}
                               value={value}
                               rows={rows}
                               onChange={onChange}/>);
};

ProblemEdit.propTypes = {
    placeholder: string
};

ProblemEdit.defaultProps = {
    placeholder: "Input Question",
    weight: 400,
    size: "24px"
};
