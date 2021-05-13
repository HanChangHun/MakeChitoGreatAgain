import React from 'react';
import {Problem} from './Problem';

export default {
    title: '2.molecules/Problem',
    component: Problem,
};

const Template = (args) => <Problem {...args} />;

export const Basic = Template.bind({});
Basic.args = {};