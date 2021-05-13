import React from 'react';
import {withRouter} from "react-router-dom";
import StyledMidtermPage from "./MidtermPage.styles";
import {Problem} from "../../2.molecules/Problem/Problem";


function MidtermPage() {
    return (<StyledMidtermPage>
        <Problem/>
    </StyledMidtermPage>);
}

MidtermPage.propTypes = {};

MidtermPage.defaultProps = {};

export default withRouter(MidtermPage);