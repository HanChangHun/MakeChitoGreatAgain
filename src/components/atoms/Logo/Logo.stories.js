import React from 'react';
import {Logo} from './Logo';

export default {
    title: 'Atoms/Logo',
    component: Logo,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const Template = (args) => <Logo {...args} />;

export const LogoSmall = Template.bind({});
LogoSmall.args = {
    icon:"Logo",
    size:"small"
};

export const LogoRegular = Template.bind({});
LogoRegular.args = {
    icon:"Logo",
    size:"regular"
};

export const LogoBig = Template.bind({});
LogoBig.args = {
    icon:"Logo",
    size:"big"
};