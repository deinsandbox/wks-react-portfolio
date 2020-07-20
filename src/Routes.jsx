import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from 'react-router-dom';

import Home from './components/pages/Home/Home';
import Article from './components/pages/Blog/Article';

const Routes = () => {
  const history = useHistory();

  return (
    <Router>
      <Switch history={history}>
        <Route exact path="/" component={Home} />
        <Route exact path="/article/:id" component={Article} />
      </Switch>
    </Router>
  );
};

export default Routes;
