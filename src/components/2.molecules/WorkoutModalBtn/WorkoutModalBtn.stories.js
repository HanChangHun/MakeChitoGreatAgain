import React from 'react';
import WorkoutModalBtn from './WorkoutModalBtn';

export default {
    title: '2.molecules/WorkoutModalBtn',
    component: WorkoutModalBtn,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const Template = (args) => <WorkoutModalBtn {...args} />;

export const Basic = Template.bind({});
Basic.args = {
};