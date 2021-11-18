import React from 'react';
import CallToContact from '.';

export default {
    title: 'Modules/CallToActions',
    component: CallToContact,
    args: {}
}

const Template = (args) => <CallToContact {...args}/>

export const Default = Template.bind({});
