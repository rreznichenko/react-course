import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';


const styles = theme => ({
  root: {}
});

class Main extends Component {
  render() {
    const { classes } = this.props;
    return (<div>Main</div>);
  }
}

Main.propTypes = {}

export default withStyles(styles)(Main);
