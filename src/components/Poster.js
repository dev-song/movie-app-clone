import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  font-size: 12px;
`;

const Image = styled.div`
  height: 200px;
  border-radius: 4px;
  transition: 0.2s opacity linear;
  background: center center / cover url(${props => props.bgUrl});
`;

const Rating = styled.span`
  position: absolute;
  bottom: 5px;
  right: 5px;
  opacity: 0;
  transition: 0.2s opacity linear;
`;

const ImageContainer = styled.div`
  position: relative;
  margin-bottom: 5px;
  &:hover {
    ${Image} {
      opacity: 0.3;
    }
    ${Rating} {
      opacity: 1;
    }
  }
`;

const Title = styled.span`
  display: block;
  margin-bottom: 2px;
`;

const Year = styled.span`
  opacity: 0.5;
  color: white;
  font-size: 10px;
`;

const THUMBNAIL_WIDTH = 300;
const TMDB_API_ORIGIN = `https://image.tmdb.org/t/p/w${THUMBNAIL_WIDTH}`;

const Poster = ({ id, imageUrl, title, rating, year, isMovie = false }) => (
  <Link to={`/${isMovie ? 'movie' : 'show'}/${id}`}>
    <Container>
      <ImageContainer>
        <Image
          bgUrl={imageUrl
            ? `${TMDB_API_ORIGIN}${imageUrl}`
            : require('../assets/X.png').default} // require로 image를 불러올 때 object를 return하므로 default key로 파일 경로에 접근
        />
        <Rating>
          <span role='img' aria-label='rating'>
            ★
          </span>
          {rating}/10
        </Rating>
      </ImageContainer>
      <Title>{title.length > 15 ? `${title.substring(0, 15)}...` : title}</Title>
      <Year>{year}</Year>
    </Container>
  </Link>
);

Poster.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number,
  year: PropTypes.string,
  isMovie: PropTypes.bool
};

export default Poster;