import React from 'react';
import SearchPresenter from './SearchPresenter';

import { MOVIE_API, TV_API } from '../../api';

class SearchContainer extends React.Component {
  state = {
    movieResults: null,
    tvResults: null,
    searchTerm: '',
    error: null,
    loading: false
  };

  async searchByTerm() {
    const { searchTerm } = this.state;
    try {
      this.setState({ loading: true });

      const movieResults = await this.getMovieResults(searchTerm);
      const TVResults = await this.getTVResults(searchTerm);
      this.setState({
        movieResults,
        TVResults
      });
    } catch {
      this.setState({ error: `Can't find results :(` });
    } finally {
      this.setState({ loading: false });
    }
  }

  async getMovieResults(keyword) {
    const {
      data: { results: movieResults }
    } = await MOVIE_API.search(keyword);
    return movieResults;
  }

  async getTVResults(keyword) {
    const {
      data: { results: TVResults }
    } = await TV_API.search(keyword);
    return TVResults;
  }

  handleSubmit() {
    const { searchTerm } = this.state;
    if (searchTerm === '') return;

    this.searchByTerm();
  }

  render() {
    const { movieResults, tvResults, searchTerm, error, loading } = this.state;

    return (
      <SearchPresenter
        handleSubmit={this.handleSubmit}
        {...{ movieResults, tvResults, searchTerm, error, loading, }}
      />
    )
  }
}

export default SearchContainer;