import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, number } from '@storybook/addon-knobs';
import FullscreenSideMenu, { PositionT, AlignT } from '../../../FullscreenSideMenu';

import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';

storiesOf('SideMenu', module)
  .addDecorator(withKnobs)
  .add('<SideMenu />', () => {
    const positionOptions: { [key: string]: PositionT } = {
      top: 'top',
      bottom: 'bottom',
      left: 'left',
      right: 'right',
    };

    const alignOptions: { [key: string]: AlignT } = {
      start: 'start',
      center: 'center',
      end: 'end',
    };

    const defaultPosition = 'top';
    const defaultAlign = 'start';
    return (
      <div>
        <FullscreenSideMenu
          position={select('position', positionOptions, defaultPosition)}
          align={select('align', alignOptions, defaultAlign)}
          duration={number('duration', 300)}
        >
          <Button fab color="primary" aria-label="add">
            <AddIcon />
          </Button>
          <Button fab color="primary" aria-label="add">
            <AddIcon />
          </Button>
          <Button fab color="primary" aria-label="add">
            <AddIcon />
          </Button>
        </FullscreenSideMenu>
      </div>
    );
  });