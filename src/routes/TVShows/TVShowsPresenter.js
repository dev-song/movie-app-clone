import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Section from '../../components/Section';
import Loader from '../../components/Loader';
import Message from '../../components/Message';
import Poster from '../../components/Poster';

const Container = styled.div`
  padding: 0px 10px;
`;

const TVShowsPresenter = ({ topRated, popular, airingToday, error, loading }) => loading
  ? <Loader />
  : (
    <Container>
      {topRated && topRated.length > 0 && (
        <Section title='Top Rated Shows'>
          {topRated.map(({ id, original_name, poster_path, vote_average, first_air_date }) =>
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
      {popular && popular.length > 0 && (
        <Section title='Popular Shows'>
          {popular.map(({ id, original_name, poster_path, vote_average, first_air_date }) =>
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
      {airingToday && airingToday.length > 0 && (
        <Section title='Airing Today'>
          {airingToday.map(({ id, original_name, poster_path, vote_average, first_air_date }) =>
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
      {error && <Message text={error} color='#e74c3c' />}
    </Container>
  );

TVShowsPresenter.propTypes = {
  topRated: PropTypes.array,
  popular: PropTypes.array,
  airingToday: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired
};

export default TVShowsPresenter;