import React from 'react';
import PortfolioPostList from '.';

export default {
    title: 'Modules/PortfolioPostList',
    component: PortfolioPostList,
    args: {}
}

const Template = (args) => <PortfolioPostList {...args}/>

export const Default = Template.bind({});