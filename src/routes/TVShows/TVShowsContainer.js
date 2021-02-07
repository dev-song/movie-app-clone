import React from 'react';
import TVShowsPresenter from './TVShowsPresenter';

import { TV_API } from '../../api';

class TVShowsContainer extends React.Component {
  state = {
    topRated: null,
    popular: null,
    airingToday: null,
    error: null,
    loading: true
  };

  async componentDidMount() {
    try {
      const topRated = await this.getTopRated();
      const airingToday = await this.getAiringToday();
      const popular = await this.getPopular();

      this.setState({
        topRated,
        airingToday,
        popular
      });
    } catch {
      this.setState({ error: `Can't get TV shows :(` });
    } finally {
      this.setState({ loading: false });
    }
  }

  async getTopRated() {
    const {
      data: { results: topRated }
    } = await TV_API.topRated();
    return topRated;
  }

  async getAiringToday() {
    const {
      data: { results: airingToday }
    } = await TV_API.airingToday();
    return airingToday;
  }

  async getPopular() {
    const {
      data: { results: popular }
    } = await TV_API.popular();
    return popular;
  }

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