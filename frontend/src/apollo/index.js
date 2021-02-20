import { ApolloClient, createHttpLink, InMemoryCache, makeVar } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const token = localStorage.getItem('token');
const httpLink = createHttpLink({ uri: 'http://localhost:4000/api' });

const authLink = setContext((_, { headers }) => ({
  headers: {
    ...headers,
    authorization: token ?? '',
  },
}));

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        isLoggedIn: {
          read() {
            return isLoggedInVar();
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
  connectToDevTools: true,
});

export const isLoggedInVar = makeVar(!!token);

export default client;
