import React from 'react';
import FinalPage from './AdminPage';
import sample_group_data from './sample_groups_data.json'
import sample_prob_data from './sample_prob_data.json'
import sample_exam_data from './sample_exam_info.json'

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
    flag: 0,
    groups: sample_group_data.groups,
};

export const Problems = Template.bind({});
Problems.args = {
    flag: 1,
    problems: sample_prob_data.problems
};

export const Exam = Template.bind({});
Exam.args = {
    flag: 2,
    exam_info: sample_exam_data
};