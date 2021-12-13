import React from 'react'
import SocialMediaContact from './index'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    component: SocialMediaContact,
    title: 'Components/SocialMediaContact',
    args: {
    }
}

const Template = (args) => <SocialMediaContact {...args}></SocialMediaContact>

export const Default = Template.bind({});