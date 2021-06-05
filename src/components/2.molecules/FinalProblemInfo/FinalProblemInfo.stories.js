import React from 'react';
import {FinalProblemInfo} from './FinalProblemInfo';
import sample_data from './sample_prob_data.json'

export default {
    title: '2.molecules/FinalProblemInfo',
    component: FinalProblemInfo,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const Template = (args) => <FinalProblemInfo {...args} />;

export const admin = Template.bind({});
admin.args = {
    problem: sample_data,
    variance: "admin"
};

export const exam = Template.bind({});
exam.args = {
    problem: sample_data,
    variance: "exam"
};