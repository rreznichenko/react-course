import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import TeamCard from './components/TeamCard';
import { getTeamsAction } from './actions';

const styles = theme => ({
  root: {
    marginTop: "25px",
  }
});

class Teams extends Component {
  componentDidMount() {
    const { getTeams } = this.props;
    getTeams();
  }
  render() {
    const { classes, teams } = this.props;
    return (
    <div className={classes.root}>
      <Grid spacing={2} container>
        {teams && teams.map(team => (
          <Grid key={team.team_id} item xs={3}>
            <TeamCard />
          </Grid>
        ))}
      </Grid>
    </div>);
  }
}

Teams.propTypes = {
  classes: PropTypes.object,
}

const mapStateToProps = state => {
  return {
    teams: state.teams
  }
}

const mapDispatchToProps = dispatch => {
  return  {
    getTeams: () => dispatch(getTeamsAction()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Teams));
