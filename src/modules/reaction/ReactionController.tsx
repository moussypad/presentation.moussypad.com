import * as React from 'react';
import ReactionFlow, { ParamsT as ReactionFlowParamsT } from './private/ReactionFlow';

export type ReactionTypeT = 'Like' | 'Happy' | 'Angry';

export type ManifestT = {
  uid: string,
  reactionType: ReactionTypeT,
  factors: [number, number, number, number, number]
};

export type ConfigT = {
  duration: number;
  top: number;
  height: number;
  size: number;
};

type ChannelT = {
  isIdle: boolean;
  manifest: ManifestT;
};

type PropsT = {
  manifests: ManifestT[];
  config: ConfigT;
};

class ReactionController extends React.Component<PropsT> {
  // private flows: { uid: string, idle: boolean, reaction: string }[] = [];
  // private reactionFlows: { isIdle: boolean, manifest: ManifestT }[];
  private channels: ChannelT[] = [];
  private config: ConfigT;

  constructor(props: PropsT) {
    super(props);
    this.setChannels(props.manifests);
    this.config = props.config;
  }
  // only mutate manifest to trigger render
  shouldComponentUpdate(nextProps: Readonly<PropsT>) {
    return this.props.manifests !== nextProps.manifests;
  }

  componentWillUpdate(nextProps: Readonly<PropsT>) {
    this.setChannels(nextProps.manifests);
  }

  render() {
    // const { uid, type, factors } = this.props.manifests;
    const { duration, top, height, size } = this.config;

    const display = this.channels.map((channel, index) => {
      const { uid, reactionType, factors } = channel.manifest;
      const params: ReactionFlowParamsT = {
        uid,
        duration,
        top,
        height,
        size,
        startTopFactor: factors[0],
        startLeftFactor: factors[1],
        translateY50Factor: factors[2],
        translateYUpDownFactor: factors[3],
        translateX100Factor: factors[4],
      };
      return (
        <ReactionFlow key={index} params={params} onAnimationComplete={this.handleAnimationComplete(index)}>
          <img src={require(`./private/assets/${reactionType}.svg`)} alt={reactionType} />
        </ReactionFlow>
      );
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

  private setChannels(manifests: ManifestT[]) {
    manifests.map(manifest => {
      const idleIndex = this.channels.findIndex(reactionFlow => reactionFlow.isIdle === true);

      if (idleIndex === -1) {
        // unable to find idle flow
        this.channels.push({ isIdle: false, manifest });
      } else {
        // reuse idle flow to prevent recreating dom
        this.channels[idleIndex] = { isIdle: false, manifest };
      }
    });
  }
}

export default ReactionController;