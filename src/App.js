import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';

import Header from './components/Header';
import NavMenuDrawer from './components/NavMenuDrawer';
import Routes from './routes/routes'
import RoutesComponent from './routes';

const theme = createMuiTheme()

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header setIsMenuOpen={setIsMenuOpen} />
        <NavMenuDrawer isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <RoutesComponent routes={Routes} />
      </ThemeProvider>
    </div>
  );
}

export default App;