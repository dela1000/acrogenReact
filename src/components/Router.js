import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Selector from './Selector';
import Flow from './Flow';
import NotFound from './NotFound';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" render={() => (
          <Redirect to="/selector"/>
      )}/>
      <Route exact path="/selector" component={ Selector } /> 
      <Route path="/flow/:randomIndexPositions" component={ Flow } />
      <Route component={ NotFound } />
    </Switch>
  </BrowserRouter>
);

export default Router;