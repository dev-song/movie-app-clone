import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Home from '../routes/Home';
import TVShows from '../routes/TVShows';
import Search from '../routes/Search';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/tvshows' component={TVShows} />
      <Route path='/search' component={Search} />
      <Redirect from='*' to='/' />
    </Switch>
  </BrowserRouter>
);

export default Router;