import React from 'react';
import StyledAdminGroupBody from "./AdminGroupBody.styles";
import {Text} from "../../1.atoms/Text/Text";
import {ProblemGroup} from "../../2.molecules/ProblemGroup/ProblemGroup";

export const AdminGroupBody = ({groups}) => {
    let elements = [];
    for (let i = 0; i < groups.length; i++) {
        elements.push(<ProblemGroup gid={groups[i].gid} g_name={groups[i].g_name} num_prob={groups[i].num_problems} />);
    }

    return (<StyledAdminGroupBody>
        <Text text={"Change Problems"} weight={700} size={"36px"}/>
        <br/>
        <Text text={"Select Group"} weight={700} size={"30px"}/>
        <div className={"problems"}>
            {elements}
        </div>
    </StyledAdminGroupBody>);
};

AdminGroupBody.propTypes = {};

AdminGroupBody.defaultProps = {};
