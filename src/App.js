import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import Header from './components/Header';
import NavMenuDrawer from './components/NavMenuDrawer';
import service from './services/FootballTeamsService';

const theme = createMuiTheme()

new service().getAllTeamsByCountry('DZ').then(response => console.log(response))
new service().getTeamById(33).then(response => console.log(response))
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header setIsMenuOpen={setIsMenuOpen} />
        <NavMenuDrawer isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </ThemeProvider>
    </div>
  );
}

export default App;