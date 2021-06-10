import React from 'react';
import {withRouter} from "react-router-dom";
import StyledFinalPage from "./FinalPage.styles";
import {FinalExamBody} from "../../3.organisms/FinalExamBody/FinalExamBody";
import {getExamInfo, getProblems} from "../../../_actions/exam_action";
import cookie from "react-cookies";


function FinalPage(props) {
    let problems = getProblems(parseInt(cookie.load('semester')))
    let examInfo = getExamInfo(parseInt(cookie.load('semester')))
    const shuffled = problems.problems.sort(() => 0.5 - Math.random());
    let final_problems = shuffled.slice(0, examInfo.num_problem);

    return (<StyledFinalPage>
        <div className="main-block">
            <FinalExamBody g_name={problems.g_name} problems={final_problems}/>
        </div>
    </StyledFinalPage>);
}

FinalPage.propTypes = {};

FinalPage.defaultProps = {};

export default withRouter(FinalPage);