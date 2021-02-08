import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Section from '../../components/Section';
import Loader from '../../components/Loader';
import Message from '../../components/Message';

const Container = styled.div`
  padding: 0px 10px;
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
              {movieResults.map(({ id, title }) => (
                <span key={id}>{title}</span>
              ))}
            </Section>
          )}
          {tvResults && tvResults.length > 0 && (
            <Section title="TV Show Results">
              {tvResults.map(({ id, name }) => (
                <span key={id}>{name}</span>
              ))}
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