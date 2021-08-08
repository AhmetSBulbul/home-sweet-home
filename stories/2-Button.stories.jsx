import React from 'react';
import Button from '../components/Button'
import ThemeButton from '../components/ThemeButton';
import MenuButton from '../components/MenuButton';

export default {
  title: 'Example/Button',
  component: 'ThemeButton',
  parameters: {
    layout: 'centered',
  }
};

const Template = (args) => <ThemeButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Primary",
  secondary: false,
  outlined: false,
  stretch: false,
};

export const NavigationMoreButton = () => <MenuButton/>;
