import React, {useState} from "react";
import {Text} from "../../../1.atoms/Text/Text";

export const Grade = ({grade, cut_off}) => {
    const [cutOff, setCutOff] = useState(cut_off)

    const onCutOffHandler = (event) => {
        setCutOff(event.currentTarget.value)
    }

    return (
        <div>
            <Text size={"20px"} text={grade}/>
            <input value={cutOff} type="number" onChange={onCutOffHandler}/>
        </div>
    );
}