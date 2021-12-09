import React from 'react';
import PortfolioPostLink from '.';

export default {
    title: 'Components/PostLink/PortfolioPostLink',
    component: PortfolioPostLink,
    parameters: {
        layout: 'centered'
    },
    args: {
        title: "Rotasız Karavan",
        folderName: "rotasiz-karavan"
    }
}

const Template = (args) => <PortfolioPostLink {...args}/>

export const Default = Template.bind({});