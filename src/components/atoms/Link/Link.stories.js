import React from 'react';
import {Link} from './Link';

export default {
    title: 'Atoms/Link',
    component: Link,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const Template = (args) => <Link {...args} />;

export const primaryLink = Template.bind({});
primaryLink.args = {
    label: "회원가입",
    href: "/signup",
    variant: "primary"
};

export const secondaryLink = Template.bind({});
secondaryLink.args = {
    label: "로그인",
    href: "/login",
    variant: "secondary"
};

export const bigLink = Template.bind({});
bigLink.args = {
    label: "로그인",
    href: "/login",
    variant: "big",
    weight: 500
};