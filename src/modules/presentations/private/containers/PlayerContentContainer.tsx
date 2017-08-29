import * as React from 'react';

import GoogleSlidesContainer from './GoogleSlidesContainer';
import FullscreenSideMenuContainer from './FullscreenSideMenuContainer';

class PlayerContentContainer extends React.PureComponent {
  render() {
    return (
      <div style={{ width: '100vw', height: '100vh' }}>
        <GoogleSlidesContainer />
        <FullscreenSideMenuContainer />
      </div>
    );
  }
}

export default PlayerContentContainer;