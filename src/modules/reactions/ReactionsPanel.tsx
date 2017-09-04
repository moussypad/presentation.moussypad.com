import * as React from 'react';
import { gql, graphql, ChildProps } from 'react-apollo';
import ReactionsControllerComponent, { ReactionFlowT, ReactionFlowEffectT, TypeT } from './private/components/ReactionsControllerComponent';
import ReactionsPanelComponent from './private/components/ReactionsPanelComponent';

type OwnPropsT = {
  top: number,
  depth: number,
  size: number,
  duration: number,
  delay: number
};

type ResponseT = {
  createReactionFlowEffect: {
    id: string;
  }
};

type PropsT = ChildProps<OwnPropsT, ResponseT>;

type StateT = { reactionFlows: ReactionFlowT[] };

class ReactionsPanel extends React.PureComponent<PropsT, StateT> {
  state = { reactionFlows: [] };

  render() {
    const { reactionFlows } = this.state;
    return (
      <div style={{ display: 'inline-block' }}>
        <ReactionsControllerComponent reactionFlows={reactionFlows} />
        <ReactionsPanelComponent onClick={this.handleClick} />
      </div >
    );
  }

  private handleClick = (type: TypeT) => {
    const { top, depth, size, duration, delay } = this.props;
    const reactionFlowEffect: ReactionFlowEffectT = {
      type,
      pathFactors: [
        Math.floor((Math.random() * 100) + 1) / 100,
        Math.floor((Math.random() * 100) + 1) / 100,
        Math.floor((Math.random() * 100) + 1) / 100,
        Math.floor((Math.random() * 100) + 1) / 100,
        Math.floor((Math.random() * 100) + 1) / 100
      ]
    };
    this.props.mutate!({
      variables: reactionFlowEffect
    })
      .then(({ data }) => {
        this.setState({
          reactionFlows: [{ id: data.createReactionFlowEffect.id, top, depth, size, duration, delay, ...reactionFlowEffect }]
        });
      });
  }
}

const submitReaction = gql`
  mutation createReactionFlowEffect(
    $type: String!,
    $pathFactors: [Float!]!
  ) {
    createReactionFlowEffect(
      type: $type,
      pathFactors: $pathFactors
    ) {
      id
    }
  }
`;

export default graphql<Response, OwnPropsT, PropsT>(submitReaction)(ReactionsPanel);

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