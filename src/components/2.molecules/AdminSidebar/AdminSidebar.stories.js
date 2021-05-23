import React from 'react';
import {AdminSidebar} from './AdminSidebar';

export default {
    title: '2.molecules/AdminSidebar',
    component: AdminSidebar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const Template = (args) => <AdminSidebar {...args} />;

export const Basic = Template.bind({});
Basic.args = {
};