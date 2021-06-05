import React from 'react';
import {FinalExamBody} from './FinalExamBody';
import sample_data from './sample_prob_data.json'

export default {
    title: '3.organisms/FinalExamBody',
    component: FinalExamBody,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const Template = (args) => <FinalExamBody {...args} />;

export const Basic = Template.bind({});
Basic.args = {
    problems: sample_data.problems
};