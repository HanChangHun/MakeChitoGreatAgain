import React from 'react';
import FinalPage from './AdminPage';

export default {
    title: '5.pages/AdminPage',
    component: FinalPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const Template = (args) => <FinalPage {...args} />;

export const Basic = Template.bind({});
Basic.args = {
};