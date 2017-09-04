import * as React from 'react';
import { connect } from 'react-redux';
import { PlayerStateT } from '../redux/player.reducers';
import { RootStateT } from '../../reduxConnect';

import GoogleSlidesContainer from './GoogleSlidesContainer';
import FullscreenSideMenuContainer from './FullscreenSideMenuContainer';
import ReactionsController from '../../../../modules/reactions/ReactionsController';

type StateToPropsT = {
  playerState: PlayerStateT
};

class PlayerContentContainer extends React.PureComponent<StateToPropsT> {
  render() {
    const { isPlaying, isReactionFlowsActive } = this.props.playerState;
    return (
      <div style={{ width: '100vw', height: '100vh' }}>
        <GoogleSlidesContainer />
        {isPlaying && isReactionFlowsActive && <ReactionsController top={70} depth={30} size={3} duration={5000} delay={0} />}
        <FullscreenSideMenuContainer />
      </div>
    );
  }
}

const mapStateToProps = (appState: RootStateT) => ({
  playerState: appState.presentationSuite.playerState
});

export default connect(mapStateToProps)(PlayerContentContainer);