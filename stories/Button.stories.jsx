import React from 'react';

import Button from '../components/Button'

export default {
  title: 'Example/Button',
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  size: "h-10 w-56",
  children: "Primary"
};
