import React from 'react';
import LiveSignal from '.';

export default {
    title: 'Components/Signals',
    component: LiveSignal,
    parameters: {
        layout: 'centered'
      },
    args: {}
}

const Template = (args) => <LiveSignal {...args}/>

export const Default = Template.bind({});