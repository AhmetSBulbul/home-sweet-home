import React from 'react';
import Button from '../components/Button'
import TextTitle from '../components/Typography';

export default {
  title: 'Example/Button',
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  size: "h-10 w-56",
  children: "Primary"
};

export const Header = () => <TextTitle>Mobil Uygulama & Web Arayüz Yazılım Geliştiricisiyim.</TextTitle>
