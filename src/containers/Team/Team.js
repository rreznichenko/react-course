import React, { Component } from 'react';
import { connect } from 'react-redux';
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

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return  {}
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Team));