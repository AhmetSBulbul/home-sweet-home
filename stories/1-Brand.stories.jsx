import React from 'react';
import Logo from '../components/Logo';
import * as Assets from '../components/assets';

export default {
  title: 'Example/Brand',
};


export const SlugLogo = () => <div style={{'background-color': '#000', 'padding': "2rem", 'display': 'flex'}}><Logo/></div>;

export const HeadIllustration = () => <Assets.HeadIllustration style={{'font-size': '20em'}}/>;




