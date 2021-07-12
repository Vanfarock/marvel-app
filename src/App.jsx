import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { light } from './styles/theme';
import Navbar from './components/navbar';
import Comics from './pages/comics';
import flexComponent from './common/flexComponent';

const App = () => (
  <ThemeProvider theme={light}>
    <BrowserRouter>
      <Navbar />

      <Switch>
        <Route path="/comics" component={flexComponent(Comics)} />
      </Switch>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
