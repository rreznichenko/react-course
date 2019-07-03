import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';

import Header from './components/Header';
import NavMenuDrawer from './components/NavMenuDrawer';

import Main from './containers/Main';
import Teams from './containers/Teams';
import Team from './containers/Team';
import Page404 from './containers/Page404';

const theme = createMuiTheme()

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header setIsMenuOpen={setIsMenuOpen} />
        <NavMenuDrawer isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <Router>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/teams" component={Teams} />
            <Route exact path="/team/:id" component={Team} />
            <Route component={Page404} />
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;