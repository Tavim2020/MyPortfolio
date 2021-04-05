import React from 'react';
import Header from './components/Header/Header';
import styled from 'styled-components';
import ContainerImage from './components/ContainerImage/ContainerImage';
import ContainerDeveloper from './components/ContainerDeveloper/ContainerDeveloper';
import TechSkillsContainer  from './components/TechSkillsContainer/TechSkillsContainer';
import ContainerContato from './components/ContainerContato/ContainerContato';

const AppContainer = styled.div`
    width: 100vw;
    height: 100%;
`;

export const App = () => {
  return (

    <AppContainer style={{ backgroundColor: '#000'}}>

      <Header />

      <ContainerImage />

      <ContainerDeveloper />

      <TechSkillsContainer />

      <ContainerContato />

    </AppContainer>

  );
}

export default App;
