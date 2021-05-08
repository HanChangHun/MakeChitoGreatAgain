import React from 'react';

import {Button} from './Button';

export default {
  title: '1.atoms/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Button {...args} />;

export const loginButton = Template.bind({});
loginButton.args = {
  label: "Primary Button"
};

export const secondaryButton = Template.bind({});
secondaryButton.args = {
  label: "Secondary Button",
  variant: "secondary"
};

export const arrowButton = Template.bind({});
arrowButton.args = {
  label: "←",
  variant: "secondary"
};

