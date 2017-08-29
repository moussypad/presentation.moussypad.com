import * as React from 'react';
import { storiesOf } from '@storybook/react';
import GoogleSlides from '../../../GoogleSlides';

storiesOf('GoogleSlides', module)
  .add('<GoogleSlides />', () => {
    return (
      <GoogleSlides
        style={{ width: 400, height: 400 }}
        id="google@1AmsefLlotWWvp_uC-p2urXpDvu8Vh5fxQPv4-zGuBOM"
      />
    );
  });