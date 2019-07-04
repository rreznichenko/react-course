import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import TeamCard from './components/TeamCard';


const styles = theme => ({
  root: {
    marginTop: "25px",
  }
});

class Teams extends Component {
  render() {
    const { classes } = this.props;
    return (
    <div className={classes.root}>
      <Grid spacing={2} container>
        <Grid item xs={3}>
          <TeamCard />
        </Grid>
        <Grid item xs={3}>
          <TeamCard />
        </Grid>
        <Grid item xs={3}>
          <TeamCard />
        </Grid>
        <Grid item xs={3}>
          <TeamCard />
        </Grid>
        <Grid item xs={3}>
          <TeamCard />
        </Grid>
        <Grid item xs={3}>
          <TeamCard />
        </Grid>
        <Grid item xs={3}>
          <TeamCard />
        </Grid>
        <Grid item xs={3}>
          <TeamCard />
        </Grid>
      </Grid>
    </div>);
  }
}

Teams.propTypes = {}

export default withStyles(styles)(Teams);
