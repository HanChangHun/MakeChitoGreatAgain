import React from 'react';
import {Link, withRouter} from "react-router-dom";
import StyledFinalPage from "./FinalPage.styles";
import {FinalExamBody} from "../../3.organisms/FinalExamBody/FinalExamBody";


function FinalPage(props) {

    function onBackHandler() {
        props.history.push("/main");
    }

    return (<StyledFinalPage>
        <div className="main-block">
            <FinalExamBody/>
        </div>
    </StyledFinalPage>);
}

FinalPage.propTypes = {};

FinalPage.defaultProps = {};

export default withRouter(FinalPage);