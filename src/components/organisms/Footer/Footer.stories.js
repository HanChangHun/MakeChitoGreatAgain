import React from 'react';

import {Footer} from './Footer';

export default {
    title: 'Organism/Footer',
    component: Footer,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
};

const Template = (args) => <Footer {...args} />;

export const footer = Template.bind({});
footer.args = {};

export const footer2 = () => <Footer />