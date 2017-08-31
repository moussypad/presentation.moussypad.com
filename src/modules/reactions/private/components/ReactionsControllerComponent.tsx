import * as React from 'react';
import ReactionFlowComponent, { ReactionFlowT } from './ReactionFlowComponent';
export { ReactionFlowT };

type ChannelT = {
  isIdle: boolean;
  reactionFlow: ReactionFlowT;
};

type PropsT = { reactionFlows: ReactionFlowT[] };

class ReactionsControllerComponent extends React.PureComponent<PropsT> {
  private channels: ChannelT[] = [];

  constructor(props: PropsT) {
    super(props);
    this.setChannels(props.reactionFlows);
  }

  componentWillUpdate(nextProps: Readonly<PropsT>) {
    this.setChannels(nextProps.reactionFlows);
  }

  render() {
    const display = this.channels.map((channel, index) => {
      const { id, type, top, depth, size, delay, duration, pathFactors } = channel.reactionFlow;
      const reactionFlow: ReactionFlowT = {
        id,
        type,
        top,
        depth,
        size,
        delay,
        duration,
        pathFactors
      };
      return <ReactionFlowComponent key={index} reactionFlow={reactionFlow} onAnimationComplete={this.handleAnimationComplete(index)} />;
    });

    return (
      <div style={{ pointerEvents: 'none' }}>
        {display}
      </div>
    );
  }

  private handleAnimationComplete = (index: number) => {
    return () => this.channels[index].isIdle = true;
  }

  private setChannels(reactionFlows: ReactionFlowT[]) {
    reactionFlows.map(reactionFlow => {
      const idleIndex = this.channels.findIndex(channel => channel.isIdle === true);

      if (idleIndex === -1) {
        // unable to find idle flow
        this.channels.push({ isIdle: false, reactionFlow });
      } else {
        // reuse idle channel to reduce dom creation
        this.channels[idleIndex] = { isIdle: false, reactionFlow };
      }
    });
  }
}

export default ReactionsControllerComponent;