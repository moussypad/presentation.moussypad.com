import * as React from 'react';
import { v4 } from 'node-uuid';
import ReactionController, { ManifestT, ConfigT, ReactionTypeT } from './ReactionController';

// tslint:disable-next-line:no-any
const like = require('./private/assets/Like.svg') as any;
// tslint:disable-next-line:no-any
const happy = require('./private/assets/Happy.svg') as any;
// tslint:disable-next-line:no-any
const angry = require('./private/assets/Angry.svg') as any;

type PropsT = {
  config: ConfigT;
};

type StateT = {
  manifests: ManifestT[];
};

class ReactionPanel extends React.Component<PropsT, StateT> {
  private config: ConfigT;

  constructor(props: PropsT) {
    super(props);
    this.config = props.config;
    this.state = {
      manifests: []
    };
  }

  shouldComponentUpdate(nextProps: Readonly<PropsT>, nextState: Readonly<StateT>) {
    return this.state.manifests !== nextState.manifests;
  }

  render() {
    // const { style } = this.props;
    return (
      <div style={{ display: 'inline-block' }}>
        <ReactionController
          manifests={this.state.manifests}
          config={this.config}
        />
        <img src={like} style={{ width: 50, padding: 10 }} onClick={this.handleClick('Like')} alt="Like" />
        <img src={happy} style={{ width: 50, padding: 10 }} onClick={this.handleClick('Happy')} alt="Happy" />
        <img src={angry} style={{ width: 50, padding: 10 }} onClick={this.handleClick('Angry')} alt="Angry" />
      </div >
    );
  }

  private handleClick = (reactionType: ReactionTypeT) => {
    return () => {
      this.setState({
        manifests: [{
          uid: v4(),
          reactionType,
          factors: [Math.random(), Math.random(), Math.random(), Math.random(), Math.random()]
        }]
      });
    };
  }
}

export default ReactionPanel;