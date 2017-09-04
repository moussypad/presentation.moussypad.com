import * as React from 'react';
import { gql, withApollo, ApolloClient, Subscription } from 'react-apollo';
import ReactionsControllerComponent, { ReactionFlowEffectT, ReactionFlowT } from './private/components/ReactionsControllerComponent';

type OwnPropsT = {
  top: number,
  depth: number,
  size: number,
  duration: number,
  delay: number
};

type ResponseT = {
  reactionFlowEffect: ReactionFlowEffectT
};

type PropsT = OwnPropsT & { client: ApolloClient };

type StateT = { reactionFlows: ReactionFlowT[] };

class ReactionsController extends React.PureComponent<PropsT, StateT> {
  state = { reactionFlows: [] };

  private subscription: Subscription;

  componentDidMount() {
    this.subscription = this.props.client.subscribe({
      query: gql`
        subscription {
          ReactionFlowEffect(
            filter: {
              mutation_in: [CREATED]
            }
          ) {
            mutation
            node {
              id
              type
              pathFactors
            }
          }
        }
      `
    }).subscribe({      
      next: data => {
        const { top, depth, size, duration, delay } = this.props;
        this.setState({
          reactionFlows: [{ top, depth, size, duration, delay, ...data.ReactionFlowEffect.node }]
        });
      },
      error: error => {
        console.error('Subscription callback with error: ', error);
      },
    });
  }

  componentWillUnmount() { this.subscription.unsubscribe(); }

  render() {
    const { reactionFlows } = this.state;
    return <ReactionsControllerComponent reactionFlows={reactionFlows} />;
  }
}

export default withApollo<PropsT, ResponseT>(ReactionsController);