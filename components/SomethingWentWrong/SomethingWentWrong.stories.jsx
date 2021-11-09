import React from 'react';
import SomethingWentWrong from '.';

export default {
    title: 'Components/Messages/Error',
    component: SomethingWentWrong,
    args: {
        message: "Bir Şeyler Yanlış Gitti"
    }
}


export const SomethingWentWrongStory = (args) => <SomethingWentWrong {...args}/>