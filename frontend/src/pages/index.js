import { memo } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Layout from '../components/Layout';
import Home from './home';
import Notes from './notes';
import Likes from './likes';

const Pages = () => {
  return (
    <Router>
      <Layout>
        <Route exact path="/" component={Home} />
        <Route exact path="/notes" component={Notes} />
        <Route exact path="/likes" component={Likes} />
      </Layout>
    </Router>
  );
};

export default memo(Pages);
