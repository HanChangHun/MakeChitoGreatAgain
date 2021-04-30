import React from 'react';
import {StartPage} from './StartPage';

export default {
    title: '5.pages/StartPage',
    component: StartPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const Template = (args) => <StartPage {...args} />;

export const Basic = Template.bind({});
Basic.args = {
};