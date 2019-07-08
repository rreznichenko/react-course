import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';


const styles = theme => ({
  root: {}
});

class Team extends Component {
  render() {
    const { classes } = this.props;
    return (<div>Team</div>);
  }
}

Team.propTypes = {
  classes: PropTypes.object,
}

export default withStyles(styles)(Team);