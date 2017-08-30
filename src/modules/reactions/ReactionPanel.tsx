import * as React from 'react';
import { v4 } from 'node-uuid';
import ReactionThroughputControllerComponent, { FlowT } from './private/components/ReactionThroughputControllerComponent';

// tslint:disable-next-line:no-any
const like = require('./private/assets/Like.svg') as any;
// tslint:disable-next-line:no-any
const happy = require('./private/assets/Happy.svg') as any;
// tslint:disable-next-line:no-any
const angry = require('./private/assets/Angry.svg') as any;

type PropsT = {
  top: number,
  depth: number,
  size: number,
  duration: number
};

type StateT = {
  flows: FlowT[];
};

class ReactionPanel extends React.PureComponent<PropsT, StateT> {
  constructor(props: PropsT) {
    super(props);
    this.state = {
      flows: []
    };
  }

  render() {
    const { flows } = this.state;
    return (
      <div style={{ display: 'inline-block' }}>
        <ReactionThroughputControllerComponent flows={flows} />
        <img src={like} style={{ width: 50, padding: 10 }} onClick={this.handleClick('Like')} alt="Like" />
        <img src={happy} style={{ width: 50, padding: 10 }} onClick={this.handleClick('Happy')} alt="Happy" />
        <img src={angry} style={{ width: 50, padding: 10 }} onClick={this.handleClick('Angry')} alt="Angry" />
      </div >
    );
  }

  private handleClick = (type: 'Like' | 'Happy' | 'Angry') => {
    const { top, depth, size, duration } = this.props;
    return () => {
      this.setState({
        flows: [
          {
            uid: v4(),
            type,
            top,
            depth,
            size,
            delay: 0,
            duration,
            pathFactors: [Math.random(), Math.random(), Math.random(), Math.random(), Math.random()]
          }
        ]
      });
    };
  }
}

// function staggeringFlow(top: number, depth: number, size: number, duration: number, type: 'Like' | 'Happy' | 'Angry'): FlowT[] {
//   const rands: [number, number, number, number, number] = [Math.random(), Math.random(), Math.random(), Math.random(), Math.random()];
//   const flows: FlowT[] = [];
//   Array(30).fill(0).map((_, i) => {
//     flows.unshift({
//       uid: v4(),
//       type,
//       top,
//       depth,
//       size,
//       delay: i * 100,
//       duration,
//       pathFactors: rands
//     });
//   });
//   return flows;
// }

export default ReactionPanel;