import * as React from 'react';
import PlayArrow from 'material-ui-icons/PlayArrow';
import { PresentationT } from '../redux/models';

type PropsT = {
  presentation: PresentationT;
};

type StateT = {
  onHover: boolean;
};

class PresentationItemComp extends React.PureComponent<PropsT, StateT> {
  state = { onHover: false };

  render() {
    const { presentation } = this.props;
    const { onHover } = this.state;
    return (
      <div
        style={{ position: 'relative', width: '100%', height: '100%' }}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <img
          style={{ width: '100%', height: '100%' }}
          src={presentation.thumbnailURL}
          alt="presentation thumbnail"
        />
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <PlayArrow style={{ width: '60%', height: '60%', opacity: onHover ? 0.8 : 0 }} />
        </div>
      </div>
    );
  }

  handleMouseEnter = () => this.setState({ onHover: true });
  handleMouseLeave = () => this.setState({ onHover: false });
}

export default PresentationItemComp;