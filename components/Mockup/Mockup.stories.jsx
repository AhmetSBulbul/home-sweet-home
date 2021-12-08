import React from 'react';
import Mockup from '.';

export default {
    title: 'Components/Mockup',
    component: Mockup,
}

export const DesktopMockup = () => <Mockup desktop/>
export const TabletMockup = () => <Mockup tablet/>
export const MobileMockup = () => <Mockup mobile/>
