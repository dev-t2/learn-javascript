import { memo } from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import Pages from './pages';

const uri = process.env.REACT_APP_API_URI;
const cache = new InMemoryCache();
const client = new ApolloClient({ uri, cache, connectToDevTools: true });

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Pages />
    </ApolloProvider>
  );
};

export default memo(App);
