import React from 'react';
import {CutOff} from './CutOff';

export default {
    title: '2.molecules/ExamInfo/CutOff',
    component: CutOff,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const Template = (args) => <CutOff {...args} />;

export const basic = Template.bind({});
basic.args = {
    cut_off: [90, 80, 70, 60, 50, 40]
};