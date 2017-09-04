import * as React from 'react';
import { TypeT } from './ReactionFlowComponent';

type PropsT = {
  onClick: (type: TypeT) => void;
};

class ReactionsPanelComponent extends React.PureComponent<PropsT> {
  render() {
    const { onClick } = this.props;
    return (
      <div style={{ display: 'inline-block' }}>
        <img src={require('../assets/Like.svg')} style={{ width: 50, padding: 10, cursor: 'pointer' }} onClick={() => onClick('Like')} alt="Like" />
        <img src={require('../assets/Happy.svg')} style={{ width: 50, padding: 10, cursor: 'pointer' }} onClick={() => onClick('Happy')} alt="Happy" />
        <img src={require('../assets/Angry.svg')} style={{ width: 50, padding: 10, cursor: 'pointer' }} onClick={() => onClick('Angry')} alt="Angry" />
      </div >
    );
  }
}

export default ReactionsPanelComponent;