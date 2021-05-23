import React from 'react';
import {AdminHeader} from './AdminHeader';

export default {
    title: '2.molecules/AdminHeader',
    component: AdminHeader,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const Template = (args) => <AdminHeader {...args} />;

export const Basic = Template.bind({});
Basic.args = {
};