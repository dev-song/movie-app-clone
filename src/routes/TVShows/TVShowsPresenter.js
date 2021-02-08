import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Section from '../../components/Section';
import Loader from '../../components/Loader';
import Message from '../../components/Message';

const Container = styled.div`
  padding: 0px 10px;
`;

const TVShowsPresenter = ({ topRated, popular, airingToday, error, loading }) => loading
  ? <Loader />
  : (
    <Container>
      {topRated && topRated.length > 0 && (
        <Section title='Top Rated Shows'>
          {topRated.map(({ name, id }) => <span key={id}>{name}</span>)}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title='Popular Shows'>
          {popular.map(({ name, id }) => <span key={id}>{name}</span>)}
        </Section>
      )}
      {airingToday && airingToday.length > 0 && (
        <Section title='Airing Today'>
          {airingToday.map(({ name, id }) => <span key={id}>{name}</span>)}
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