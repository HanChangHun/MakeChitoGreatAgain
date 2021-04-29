import React from 'react';

import {Header} from './Header';
import {items_main, items_login, items_userinfo} from "./Header-items.json"

export default {
    title: 'Organism/Header',
    component: Header,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
};

const Template = (args) => <Header {...args} />;

export const headerMain = Template.bind({});
headerMain.args = {
    items1: items_main,
    items2: items_login
};

export const headerMain2 = () => <Header items1={items_main} items2={items_login}/>

export const headerLogin = Template.bind({});
headerLogin.args = {
    items1: [],
    items2: items_login
};

export const headerLogin2 = () => <Header items1={[]} items2={items_login}/>

export const headerUserinfo = Template.bind({});
headerUserinfo.args = {
    items1: items_userinfo,
    items2: items_login
};

export const headerUserinfo2 = () => <Header items1={items_userinfo} items2={items_login}/>