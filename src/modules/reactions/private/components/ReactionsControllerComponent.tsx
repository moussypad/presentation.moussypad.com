import * as React from 'react';
import ReactionFlowComponent, { ReactionFlowT } from './ReactionFlowComponent';
export { ReactionFlowT };

export type ReactionFlowStaticParamsT = {
  top: number,
  depth: number,
  size: number,
  duration: number,
  delay: number,
};

export type ReactionFlowDynamicParamsT = {
  id: string;
  type: 'Like' | 'Happy' | 'Angry';
  pathFactors: [number, number, number, number, number]
};

type ChannelT = {
  isIdle: boolean;
  reactionFlow: ReactionFlowT;
};

type PropsT = {
  reactionFlowStaticParams: ReactionFlowStaticParamsT;
  reactionFlowsDynamicParams: ReactionFlowDynamicParamsT[];
};

class ReactionsControllerComponent extends React.PureComponent<PropsT> {
  private channels: ChannelT[] = [];

  constructor(props: PropsT) {
    super(props);
    this.setChannels(props.reactionFlowsDynamicParams);
  }

  componentWillUpdate(nextProps: Readonly<PropsT>) {
    this.setChannels(nextProps.reactionFlowsDynamicParams);
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
      <div>
        {display}
      </div>
    );
  }

  private handleAnimationComplete = (index: number) => {
    return () => this.channels[index].isIdle = true;
  }

  private setChannels(reactionFlowsDynamicParams: ReactionFlowDynamicParamsT[]) {
    const { reactionFlowStaticParams } = this.props;
    reactionFlowsDynamicParams.map(reactionFlowDynamicParams => {
      const reactionFlow: ReactionFlowT = { ...reactionFlowDynamicParams, ...reactionFlowStaticParams };
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