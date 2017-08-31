import * as React from 'react';
import { gql, graphql, ChildProps } from 'react-apollo';
import ReactionsControllerComponent, { ReactionFlowT } from './private/components/ReactionsControllerComponent';
import ReactionsPanelComponent from './private/components/ReactionsPanelComponent';

type OwnPropsT = {
  top: number,
  depth: number,
  size: number,
  duration: number,
  delay: number
};

type ResponseT = {
  createReactionFlowVariables: {
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

  private handleClick = (type: 'Like' | 'Happy' | 'Angry') => {
    const { top, depth, size, duration, delay } = this.props;
    const reactionFlowVariables = {
      type,
      pathFactors: [Math.random(), Math.random(), Math.random(), Math.random(), Math.random()] as [number, number, number, number, number]
    };
    this.props.mutate!({
      variables: reactionFlowVariables
    })
      .then(({ data }) => {
        this.setState({
          reactionFlows: [{ id: data.createReactionFlowVariables.id, top, depth, size, duration, delay, ...reactionFlowVariables }]
        });
      });
  }
}

const submitReaction = gql`
  mutation createReactionFlowVariables(
    $type: String!,
    $pathFactors: [Float!]!
  ) {
    createReactionFlowVariables(
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