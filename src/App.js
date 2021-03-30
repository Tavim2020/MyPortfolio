import React from 'react';
import Header from './components/Header/Header';
import styled from 'styled-components';

const AppContainer = styled.div`
    width: 100vw;
    height: 100%auto;
`;

export const App = () => {
  return (
    <AppContainer>
      <Header />


    </AppContainer>
  );
}

export default App;
