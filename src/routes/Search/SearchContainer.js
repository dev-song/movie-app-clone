import React from 'react';
import SearchPresenter from './SearchPresenter';

class SearchContainer extends React.Component {
  state = {
    movieResults: null,
    tvResults: null,
    searchTerm: null,
    error: null,
    loading: null
  };

  render() {
    const { movieResults, tvResults, searchTerm, error, loading } = this.state;

    return (
      <SearchPresenter
        {...{ movieResults, tvResults, searchTerm, error, loading }}
      />
    )
  }
}

export default SearchContainer;