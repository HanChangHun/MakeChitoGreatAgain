import React from 'react';
import {LoginForm} from './LoginForm';

export default {
    title: '2.molecules/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const Template = (args) => <LoginForm {...args} />;

export const Basic = Template.bind({});
Basic.args = {
};