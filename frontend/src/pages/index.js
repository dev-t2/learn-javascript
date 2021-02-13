import { memo } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './home';
import Notes from './notes';
import Likes from './likes';

const Pages = () => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/notes" component={Notes} />
      <Route exact path="/likes" component={Likes} />
    </Router>
  );
};

export default memo(Pages);
