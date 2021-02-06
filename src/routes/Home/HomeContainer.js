import React from 'react';
import HomePresenter from './HomePresenter';

class HomeContainer extends React.Component {
  state = {
    nowPlaying: null,
    upcoming: null,
    popular: null,
    error: null,
    loading: null
  };

  render() {
    const { nowPlaying, upcoming, popular, error, loading } = this.state;

    return (
      <HomePresenter
        {...{ nowPlaying, upcoming, popular, error, loading }}
      />
    );
  }
}

export default HomeContainer;