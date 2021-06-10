import React, {useState} from 'react';
import StyledAdminGroupBody from "./AdminGroupBody.styles";
import {Text} from "../../1.atoms/Text/Text";
import {Button} from "../../1.atoms/Button/Button";
import ProblemGroup from "../../2.molecules/ProblemGroup/ProblemGroup";
import {withRouter} from "react-router-dom";

function AdminGroupBody({groups, setGid, setGName}) {
    let elements = [];
    for (let i = 0; i < groups.length; i++) {
        elements.push(<ProblemGroup gid={groups[i].gid}
                                    g_name={groups[i].g_name}
                                    num_prob={groups[i].num_problems}
                                    setGid={setGid}
                                    setGName={setGName}/>);
    }
    const [groupList, setGroupList] = useState(elements)

    function addGroup() {
        let copy = [...groupList];
        copy = [...copy, <ProblemGroup gid={10}
                                       g_name={"new exam"}
                                       num_prob={0}
                                       setGid={setGid}
                                       setGName={setGName}/>];
        setGroupList(copy);
    }

    return (<StyledAdminGroupBody>
        <Text text={"Edit Group"} weight={700} size={"36px"}/>
        <br/>
        <div className={"group-tops"}>
            <Text text={"Select Group"} weight={700} size={"30px"}/>
            <Button variant={"admin"} label={"Add Group"} onClick={addGroup}/>
        </div>
        <div className={"groups-body"}>
            {groupList}
        </div>
    </StyledAdminGroupBody>);
};

AdminGroupBody.propTypes = {};

AdminGroupBody.defaultProps = {};

export default withRouter(AdminGroupBody);