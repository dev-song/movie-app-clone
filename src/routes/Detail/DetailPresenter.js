import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import Loader from '../../components/Loader';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 50px);
  padding: 50px;
`;

const Backdrop = styled.div`
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  filter: blur(3px);
  opacity: 0.5;
  background: center center / cover url(${props => props.bgImage});
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const Cover = styled.div`
  width: 30%;
  height: 100%;
  border-radius: 5px;
  background: center center / cover url(${props => props.bgImage});
`;

const Data = styled.div`
  width: 70%;
  margin-left: 10px;
`;

const Title = styled.span`
  margin-bottom: 10px;
  font-size: 32px;
`;

const DescriptionContainer = styled.div`
  margin: 20px 0;
`;

const Description = styled.span``;

const Divider = styled.span`
  margin: 0 8px;
`;

const Overview = styled.p`
  width: 60%;
  opacity: 0.6;
  color: white;
  font-size: 12px;
  line-height: 1.5;
`;

const THUMBNAIL_WIDTH = 500;
const TMDB_IMG_URL_WIDTH = `https://image.tmdb.org/t/p/w${THUMBNAIL_WIDTH}`;
const TMDB_IMG_URL_ORIGINAL = `https://image.tmdb.org/t/p/original`;

const DetailPresenter = ({ result, error, loading }) => loading
  ? (
    <>
      <Helmet>
        <title>Loading | Newflix</title>
      </Helmet>

      <Loader />
    </>
  )
  : (
    <Container>
      <Helmet>
        <title>{result.original_title || result.original_name} | Newflix</title>
      </Helmet>

      <Backdrop
        bgImage={result.backdrop_path
          && `${TMDB_IMG_URL_ORIGINAL}${result.backdrop_path}`}
      />
      <Content>
        <Cover
          bgImage={result.poster_path
            ? `${TMDB_IMG_URL_WIDTH}${result.poster_path}`
            : require('../../assets/X.png').default}
        />
        <Data>
          <Title>
            {result.original_title
              ? result.original_title
              : result.original_name}
          </Title>
          <DescriptionContainer>
            <Description>
              {(result.release_date && result.release_date.substring(0, 4)) ||
                (result.first_air_date && result.first_air_date.substring(0, 4))}
            </Description>
            <Divider>|</Divider>
            <Description>{result.runtime || result.episode_runtime} min</Description>
            <Divider>|</Divider>
            <Description>
              {result.genres && result.genres.map((genre, index) => index !== result.genres.length - 1 ? `${genre.name} / ` : genre.name)}
            </Description>
          </DescriptionContainer>
          <Overview>
            {result.overview}
          </Overview>
        </Data>
      </Content>
    </Container>
  );

DetailPresenter.propTypes = {
  result: PropTypes.object,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default DetailPresenter;