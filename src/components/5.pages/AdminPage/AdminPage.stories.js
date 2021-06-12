import React from 'react';
import FinalPage from './AdminPage';

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
};

export const Problems = Template.bind({});
Problems.args = {
    flag: 1,
};

export const Exam = Template.bind({});
Exam.args = {
    flag: 2,
};