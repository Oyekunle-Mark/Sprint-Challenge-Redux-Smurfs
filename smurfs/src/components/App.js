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
`;

const App = () => (
  <StyledApp>
    <Header />
    <CreateSmurf />
    <Smurfs />
  </StyledApp>
);

export default App;
