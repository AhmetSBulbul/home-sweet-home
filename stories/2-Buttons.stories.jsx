import React from 'react'

import ThemeButton from '../components/ThemeButton'
import * as Icons from '../components/icons'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    component: ThemeButton,
    title: 'Components/Button',
};

const ButtonStory = (args) => <ThemeButton {...args}>{args.label}</ThemeButton>;

export const DefaultButton = ButtonStory.bind({});
DefaultButton.args={
    label: 'Default Button',
};

export const SecondaryButton = ButtonStory.bind({});
SecondaryButton.args={
    label: 'Secondary Button',
    secondary: true,
};

export const WithIconButton = ButtonStory.bind({});
WithIconButton.args={
    label: <>With Icon<Icons.Arrow/></>,
    withIcon: true
}

export const OutlinedButton = ButtonStory.bind({});
OutlinedButton.args={
    outlined: true,
    label: 'Outlined Button',
}

export const SmallButton = ButtonStory.bind({});
SmallButton.args={
    small: true,
    label: 'Outlined Button',
}


