import * as React from 'react';
import ReactionFlow, { ParamsT } from './ReactionFlow';

export type ReactionTypeT = 'Like' | 'Happy' | 'Angry';

export type ManifestT = {
  uid: string,
  reactionType: ReactionTypeT,
  factors: [number, number, number, number, number]
};

export type ConfigT = {
  top: number;
  depth: number;
  size: number;
  delay: number;
  duration: number;
};

type ChannelT = {
  isIdle: boolean;
  manifest: ManifestT;
};

type PropsT = {
  manifests: ManifestT[];
  config: ConfigT;
};

class ReactionController extends React.PureComponent<PropsT> {
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
    const { top, depth, size, delay, duration,  } = this.config;

    const display = this.channels.map((channel, index) => {
      const { uid, reactionType, factors } = channel.manifest;
      const params: ParamsT = {
        uid,
        top,
        depth,
        size,
        delay,
        duration,
        pathFactors: [factors[0], factors[1], factors[2], factors[3], factors[4]]
      };
      return (
        <ReactionFlow key={index} params={params} onAnimationComplete={this.handleAnimationComplete(index)}>
          <img src={require(`./assets/${reactionType}.svg`)} alt={reactionType} />
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