import React from 'react';
import {withRouter} from "react-router-dom";
import StyledFinalPage from "./FinalPage.styles";


function FinalPage(props) {

    return (<StyledFinalPage>
        <div className="main-block" />
    </StyledFinalPage>);
}

FinalPage.propTypes = {};

FinalPage.defaultProps = {};

export default withRouter(FinalPage);