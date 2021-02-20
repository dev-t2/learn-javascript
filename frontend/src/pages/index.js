import { memo } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Layout from '../components/Layout';
import HomePage from './home';
import SignUpPage from './signup';
import Notes from './notes';
import Likes from './likes';
import NotePage from './note';

const Pages = () => {
  return (
    <Router>
      <Layout>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/signup" component={SignUpPage} />
        <Route exact path="/notes" component={Notes} />
        <Route exact path="/likes" component={Likes} />
        <Route path="/note/:id" component={NotePage} />
      </Layout>
    </Router>
  );
};

export default memo(Pages);
