import React from 'react';
import {AdminGroupBody} from './AdminGroupBody';

export default {
    title: '3.organisms/AdminGroupBody',
    component: AdminGroupBody,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const Template = (args) => <AdminGroupBody {...args} />;

export const Basic = Template.bind({});
Basic.args = {
};