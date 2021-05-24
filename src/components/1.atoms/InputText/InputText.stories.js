import React from 'react';
import {InputText} from './InputText';
import {ProblemEdit} from "./ProblemEdit/ProblemEdit";

export default {
    title: '1.atoms/InputText',
    component: InputText,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const Template = (args) => <InputText {...args} />;

export const idInput = Template.bind({});
idInput.args = {
    placeholder:"Type your ID"
};

export const passwdInput = Template.bind({});
passwdInput.args = {
    type:"password",
    placeholder:"Type your Passwd"
};

const ProblemEditTemplate = (args) => <ProblemEdit {...args} />

export const problemEdit = ProblemEditTemplate.bind({});
problemEdit.args = {
    placeholder:"Input Question"
};