import React from 'react';
import StudyModalBtn from './StudyModalBtn';

export default {
    title: '2.molecules/StudyModalBtn',
    component: StudyModalBtn,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const Template = (args) => <StudyModalBtn {...args} />;

export const Basic = Template.bind({});
Basic.args = {
};