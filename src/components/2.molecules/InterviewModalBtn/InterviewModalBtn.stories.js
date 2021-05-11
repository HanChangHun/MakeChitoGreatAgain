import React from 'react';
import InterviewModalBtn from './InterviewModalBtn';

export default {
    title: '2.molecules/InterviewModalBtn',
    component: InterviewModalBtn,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const Template = (args) => <InterviewModalBtn {...args} />;

export const Basic = Template.bind({});
Basic.args = {
};