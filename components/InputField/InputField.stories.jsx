import React from 'react';
import InputField from '.';

export default {
    title: 'Components/FormFields',
    component: InputField,
    args: {
        name: 'storyfield',
        type: 'text',
        isRequired: true,
        children: 'Input Field'
    }
}

const Template = (args) => <InputField {...args}/>

export const InputFieldStory = Template.bind({});
export const TextAreaFieldStory = Template.bind({});
TextAreaFieldStory.args = {
    textArea: true,
    name: 'storyTextField',
    children: 'Text Area Field'
}


