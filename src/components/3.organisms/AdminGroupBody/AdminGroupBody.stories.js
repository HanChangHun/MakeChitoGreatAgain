import React from 'react';
import {AdminGroupBody} from './AdminGroupBody';
import sample_data from './sample_groups_data.json'

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
    groups: sample_data.groups
};