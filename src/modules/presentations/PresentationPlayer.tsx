import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { RootStateT } from './reduxConnect';
import * as screenfull from 'screenfull';
import { actionCreators } from './private/redux/player.actions';
import { PlayerStateT } from './private/redux/player.reducers';

import PlayerContentContainer from './private/containers/PlayerContentContainer';

type StateToPropsT = {
  playerState: PlayerStateT
};

type DispatchToPropsT = {
  exitPresentation: () => void;
};

type PropsT = StateToPropsT & DispatchToPropsT;

class PresentationPlayer extends React.PureComponent<PropsT> {
  private fullscreenRef: HTMLElement | null;
  private style: React.CSSProperties = { display: 'none' };

  componentDidMount() {
    if (screenfull.enabled) {
      screenfull.on('change', () => {
        if (!screenfull.isFullscreen) {
          this.props.exitPresentation();
        }
      });
    }
  }

  componentWillUpdate(nextProps: Readonly<PropsT>) {
    const { isPlaying } = nextProps.playerState;
    if (isPlaying) {
      if (screenfull.enabled) { 
        screenfull.request(this.fullscreenRef!);
      }
      this.style = { display: 'block' };
    } else {
      if (screenfull.enabled && screenfull.isFullscreen) {
        screenfull.exit();
      }
      this.style = { display: 'none' };
    }
  }

  render() {
    return (
      <div
        ref={el => this.fullscreenRef = el}
        style={this.style}
      >
        <PlayerContentContainer />
      </div>
    );
  }
}

const mapStateToProps = (appState: RootStateT) => ({
  playerState: appState.presentationSuite.playerState
});

const mapDispatchToProps = (dispatch: Dispatch<{}>) => ({
  exitPresentation: () => dispatch(actionCreators.exitPresentation())
});

export default connect<StateToPropsT, DispatchToPropsT, null>(mapStateToProps, mapDispatchToProps)(PresentationPlayer);