import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Section from '../../components/Section';
import Loader from '../../components/Loader';
import Message from '../../components/Message';
import Poster from '../../components/Poster';

const Container = styled.div`
  padding: 20px;
`;

const Form = styled.form`
  width: 100%;
  margin-bottom: 48px;
`;

const Input = styled.input`
  all: unset;
  width: 100%;
  font-size: 32px;
`;

const SearchPresenter = ({
  movieResults,
  tvResults,
  searchTerm,
  error,
  loading,
  handleSubmit,
  updateSearchTerm
}) => (
  <Container>
    <Form onSubmit={handleSubmit}>
      <Input
        placeholder='Search Movies or TV Shows...'
        value={searchTerm}
        onChange={updateSearchTerm}
      />
    </Form>
    {loading
      ? <Loader />
      : (
        <>
          {movieResults && movieResults.length > 0 && (
            <Section title="Movie Results">
              {movieResults.map(({ id, original_title, poster_path, vote_average, release_date }) =>
                <Poster
                  key={id}
                  id={id}
                  title={original_title}
                  imageUrl={poster_path}
                  rating={vote_average}
                  year={release_date && release_date.substring(0, 4)}
                  isMovie={true}
                />
              )}
            </Section>
          )}
          {tvResults && tvResults.length > 0 && (
            <Section title="TV Show Results">
              {tvResults.map(({ id, original_name, poster_path, vote_average, first_air_date }) =>
                <Poster
                  key={id}
                  id={id}
                  title={original_name}
                  imageUrl={poster_path}
                  rating={vote_average}
                  year={first_air_date && first_air_date.substring(0, 4)}
                />
              )}
            </Section>
          )}
        </>
      )}
    {error && <Message text={error} color='#e74c3c' />}
    {movieResults && tvResults && movieResults.length === 0 && tvResults.length === 0 && (
      <Message text='Nothing found' color='#95a5a6' />
    )}
  </Container>
);

SearchPresenter.propTypes = {
  movieResults: PropTypes.array,
  tvResults: PropTypes.array,
  searchTerm: PropTypes.string,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  updateSearchTerm: PropTypes.func.isRequired,
}

export default SearchPresenter;