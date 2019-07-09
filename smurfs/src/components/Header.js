import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  width: 95%;
  display: flex;
  align-items: center;

  border-bottom: 1px solid rgb(3, 1, 1, 0.2);

  img {
    width: 40px;
    height: 40px;
    margin: 10px;
  }

  h1 {
    font-family: 'Satisfy', cursive;
    font-size: 25px;
    font-weight: bold;
  }
`;

const Header = () => (
  <StyledHeader>
    <img src="https://img.icons8.com/color/48/000000/smurf.png" alt="smurf" />
    <h1>Smurf Village</h1>
  </StyledHeader>
);

export default Header;
