import React from 'react';
import {Text, MultiLineText} from './Text';

export default {
    title: 'Atoms/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const Template = (args) => <Text {...args} />;

export const Text1 = Template.bind({});
Text1.args = {
    text: "Hello World",
    weight: 100,
};

export const Text4 = Template.bind({});
Text4.args = {
    text: "Hello World",
    weight: 400,
};

export const Text5 = Template.bind({});
Text5.args = {
    text: "Hello World",
    weight: 500,
};

export const Text7 = Template.bind({});
Text7.args = {
    text: "Hello World",
    weight: 700,
};

const Template2 = (args) => <MultiLineText {...args} />;

export const MultiLineText7 = Template2.bind({});
MultiLineText7.args = {
    text: `Hello
World`,
    weight: 700,
};