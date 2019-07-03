import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';


const styles = theme => ({
  root: {}
});

class Page404 extends Component {
  render() {
    const { classes } = this.props;
    return (<div>404</div>);
  }
}

Page404.propTypes = {}

export default withStyles(styles)(Page404);
