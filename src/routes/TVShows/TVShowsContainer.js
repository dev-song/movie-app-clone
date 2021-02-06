import React from 'react';
import TVShowsPresenter from './TVShowsPresenter';

class TVShowsContainer extends React.Component {
  state = {
    topRated: null,
    popular: null,
    airingToday: null,
    error: null,
    loading: null
  };

  render() {
    const { topRated, popular, airingToday, error, loading } = this.state;

    return (
      <TVShowsPresenter
        {...{ topRated, popular, airingToday, error, loading }}
      />
    )
  }
}

export default TVShowsContainer;