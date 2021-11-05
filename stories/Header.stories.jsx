import React from 'react';
import Navigation from '../components/Navigation'
import BaseButton from '../components/BaseButton';
import Header from '../components/Header';

export default {
  title: 'Example/Navigation',
};

const Template = (args) => <Navigation {...args}>
  <BaseButton>Hakkimda</BaseButton>
</Navigation>;

export const Primary = Template.bind({});
Primary.args = {
  
};

export const Navbar = () => <Header/>;
