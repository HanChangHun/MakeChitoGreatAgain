import React from 'react';
import {InputText} from './InputText';

export default {
    title: '1.atoms/InputText',
    component: InputText,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const Template = (args) => <InputText {...args} />;

export const basicInput = Template.bind({});
basicInput.args = {
    placeholder:"Type your ID"
};

export const passwdInput = Template.bind({});
passwdInput.args = {
    type:"password",
    placeholder:"Type your Passwd"

};