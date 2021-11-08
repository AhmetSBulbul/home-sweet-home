import React from 'react'


import { BreathtakingBeauty, MyLovelyHead, MyHeadButFancy } from '.'

export default {
    title: 'Fundamentals/Figures',
    parameters: {
        layout: 'centered'
      }
   
}

export const HeadIllustration = () => <div style={{margin:'auto', width: '200px', height:'200px'}}><MyLovelyHead/></div>
export const HandsomePhoto = () => <BreathtakingBeauty/>
export const HeadIllustrationAnimated = () => <div style={{margin:'auto', width: '100%', height:'100%'}}><MyHeadButFancy/></div>