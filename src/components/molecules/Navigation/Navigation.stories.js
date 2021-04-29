import React from 'react';

import {Navigation} from './Navigation';

export default {
    title: 'Molecule/Navigation',
    component: Navigation,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
};

const Template = (args) => <Navigation {...args} />;

export const LoginNav = Template.bind({});
LoginNav.args = {
    items: [
        {
            label: "로그인",
            href: "/login",
            variant: "secondary"
        },
        {
            label: "회원가입",
            href: "/signup",
            variant: "secondary"
        }
    ]
};

export const LoginNav2 = () => <Navigation items={[
    {
        label: "로그인",
        href: "/login",
        variant: "secondary"
    },
    {
        label: "회원가입",
        href: "/signup",
        variant: "secondary"
    }
]}/>