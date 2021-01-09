import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import Home from '../routes/Home';
import TVShows from '../routes/TVShows';
import Search from '../routes/Search';

const Router = () => (
  <BrowserRouter>
    <Route path='/' exact component={Home} />
    <Route path='/tvshows' component={TVShows} />
    <Route path='/search' component={Search} />
  </BrowserRouter>
);

export default Router;