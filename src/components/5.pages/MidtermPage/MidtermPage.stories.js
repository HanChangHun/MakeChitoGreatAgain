import React from 'react';
import MidtermPage from './MidtermPage';

export default {
    title: '5.pages/MidtermPage',
    component: MidtermPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const Template = (args) => <MidtermPage {...args} />;

export const Basic = Template.bind({});
Basic.args = {
};