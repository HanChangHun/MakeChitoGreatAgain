import React, {useState} from 'react';
import StyledAdminGroupBody from "./AdminGroupBody.styles";
import {Text} from "../../1.atoms/Text/Text";
import {ProblemGroup} from "../../2.molecules/ProblemGroup/ProblemGroup";
import {Button} from "../../1.atoms/Button/Button";

export const AdminGroupBody = ({groups}) => {
    let elements = [];
    for (let i = 0; i < groups.length; i++) {
        elements.push(<ProblemGroup gid={groups[i].gid} g_name={groups[i].g_name} num_prob={groups[i].num_problems}/>);
    }
    const [groupList, setGroupList] = useState(elements)

    return (<StyledAdminGroupBody>
        <Text text={"Edit Group"} weight={700} size={"36px"}/>
        <br/>
        <div className={"group-tops"}>
            <Text text={"Select Group"} weight={700} size={"30px"}/>
            <Button variant={"admin"} label={"Add Group"}/>
        </div>
        <div className={"groups-body"}>
            {groupList}
        </div>
    </StyledAdminGroupBody>);
};

AdminGroupBody.propTypes = {};

AdminGroupBody.defaultProps = {};
