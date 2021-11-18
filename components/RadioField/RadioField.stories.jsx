import React from 'react';
import RadioField from '.';

export default {
    title: 'Components/FormFields/RadioBox',
    component: RadioField,
    args: {
        children: 'Label',
        name: 'radiobox',
        id: '1000 - 2000'

    }
}

const Template = (args) => <RadioField {...args}/>

export const Default = Template.bind({});
