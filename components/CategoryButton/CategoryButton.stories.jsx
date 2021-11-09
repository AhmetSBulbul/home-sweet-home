import React from 'react';
import CategoryButton from '.';

export default {
    title: 'Components/Buttons/CategoryButton',
    component: CategoryButton,
    args: {
        category: "modern-web-gelistirme",
        isActive: false,
    }
}

const Template = (args) => <CategoryButton {...args}/>

export const DefaultCategoryButton = Template.bind({});
export const ActiveCategoryButton = Template.bind({});
ActiveCategoryButton.args={isActive: true};

