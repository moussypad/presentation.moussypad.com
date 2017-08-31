import { ApolloClient, createNetworkInterface } from 'react-apollo';
import { SubscriptionClient, addGraphQLSubscriptions } from 'subscriptions-transport-ws';

// Create a normal network interface:
const networkInterface = createNetworkInterface({
  uri: 'https://api.graph.cool/simple/v1/cj6z1hcm611o30134pfotkxyr',
});

const wsClient = new SubscriptionClient(`wss://subscriptions.ap-northeast-1.graph.cool/v1/cj6z1hcm611o30134pfotkxyr`, {
  reconnect: true
});

// Extend the network interface with the WebSocket
const networkInterfaceWithSubscriptions = addGraphQLSubscriptions(
  networkInterface,
  wsClient
);
// Finally, create your ApolloClient instance with the modified network interface
export const client = new ApolloClient({
  networkInterface: networkInterfaceWithSubscriptions
});