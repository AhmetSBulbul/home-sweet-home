import React from 'react'
import SimplePostLink from './index';



// eslint-disable-next-line import/no-anonymous-default-export
export default {
    component: SimplePostLink,
    title: 'Components/PostLink/SimplePostLink',
    args: {
        title: "Post Link"
    }
}

const Template = (args) => <SimplePostLink {...args}>{args.label}</SimplePostLink>

export const Default = Template.bind({});