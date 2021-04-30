import React from 'react';
import {Shape} from './Shape';

export default {
    title: '1.atoms/Shape',
    component: Shape,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const Template = (args) => <Shape {...args} />;

export const Basic = Template.bind({});
Basic.args = {
};