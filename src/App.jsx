import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { light } from './styles/theme';
import Navbar from './components/navbar';
import Comics from './pages/comics';
import Characters from './pages/characters/index';
import flexComponent from './common/flexComponent';
import CharacterDetails from './pages/characterDetails/index';

const App = () => (
  <ThemeProvider theme={light}>
    <BrowserRouter>
      <Navbar />

      <Switch>
        <Route path="/comics" component={flexComponent(Comics)} />

        <Route path="/characters/:id" component={flexComponent(CharacterDetails)} />
        <Route path="/characters" component={flexComponent(Characters)} />
      </Switch>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
