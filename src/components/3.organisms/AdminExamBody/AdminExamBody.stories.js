import React from 'react';
import {AdminExamBody} from './AdminExamBody';

export default {
    title: '3.organisms/AdminExamBody',
    component: AdminExamBody,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const Template = (args) => <AdminExamBody {...args} />;

export const Basic = Template.bind({});
Basic.args = {
};