import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Import from '../pages/Import';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Import} />
  </Switch>
);

export default Routes;
