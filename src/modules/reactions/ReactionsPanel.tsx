import * as React from 'react';
import { gql, graphql, ChildProps } from 'react-apollo';
import ReactionsControllerComponent, { ReactionFlowT } from './private/components/ReactionsControllerComponent';
import ReactionsPanelComponent from './private/components/ReactionsPanelComponent';

type OwnPropsT = {
  top: number,
  depth: number,
  size: number,
  duration: number
};

type ResponseT = {
  createReactionFlow: {
    id: string;
  }
};

type PropsT = ChildProps<OwnPropsT, ResponseT>;

type StateT = {
  reactionFlows: ReactionFlowT[];
};

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
    const { top, depth, size, duration } = this.props;
    const preFlow = {
      type,
      top,
      depth,
      size,
      delay: 0,
      duration,
      pathFactors: [Math.random(), Math.random(), Math.random(), Math.random(), Math.random()] as [number, number, number, number, number]
    };
    this.props.mutate!(
      {
        variables: preFlow
      }
    )
      .then(({ data }) => this.setState({ reactionFlows: [{ id: data.createReactionFlow.id, ...preFlow }] }));
  }
}

const submitReaction = gql`
  mutation createReactionFlow(
    $type: String!,
    $top: Int!,
    $depth: Int!,
    $size: Int!,
    $delay: Int!,
    $duration: Int!,
    $pathFactors: [Float!]!
  ) {
    createReactionFlow(
      type: $type, 
      top: $top,
      depth: $depth,
      size: $size,
      delay: $delay,
      duration: $duration,
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