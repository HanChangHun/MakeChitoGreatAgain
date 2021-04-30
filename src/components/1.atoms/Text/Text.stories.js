import React from 'react';
import {Text, MultiLineText, LinkedText} from './Text';

export default {
    title: '1.atoms/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const Template = (args) => <Text {...args} />;

export const H1 = Template.bind({});
H1.args = {
    text: "H1",
    weight: 700,
    size: "80px"
};

export const H2 = Template.bind({});
H2.args = {
    text: "H2",
    weight: 700,
    size: "48px"
};

export const P1 = Template.bind({});
P1.args = {
    text: "P1",
    weight: 500,
    size: "80px"
};

export const P2 = Template.bind({});
P2.args = {
    text: "P2",
    weight: 700,
    size: "64px",
};
export const P3 = Template.bind({});
P3.args = {
    text: "P3",
    weight: 700,
    size: "48px",
};
export const P4 = Template.bind({});
P4.args = {
    text: "P4",
    weight: 700,
    size: "36px",
};
export const P5 = Template.bind({});
P5.args = {
    text: "P5",
    weight: 700,
    size: "24px",
};

const Template2 = (args) => <MultiLineText {...args} />;

export const MultiLineText1 = Template2.bind({});
MultiLineText1.args = {
    text: `Hello
World`,
    weight: 700,
};

const Template3 = (args) => <LinkedText {...args} />;

export const LinkedText1 = Template3.bind({});
LinkedText1.args = {
    text: "Forgot ID/Password?",
    href: "/route",
    weight: 400,
    size: "24px",
};