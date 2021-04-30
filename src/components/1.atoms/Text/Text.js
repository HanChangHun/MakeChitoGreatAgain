import React from 'react';
import {number, string} from 'prop-types';
import StyledText, {StyledLinkedText} from "./Text.styles";


export const Text = ({text, weight, size, color}) => {
    return (<StyledText style={{
        fontWeight: weight,
        fontSize: size,
        color: color
    }}>{text}</StyledText>);
};

Text.propTypes = {
    text: string,
    weight: number,
    size: string
};

Text.defaultProps = {
    text: "Hello World",
    weight: 500,
    size: "80px"
};

export const MultiLineText = ({text, weight, size}) => {
    return (<pre style={{
        fontFamily: "S-Core",
        fontWeight: weight,
        fontSize: size
    }}>{text}</pre>);
};

MultiLineText.propTypes = {
    text: string,
    weight: number,
    size: string
};

MultiLineText.defaultProps = {
    text: "Hello World",
    weight: 500,
    size: "80px"
};

export const LinkedText = ({text, href}) => {
    return (<StyledLinkedText href={href} style={{
    }}>{text}</StyledLinkedText>);
};

LinkedText.propTypes = {
    text: string,
    href: string
};

LinkedText.defaultProps = {
    text: "Linked Text",
    href: "/route",
};
