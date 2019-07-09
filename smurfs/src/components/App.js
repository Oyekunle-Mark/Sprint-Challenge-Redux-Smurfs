import React from 'react';
import styled from 'styled-components';

import Smurfs from './Smurfs';
import CreateSmurf from './CreateSmurf';
import Header from './Header';

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100vw;
  min-height: 100vh;

  h4 {
    font-family: 'News Cycle', sans-serif;
    font-size: 18px;
    margin: 10px 0;
  }
`;

const App = () => (
  <StyledApp>
    <Header />
    <CreateSmurf />
    <Smurfs />
  </StyledApp>
);

export default App;
