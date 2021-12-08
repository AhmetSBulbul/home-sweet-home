import React from 'react';
import Mockup from '.';

export default {
    title: 'Components/Mockup',
    component: Mockup,
}

export const DesktopMockup = () => <Mockup desktop src="/portfolio/rotasizkaravan/desktop.png"/>
export const TabletMockup = () => <Mockup tablet src="/portfolio/rotasizkaravan/tablet.png"/>
export const MobileMockup = () => <Mockup mobile src="/portfolio/rotasizkaravan/mobile.png"/>
