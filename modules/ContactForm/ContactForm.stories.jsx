import React from 'react';
import ContactForm from '.';

export default {
    title: 'Modules/ContactForm',
    component: ContactForm,
    args: {}
}

const Template = (args) => <ContactForm {...args}/>

export const Default = Template.bind({});
