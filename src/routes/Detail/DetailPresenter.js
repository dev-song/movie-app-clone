import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import Loader from '../../components/Loader';
import Message from '../../components/Message';

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
  width: calc(70% - 10px);
  margin-left: 10px;
`;

const Title = styled.span`
  margin-bottom: 10px;
  font-size: 32px;
`;

const DescriptionContainer = styled.div`
  display: flex;
  align-items: center;
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

const IMDbLogo = styled.span`
  display: inline-block;
  padding: 4px 8px;

  background: #F5C518;
  color: black;
  font-size: 16px;
  font-weight: 900;
`;

const StyledLink = styled.a`
  display: flex;
  align-items: center;
`;

const TabButtonContainer = styled.div`
  display: flex;
  margin-top: 20px;
`;

const TabButton = styled.div`
  position: relative;
  z-index: 20;
  padding: 10px 30px;
  border-radius: 8px 8px 0 0;
  box-shadow: inset 0 0 4px 2px #666;
  background: ${props => props.selected ? '#eee' : '#333'};
  font-size: 16px;
  color: ${props => props.selected ? '#333' : '#eee'};
  
  :not(:first-child) {
    z-index: 10;
    left: -20px;
    padding-left: 40px;
  }
  :nth-of-type(3) {
    z-index: 0;
    left: -40px;
  }
`;

const TabContent = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  width: 60%;
  padding: 20px;
  border-radius: 12px;
  border-top-left-radius: 0;

  background: rgba(128, 128, 128, 0.4);
`;

const VideoEmbed = styled.iframe`
  display: block;
  min-width: 480px;
  min-height: 320px;

  :not(:first-child) {
    margin-left: 10px;
  }
`;

const ProductionContainer = styled.div``;

const CompanyLogoContainer = styled.div`
  display: flex;
  align-items: center;
  height: 120px;
`;

const CompanyLogoTitle = styled.h3`
  margin-bottom: 10px;
  font-size: 24px;
  font-weight: 500;
`;

const CompanyLogo = styled.div`
  min-width: 200px;
  height: 100%;
  border-radius: 5px;
  background: center center / contain url(${props => props.bgImage}) no-repeat;

  :not(:first-child) {
    margin-left: 10px;
  }
`;

const Company = styled.p`
  min-width: 120px;
  font-size: 16px;
  font-style: italic;
  text-align: center;

  :not(:first-child) {
    margin-left: 10px;
  }
`;

const CountryContainer = styled.ul``;

const CountryTitle = styled.h3`
  margin: 30px 0 10px;
  font-size: 24px;
  font-weight: 500;
`;

const Country = styled.li`
  font-size: 16px;
  font-style: italic;

  :not(:first-child) {
    margin-top: 5px;
  }
`;

const SeasonContainer = styled.div`
  :not(:first-child) {
    margin-left: 20px;
  }
`;

const SeasonCover = styled.div`
  min-width: 240px;
  height: 320px;
  border-radius: 5px;
  background: center center / contain url(${props => props.bgImage}) no-repeat;
`;

const SeasonTitle = styled.h3`
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
`;

const THUMBNAIL_WIDTH = 500;
const TMDB_IMG_URL_WIDTH = `https://image.tmdb.org/t/p/w${THUMBNAIL_WIDTH}`;
const TMDB_IMG_URL_ORIGINAL = `https://image.tmdb.org/t/p/original`;

const IMDB_URL = 'https://www.imdb.com/title/';

const TABS = {
  VIDEO: 'videos',
  PRODUCTION: 'production',
  SEASON: 'seasons'
};

const DetailPresenter = ({ id, result, error, loading, isMovie }) => {
  const [tab, setTab] = useState(TABS.VIDEO);

  return loading
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
              {isMovie
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
              <Divider>|</Divider>
              <Description>
                {result.status}
              </Description>
              <Divider>|</Divider>
              <StyledLink href={`${IMDB_URL}${result.imdb_id}`}>
                <IMDbLogo>IMDb</IMDbLogo>
              </StyledLink>
            </DescriptionContainer>

            <Overview>
              {result.overview}
            </Overview>

            <TabButtonContainer>
              <TabButton
                onClick={() => setTab(TABS.VIDEO)}
                selected={tab === TABS.VIDEO}
              >
                Videos
              </TabButton>
              <TabButton
                onClick={() => setTab(TABS.PRODUCTION)}
                selected={tab === TABS.PRODUCTION}
              >
                Production
              </TabButton>
              {!isMovie && (
                <TabButton
                  onClick={() => setTab(TABS.SEASON)}
                  selected={tab === TABS.SEASON}
                >
                  Seasons
                </TabButton>
              )}
            </TabButtonContainer>

            <TabContent>
              {tab === TABS.VIDEO
                ? result.videos.results.length > 0
                  ? result.videos.results.map(video => video.site === 'YouTube'
                    ? (
                      <VideoEmbed
                        title={video.id}
                        src={`https://www.youtube.com/embed/${video.key}`}
                      />
                    )
                    : null)
                  : <Message text='There is no videos :(' color='#333' />
                : null
              }
              {tab === TABS.PRODUCTION && (
                <ProductionContainer>
                  <CompanyLogoTitle>Production Companies</CompanyLogoTitle>
                  <CompanyLogoContainer>
                    {result.production_companies.length > 0
                      ? result.production_companies.map(company => company.logo_path
                        ? <CompanyLogo bgImage={`${TMDB_IMG_URL_ORIGINAL}${company.logo_path}`} />
                        : <Company>{company.name}</Company>
                      )
                      : <Message text='There is no production companies :(' color='#333' />
                    }
                  </CompanyLogoContainer>
                  <CountryTitle>Production Countries</CountryTitle>
                  <CountryContainer>
                    {result.production_countries.length > 0
                      ? result.production_countries.map(country => (
                        <Country>{country.name}</Country>
                      ))
                      : <Message text='There is no production countries :(' color='#333' />
                    }
                  </CountryContainer>
                </ProductionContainer>
              )}
              {tab === TABS.SEASON &&
                result.seasons.map(season => (
                  <SeasonContainer>
                    <SeasonTitle>{season.name}</SeasonTitle>
                    <SeasonCover bgImage={season.poster_path
                      ? `${TMDB_IMG_URL_ORIGINAL}${season.poster_path}`
                      : require('../../assets/X.png').default} />
                  </SeasonContainer>
                ))
              }
            </TabContent>
          </Data>
        </Content>
      </Container>
    );
}

DetailPresenter.propTypes = {
  result: PropTypes.object,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default DetailPresenter;