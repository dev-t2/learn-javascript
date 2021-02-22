import { memo } from 'react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import { useReactiveVar } from '@apollo/client';

import { isLoggedInVar } from '../apollo';
import Layout from '../components/Layout';
import HomePage from './home';
import SignUpPage from './signup';
import NotesPage from './notes';
import LikesPage from './likes';
import NotePage from './note';

const Pages = () => {
  const isLoggedIn = useReactiveVar(isLoggedInVar);

  return (
    <Router>
      <Layout>
        <Route exact path="/" component={HomePage} />

        {isLoggedIn ? (
          <>
            <Route exact path="/signup" component={SignUpPage} />
            <Route exact path="/notes" component={NotesPage} />
            <Route exact path="/likes" component={LikesPage} />
            <Route path="/note/:id" component={NotePage} />
          </>
        ) : (
          <Redirect to="/" />
        )}
      </Layout>
    </Router>
  );
};

export default memo(Pages);
