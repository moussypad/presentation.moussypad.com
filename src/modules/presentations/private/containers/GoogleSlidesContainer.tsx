import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { RootStateT } from '../../reduxConnect';
import { actionCreators } from '../redux/player.actions';
import { PlayerStateT } from '../redux/player.reducers';

type StateToPropsT = {
  playerState: PlayerStateT
};

type DispatchToPropsT = {
  exitPresentation: () => void;
};

type PropsT = StateToPropsT & DispatchToPropsT;

class GoogleSlidesContainer extends React.Component<PropsT> {
  private iframeRef: HTMLIFrameElement | null;
  private imgRef: HTMLImageElement | null;
  private progressRef: HTMLDivElement | null;

  componentDidMount() {
    this.iframeRef!.onload = () => {
      this.iframeRef!.style.display = 'block';
      this.imgRef!.style.display = 'block';
      this.progressRef!.style.display = 'none';
      this.iframeRef!.focus();
    };
  }

  shouldComponentUpdate(nextProps: Readonly<PropsT>) {
    if (this.props.playerState.id !== nextProps.playerState.id) {
      this.iframeRef!.style.display = 'none';
      this.imgRef!.style.display = 'none';
      this.progressRef!.style.display = 'flex';
      return true;
    }
    this.iframeRef!.focus();
    return false;
  }

  componentDidUpdate() {
    this.iframeRef!.focus();
  }

  render() {
    const { playerState, exitPresentation } = this.props;
    const { id } = playerState;
    return (
      <div style={{ width: '100%', height: '100%' }}>
        <iframe
          style={{ width: '100%', height: '100%' }}
          ref={el => this.iframeRef = el}
          src={id ? `https://docs.google.com/presentation/d/${id.split('@')[1]}/embed` : ''}
          frameBorder={0}
        />
        <img
          ref={el => this.imgRef = el}
          style={{ position: 'absolute', bottom: 2, left: 272, width: 26, height: 26, backgroundColor: '#323232' }}
          src={require('../assets/exit.png')}
          alt="exit"
          onClick={exitPresentation}
        />
        <div
          style={{ justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}
          ref={el => this.progressRef = el}
        >
          <h1 style={{ fontStyle: 'italic' }}>Loading...</h1>
        </div>
      </div >
    );
  }
}

const mapStateToProps = (appState: RootStateT) => ({
  playerState: appState.presentationSuite.playerState
});

const mapDispatchToProps = (dispatch: Dispatch<{}>) => ({
  exitPresentation: () => dispatch(actionCreators.exitPresentation())
});

export default connect<StateToPropsT, DispatchToPropsT, null>(mapStateToProps, mapDispatchToProps)(GoogleSlidesContainer);