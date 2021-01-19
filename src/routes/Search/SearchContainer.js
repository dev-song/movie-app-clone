import React, { useState } from 'react';
import SearchPresenter from './SearchPresenter';

const SearchContainer = () => {
  const [movieResults, setMovieResults] = useState(null);
  const [tvResults, setTvResults] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState(null);
  const [loading, setloading] = useState(false);

  return (
    <SearchPresenter
      {...{ movieResults, tvResults, searchTerm, error, loading }}
    />
  )
}

export default SearchContainer;