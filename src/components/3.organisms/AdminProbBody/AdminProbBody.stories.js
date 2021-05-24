import React from 'react';
import {AdminProbBody} from './AdminProbBody';
import sample_data from './sample_prob_data.json'

export default {
    title: '3.organisms/AdminProbBody',
    component: AdminProbBody,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const Template = (args) => <AdminProbBody {...args} />;

export const Basic = Template.bind({});
Basic.args = {
    groups: sample_data.problems
};