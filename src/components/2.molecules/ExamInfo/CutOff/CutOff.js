import React, {useState} from 'react';
import StyledCutOff from "./CutOff.styles";
import {array} from "prop-types";
import {Text} from "../../../1.atoms/Text/Text";
import {GroupNameEdit} from "../../../1.atoms/InputText/GroupNameEdit/GroupNameEdit";
import {FinalProblemInfo} from "../../FinalProblemInfo/FinalProblemInfo";
import {Grade} from "./Grade";


export const CutOff = ({cut_off, ...props}) => {
    let cutOffs = []
    let grades = ["A+", "A-", "B+", "B-", "C+", "C-"]

    for (let i = 0; i < cut_off.length; i++) {
        cutOffs.push(<Grade grade={grades[i]} cut_off={cut_off[i]}/>)
    }
    return (<StyledCutOff>
        <div className={"cut-off-body"}>
            {cutOffs}
        </div>
    </StyledCutOff>);
};

CutOff.propTypes = {
    cut_off: array,
};

CutOff.defaultProps = {
    cut_off: [90, 80, 70, 60, 50, 40]
};
