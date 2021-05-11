import React from 'react';
import {withRouter} from "react-router-dom";
import StyledMidtermPage from "./MidtermPage.styles";


function MidtermPage(props) {

    return (<StyledMidtermPage>
        <div className="main-block" />
    </StyledMidtermPage>);
}

MidtermPage.propTypes = {};

MidtermPage.defaultProps = {};

export default withRouter(MidtermPage);