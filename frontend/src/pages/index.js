import { memo } from 'react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import { useReactiveVar } from '@apollo/client';

import { isLoggedInVar } from '../apollo';
import Layout from '../components/Layout';
import Home from './home';
import SignUp from './signup';
import Create from './create';
import Notes from './notes';
import Likes from './likes';
import Note from './note';
import Update from './update';

const Index = () => {
  const isLoggedIn = useReactiveVar(isLoggedInVar);

  return (
    <Router>
      <Layout>
        <Route exact path="/" component={Home} />

        {isLoggedIn ? (
          <>
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/create" component={Create} />
            <Route exact path="/notes" component={Notes} />
            <Route exact path="/likes" component={Likes} />
            <Route path="/note/:id" component={Note} />
            <Route path="/update/:id" component={Update} />
          </>
        ) : (
          <Redirect to="/" />
        )}
      </Layout>
    </Router>
  );
};

export default memo(Index);
