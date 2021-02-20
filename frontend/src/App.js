import { memo } from 'react';
import { ApolloProvider } from '@apollo/client';

import client from './apollo';
import Pages from './pages';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Pages />
    </ApolloProvider>
  );
};

export default memo(App);
