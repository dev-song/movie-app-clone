import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 0 10px;
  box-shadow: 0 1px 5px 2px rgba(0, 0, 0, 0.8);

  background-color: rgba(20, 20, 20, 0.7);
  color: white;
`;
const List = styled.ul`
  display: flex;
`;
const ListItem = styled.li`
  width: 80px;
  height: 50px;
  
  text-align: center;
`;
const StyledLink = styled(Link)`
  display: flex;  
  justify-content: center;
  align-items: center;
  height: 50px;
  
  &:hover {
    background-color: cornsilk;
  }
`;

const Header = () => (
  <StyledHeader>
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
  </StyledHeader>
);

export default Header;