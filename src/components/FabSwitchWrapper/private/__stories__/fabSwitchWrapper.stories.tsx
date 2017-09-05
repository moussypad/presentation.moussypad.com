import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, } from '@storybook/addon-knobs';

import Button from 'material-ui/Button';
import ThumbsUpDown from 'material-ui-icons/Poll';
import FabSwitchWrapper from '../../../FabSwitchWrapper';

storiesOf('FabSwitchWrapper', module)
  .addDecorator(withKnobs)
  .add('<FabSwitchWrapper />', () => (
    <FabSwitchWrapper on={boolean('on', false)}>
      <Button fab color="primary" aria-label="add">
        <ThumbsUpDown />
      </Button>
    </FabSwitchWrapper>
  ));