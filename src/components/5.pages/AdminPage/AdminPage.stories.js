import React from 'react';
import FinalPage from './AdminPage';
import sample_group_data from './sample_groups_data.json'
import sample_prob_data from './sample_prob_data.json'

export default {
    title: '5.pages/AdminPage',
    component: FinalPage,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
};

const Template = (args) => <FinalPage {...args} />;

export const Group = Template.bind({});
Group.args = {
    groups: sample_group_data.groups,
    problems: null,
};

export const Problems = Template.bind({});
Problems.args = {
    groups: null,
    problems: sample_prob_data.problems
};