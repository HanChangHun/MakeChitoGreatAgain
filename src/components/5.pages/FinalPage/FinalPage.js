import React from 'react';
import {Link, withRouter} from "react-router-dom";
import StyledFinalPage from "./FinalPage.styles";
import {Button} from "../../1.atoms/Button/Button";


function FinalPage(props) {

    function onBackHandler() {
        props.history.push("/main");
    }

    return (<StyledFinalPage>
        <div className="main-block">
            <Link to='/main'>
                <Button onClick={onBackHandler} label={"Back!"}/>
            </Link>
        </div>
    </StyledFinalPage>);
}

FinalPage.propTypes = {};

FinalPage.defaultProps = {};

export default withRouter(FinalPage);