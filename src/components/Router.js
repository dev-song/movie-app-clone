import React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';

import Header from './Header';
import Home from '../routes/Home';
import TVShows from '../routes/TVShows';
import Search from '../routes/Search';
import Detail from '../routes/Detail';

const Router = () => (
  <HashRouter>
    <Header />
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/tvshows' component={TVShows} />
      <Route path='/search' component={Search} />
      <Route path='/movie/:id' component={Detail} />
      <Route path='/tvshow/:id' component={Detail} />
      <Redirect from='*' to='/' />
    </Switch>
  </HashRouter>
);

export default Router;