import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { v4 } from 'node-uuid';
// import { withKnobs, number } from '@storybook/addon-knobs';

import PresentationsGridComp, { PresentationT } from '../components/PresentationsGridComp';

storiesOf('presentation', module)
  // .addDecorator(withKnobs)
  .add('<PresentationsGridComp />', () => {
    const presentations: PresentationT[] = [
      { id: v4(), provider: 'Google', thumbnailURL: '/thumbnail1.png'},
      { id: v4(), provider: 'Google', thumbnailURL: '/thumbnail2.png'},
      { id: v4(), provider: 'Google', thumbnailURL: '/thumbnail3.png'},
      { id: v4(), provider: 'Google', thumbnailURL: '/thumbnail1.png'},
      { id: v4(), provider: 'Google', thumbnailURL: '/thumbnail2.png'},
      { id: v4(), provider: 'Google', thumbnailURL: '/thumbnail3.png'},
      { id: v4(), provider: 'Google', thumbnailURL: '/thumbnail1.png'},
      { id: v4(), provider: 'Google', thumbnailURL: '/thumbnail2.png'},
      { id: v4(), provider: 'Google', thumbnailURL: '/thumbnail3.png'},
    ];
    return <PresentationsGridComp presentations={presentations}/>;
  });
