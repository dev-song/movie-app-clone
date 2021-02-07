import React from 'react';
import HomePresenter from './HomePresenter';

import { MOVIE_API } from '../../api';

class HomeContainer extends React.Component {
  state = {
    nowPlaying: null,
    upcoming: null,
    popular: null,
    error: null,
    loading: true
  };

  async componentDidMount() {
    try {
      const nowPlaying = await this.getNowPlaying();
      const upcoming = await this.getUpcoming();
      const popular = await this.getPopular();

      this.setState({
        nowPlaying,
        upcoming,
        popular
      });
    } catch {
      this.setState({ error: `Can't get movies :(` });
    } finally {
      this.setState({ loading: false });
    }
  }

  async getNowPlaying() {
    const {
      data: { results: nowPlaying }
    } = await MOVIE_API.nowPlaying();
    return nowPlaying;
  }

  async getUpcoming() {
    const {
      data: { results: upcoming }
    } = await MOVIE_API.upcoming();
    return upcoming;
  }

  async getPopular() {
    const {
      data: { results: popular }
    } = await MOVIE_API.popular();
    return popular;
  }

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