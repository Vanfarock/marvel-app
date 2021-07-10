import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { light } from './styles/theme';
import Navbar from './components/navbar/index';

const App = () => (
  <ThemeProvider theme={light}>
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
