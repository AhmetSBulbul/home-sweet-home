import React from 'react';
import * as Asset from '../components/assets';
import FancyHead from '../components/MyHeadButFancy';


export default {
  title: 'Example/Assets',
};




export const MyHead = () => <Asset.HeadIllustration style={{'font-size':'20rem'}}/>

export const MyHeadWithPlatformSvg = () => <Asset.HeadwithPlatform style={{'font-size':'20rem'}}/>

export const MyHeadButFancy = () => <div style={{margin:'auto', width: '100%', height:'100%'}}><FancyHead/></div>