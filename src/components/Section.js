import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  :not(:last-child) {
    margin-bottom: 48px;
  }
`;
const Title = styled.span`
  font-size: 16px;
  font-weight: bold;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 125px);
  grid-gap: 24px;
  margin-top: 16px;
`;

const Section = ({ title, children }) => (
  <Container>
    <Title>{title}</Title>
    <Grid>{children}</Grid>
  </Container>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
}

export default Section;