import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { v4 } from 'node-uuid';
// import { withKnobs, number } from '@storybook/addon-knobs';

import PresentationsGridComp, { PresentationT } from '../components/PresentationsGridComp';
import PresentationItemComp from '../components/PresentationItemComp';

storiesOf('presentation', module)
  // .addDecorator(withKnobs)
  .add('<PresentationItemComp />', () => {
    const presentation: PresentationT = { id: v4(), provider: 'Google', thumbnailURL: '/thumbnail1.png' };
    return (
      <div style={{ width: 400, height: 225 }}>
        <PresentationItemComp presentation={presentation} />
      </div>
    );
  })
  .add('<PresentationsGridComp />', () => {
    const presentations: PresentationT[] = [
      { id: v4(), provider: 'Google', thumbnailURL: '/thumbnail1.png' },
      { id: v4(), provider: 'Google', thumbnailURL: '/thumbnail2.png' },
      { id: v4(), provider: 'Google', thumbnailURL: '/thumbnail3.png' },
      { id: v4(), provider: 'Google', thumbnailURL: '/thumbnail1.png' },
      { id: v4(), provider: 'Google', thumbnailURL: '/thumbnail2.png' },
      { id: v4(), provider: 'Google', thumbnailURL: '/thumbnail3.png' },
      { id: v4(), provider: 'Google', thumbnailURL: '/thumbnail1.png' },
      { id: v4(), provider: 'Google', thumbnailURL: '/thumbnail2.png' },
      { id: v4(), provider: 'Google', thumbnailURL: '/thumbnail3.png' },
    ];
    return <PresentationsGridComp presentations={presentations} />;
  });