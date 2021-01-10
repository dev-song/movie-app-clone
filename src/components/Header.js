import { Link } from 'react-router-dom';
import styled from 'styled-components';

const List = styled.ul`
  display: flex;
  &:hover {
    background-color: cornsilk;
  }
`;
const ListItem = styled.li``;
const StyledLink = styled(Link)``;

const Header = () => (
  <header>
    <List>
      <ListItem>
        <StyledLink to="/">Movies</StyledLink>
      </ListItem>
      <ListItem>
        <StyledLink to="/tvshows">TV Shows</StyledLink>
      </ListItem>
      <ListItem>
        <StyledLink to="/search">Search</StyledLink>
      </ListItem>
    </List>
  </header>
);

export default Header;