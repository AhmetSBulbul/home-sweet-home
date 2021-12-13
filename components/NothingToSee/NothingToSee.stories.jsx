import React from 'react'
import NothingToSee from './index'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    component: NothingToSee,
    title: 'Components/Messages/NothingToSee',
    args: {
    }
}

const Template = (args) => <NothingToSee {...args}></NothingToSee>

export const Default = Template.bind({});