import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';


const styles = theme => ({
  root: {}
});

class Teams extends Component {
  render() {
    const { classes } = this.props;
    return (<div>Teams</div>);
  }
}

Teams.propTypes = {}

export default withStyles(styles)(Teams);
