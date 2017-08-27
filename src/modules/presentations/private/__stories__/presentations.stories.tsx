import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { v4 } from 'node-uuid';
// import { withKnobs, number } from '@storybook/addon-knobs';

import PresentationsGridComp, { PresentationT } from '../components/PresentationsGridComp';
import PresentationItemComp from '../components/PresentationItemComp';

storiesOf('presentation', module)
  // .addDecorator(withKnobs)
  .add('<PresentationItemComp />', () => {
    const presentation: PresentationT = { id: 'google@'.concat(v4()), thumbnailURL: '/thumbnail1.png' };
    return (
      <div style={{ width: 400, height: 225 }}>
        <PresentationItemComp presentation={presentation} />
      </div>
    );
  })
  .add('<PresentationsGridComp />', () => {
    const presentations: PresentationT[] = [
      { id: 'google@'.concat(v4()), thumbnailURL: '/thumbnail1.png' },
      { id: 'google@'.concat(v4()), thumbnailURL: '/thumbnail2.png' },
      { id: 'google@'.concat(v4()), thumbnailURL: '/thumbnail3.png' },
      { id: 'google@'.concat(v4()), thumbnailURL: '/thumbnail1.png' },
      { id: 'google@'.concat(v4()), thumbnailURL: '/thumbnail2.png' },
      { id: 'google@'.concat(v4()), thumbnailURL: '/thumbnail3.png' },
      { id: 'google@'.concat(v4()), thumbnailURL: '/thumbnail1.png' },
      { id: 'google@'.concat(v4()), thumbnailURL: '/thumbnail2.png' },
      { id: 'google@'.concat(v4()), thumbnailURL: '/thumbnail3.png' },
    ];
    return <PresentationsGridComp presentations={presentations} />;
  });