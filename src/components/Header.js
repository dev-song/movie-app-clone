import styled from 'styled-components';

const List = styled.ul`
  display: flex;
  &:hover {
    background-color: cornsilk;
  }
`;

const ListItem = styled.li``;

const Header = () => (
  <header>
    <List>
      <ListItem>
        <a href="/">Movies</a>
      </ListItem>
      <ListItem>
        <a href="/tvshows">TV Shows</a>
      </ListItem>
      <ListItem>
        <a href="/search">Search</a>
      </ListItem>
    </List>
  </header>
);

export default Header;