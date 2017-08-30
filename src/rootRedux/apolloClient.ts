import { ApolloClient, createNetworkInterface } from 'react-apollo';

export const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'https://api.graph.cool/simple/v1/cj535s89photj0196ijnhduu6',
  }),
});