import * as React from 'react';
import { gql, graphql, ChildProps } from 'react-apollo';
import ReactionsControllerComponent, { ReactionFlowDynamicParamsT } from './private/components/ReactionsControllerComponent';
import ReactionsPanelComponent from './private/components/ReactionsPanelComponent';

type ResponseT = {
  createReactionFlow: {
    id: string;
  }
};

type PropsT = ChildProps<{}, ResponseT>;

type StateT = {
  reactionFlowsDynamicParams: ReactionFlowDynamicParamsT[];
};

class ReactionsPanel extends React.PureComponent<PropsT, StateT> {
  state = { reactionFlowsDynamicParams: [] };

  render() {
    const { reactionFlowsDynamicParams } = this.state;
    return (
      <div style={{ display: 'inline-block' }}>
        <ReactionsControllerComponent
          reactionFlowStaticParams={{ top: 0, depth: 30, size: 3, duration: 5000, delay: 0 }}
          reactionFlowsDynamicParams={reactionFlowsDynamicParams}
        />
        <ReactionsPanelComponent onClick={this.handleClick} />
      </div >
    );
  }

  private handleClick = (type: 'Like' | 'Happy' | 'Angry') => {
    const reactionFlowDynamicParamsWithoutId = {
      type,
      pathFactors: [Math.random(), Math.random(), Math.random(), Math.random(), Math.random()] as [number, number, number, number, number]
    };
    this.props.mutate!({
      variables: reactionFlowDynamicParamsWithoutId
    })
      .then(({ data }) => this.setState({ reactionFlowsDynamicParams: [{ id: data.createReactionFlow.id, ...reactionFlowDynamicParamsWithoutId }] }));
  }
}

const submitReaction = gql`
  mutation createReactionFlow(
    $type: String!,
    $pathFactors: [Float!]!
  ) {
    createReactionFlow(
      type: $type,
      pathFactors: $pathFactors
    ) {
      id
    }
  }
`;

export default graphql<Response, {}, PropsT>(submitReaction)(ReactionsPanel);

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