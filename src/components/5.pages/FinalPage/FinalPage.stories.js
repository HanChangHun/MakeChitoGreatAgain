import React from 'react';
import FinalPage from './FinalPage';

export default {
    title: '5.pages/FinalPage',
    component: FinalPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const Template = (args) => <FinalPage {...args} />;

export const Basic = Template.bind({});
Basic.args = {
};