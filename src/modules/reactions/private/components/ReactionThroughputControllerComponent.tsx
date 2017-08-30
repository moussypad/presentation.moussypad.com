import * as React from 'react';
import ReactionFlowComponent, { FlowT } from './ReactionFlowComponent';
export { FlowT };

type ChannelT = {
  isIdle: boolean;
  flow: FlowT;
};

type PropsT = {
  flows: FlowT[];
};

class ReactionThroughputControllerComponent extends React.PureComponent<PropsT> {
  private channels: ChannelT[] = [];

  constructor(props: PropsT) {
    super(props);
    this.setChannels(props.flows);
  }

  componentWillUpdate(nextProps: Readonly<PropsT>) {
    this.setChannels(nextProps.flows);
  }

  render() {
    const display = this.channels.map((channel, index) => {
      const { uid, type, top, depth, size, delay, duration, pathFactors } = channel.flow;
      const flow: FlowT = {
        uid,
        type,
        top,
        depth,
        size,
        delay,
        duration,
        pathFactors
      };
      return <ReactionFlowComponent key={index} flow={flow} onAnimationComplete={this.handleAnimationComplete(index)} />;
    });

    return (
      <div>
        {display}
      </div>
    );
  }

  private handleAnimationComplete = (index: number) => {
    return () => this.channels[index].isIdle = true;
  }

  private setChannels(flows: FlowT[]) {
    flows.map(flow => {
      const idleIndex = this.channels.findIndex(reactionFlow => reactionFlow.isIdle === true);

      if (idleIndex === -1) {
        // unable to find idle flow
        this.channels.push({ isIdle: false, flow });
      } else {
        // reuse idle channel to reduce dom creation
        this.channels[idleIndex] = { isIdle: false, flow };
      }
    });
  }
}

export default ReactionThroughputControllerComponent;