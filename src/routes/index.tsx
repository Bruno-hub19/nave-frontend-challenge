import React from 'react';
import { Switch } from 'react-router-dom';

import { Route } from './Route';
import { SignIn } from '../pages/SignIn';
import { Home } from '../pages/Home';
import { AddNaver } from '../pages/AddNaver';
import { EditNaver } from '../pages/EditNaver';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={SignIn} />

    <Route path="/home" component={Home} isPrivate />
    <Route path="/add-naver" component={AddNaver} isPrivate />
    <Route path="/edit-naver" component={EditNaver} isPrivate />
  </Switch>
);

export { Routes };
