import React from 'react';
import {number, string} from 'prop-types';

export const Text = ({text, weight}) => {
    return (<p style={{fontFamily:"S-Core", fontWeight: weight}}>{text}</p>);
};

Text.propTypes = {
    text: string,
    weight: number,
};

Text.defaultProps = {
    text: "Hello World",
    weight: 500,
};

export const MultiLineText = ({text, weight}) => {
    return (<pre style={{fontFamily:"S-Core", fontWeight: weight}}>{text}</pre>);
};

MultiLineText.propTypes = {
    text: string,
    weight: number,
};

MultiLineText.defaultProps = {
    text: "Hello World",
    weight: 500,
};
