import React from 'react';
import {ExamInfo} from './ExamInfo';

export default {
    title: '2.molecules/ExamInfo',
    component: ExamInfo,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
};

const Template = (args) => <ExamInfo {...args} />;

export const basic = Template.bind({});
basic.args = {
    semester: "1-1",
    g_name: "Software Development Life Cycle (SDLC)",
    num_probs: 23,
    cutOff: [90, 80, 70, 60, 50, 40]
};