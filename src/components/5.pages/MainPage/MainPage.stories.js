import React from 'react';
import MainPage from './MainPage';

export default {
    title: '5.pages/MainPage',
    component: MainPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const Template = (args) => <MainPage {...args} />;

export const Basic = Template.bind({});
Basic.args = {
};