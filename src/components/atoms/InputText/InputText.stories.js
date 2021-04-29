import React from 'react';
import {InputText} from './InputText';

export default {
    title: 'Atoms/InputText',
    component: InputText,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const Template = (args) => <InputText {...args} />;

export const loginInput = Template.bind({});
loginInput.args = {
    placeholder:"아이디"
};