import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TVShowsPresenter = ({ topRated, popular, airingToday, error, loading }) => {
  return (
    <div>TV Shows</div>
  );
}

TVShowsPresenter.propTypes = {
  topRated: PropTypes.array,
  popular: PropTypes.array,
  airingToday: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired
};

export default TVShowsPresenter;