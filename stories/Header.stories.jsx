import React from 'react';
import Navigation from '../components/Navigation'
import Button from '../components/Button';
import Header from '../components/Header';

export default {
  title: 'Example/Navigation',
};

const Template = (args) => <Navigation {...args}>
  <Button>Hakkimda</Button>
</Navigation>;

export const Primary = Template.bind({});
Primary.args = {
  
};

export const Navbar = () => <Header/>;
