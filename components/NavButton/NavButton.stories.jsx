import React from 'react'

import NavButton from './index'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    component: NavButton,
    title: 'Components/Buttons/NavButton',
    args: {
        small: false,
        current: false,
        label: 'Hakkımda'
    }
}

const Template = (args) => <NavButton {...args}>{args.label}</NavButton>

export const Default = Template.bind({});

export const Small = Template.bind({});
Small.args = {
    small: true,
    label: "Footer Link"
}