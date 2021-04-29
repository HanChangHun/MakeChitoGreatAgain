import React from 'react';

import {MainPage} from './MainPage';

export default {
    title: 'Page/MainPage',
    component: MainPage,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
};

const Template = (args) => <MainPage {...args} />;

export const mainPage = Template.bind({});
mainPage.args = {};

export const mainPage2 = () => <MainPage />