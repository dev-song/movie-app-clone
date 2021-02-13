import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Helmet } from 'react-helmet';
import Section from '../../components/Section';
import Loader from '../../components/Loader';
import Message from '../../components/Message';
import Poster from '../../components/Poster';

const Container = styled.div`
  padding: 20px;
`;

const HomePresenter = ({ nowPlaying, upcoming, popular, error, loading }) => (
  <>
    <Helmet>
      <title>Movies | Newflix</title>
    </Helmet>

    {loading
      ? <Loader />
      : (
        <Container>
          {nowPlaying && nowPlaying.length > 0 && (
            <Section title='Now Playing'>
              {nowPlaying.map(({ id, original_title, poster_path, vote_average, release_date }) =>
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
          {upcoming && upcoming.length > 0 && (
            <Section title='Upcoming Movies'>
              {upcoming.map(({ id, original_title, poster_path, vote_average, release_date }) =>
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
          {popular && popular.length > 0 && (
            <Section title='Popular Movies'>
              {popular.map(({ id, original_title, poster_path, vote_average, release_date }) =>
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
          {error && <Message text={error} color='#e74c3c' />}
        </Container>
      )}
  </>
);

HomePresenter.propTypes = {
  nowPlaying: PropTypes.array,
  upcoming: PropTypes.array,
  popular: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired
};

export default HomePresenter;