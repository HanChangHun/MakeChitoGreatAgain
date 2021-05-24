import React from 'react';
import {ProblemGroup} from './ProblemGroup';
import sample_data from './sample_group_data.json'

export default {
    title: '2.molecules/ProblemGroup',
    component: ProblemGroup,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const Template = (args) => <ProblemGroup {...args} />;

export const Basic = Template.bind({});
Basic.args = {
    g_name: sample_data.g_name,
    num_prob: sample_data.num_problems
};