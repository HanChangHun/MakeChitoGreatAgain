import React from 'react';
import {ExamInfo} from './ExamInfo';

export default {
    title: '2.molecules/ExamInfo',
    component: ExamInfo,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const Template = (args) => <ExamInfo {...args} />;

export const basic = Template.bind({});
basic.args = {
};