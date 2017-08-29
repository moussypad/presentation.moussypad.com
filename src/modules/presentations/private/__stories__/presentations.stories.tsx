import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { v4 } from 'node-uuid';
import { withKnobs } from '@storybook/addon-knobs';

import PresentationsGridComponent, { PresentationT } from '../components/PresentationsGridComponent';
import PresentationGridItemComponent from '../components/PresentationGridItemComponent';

storiesOf('presentation', module)
  .addDecorator(withKnobs)
  .add('<PresentationGridItemComponent />', () => {
    const presentation: PresentationT = { id: 'google@'.concat(v4()), thumbnailURL: '/thumbnail1.png' };
    return (
      <div style={{ width: 400, height: 225 }}>
        <PresentationGridItemComponent presentation={presentation} onStart={(_presentation: PresentationT) => console.log(presentation)} />
      </div>
    );
  })
  .add('<PresentationsGridComponent />', () => {
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
    return <PresentationsGridComponent presentations={presentations} />;
  });