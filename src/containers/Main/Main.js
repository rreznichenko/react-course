import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';

const styles = theme => ({
  root: {
    flexGrow: 1,
  }
});

class Main extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>main</div>
    );
  }
}

Main.propTypes = {}

export default withStyles(styles)(Main);
