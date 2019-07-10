import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTeamByIdAction } from './actions';
import { withStyles } from '@material-ui/core/styles';
import  Container  from '@material-ui/core/Container';
import  Grid  from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';


const styles = theme => ({
  root: {
    marginTop: "25px",
  },
  title: {
    margin: "25px 0 15px 0"
  }
});

class Fixtures extends Component {

  componentDidMount() {
    const { getTeamInfo, match } = this.props;
    const teamId = match.params.id;
    getTeamInfo(teamId);
  }

  render() {
    const { classes, teamInfo } = this.props;
    return (
      <Container className={classes.root}>
        <Grid container direction="column" justify="center" alignItems="center" >
          <Grid item >
            <img src={teamInfo.logo} alt="logo" />
          </Grid>
          <Grid item>
            <Typography className={classes.title} variant="h3" component="h3">
              Team Info
            </Typography>
          </Grid>
        </Grid>
        <Grid container justify="center" alignItems="center" >
          <Grid item >
            <Typography variant="h6" component="h6">
              Name: {teamInfo.name}
            </Typography>
            <Typography variant="h6" component="h6">
              Country: {teamInfo.country}
            </Typography>
            <Typography variant="h6" component="h6">
              Founded in: {teamInfo.founded}
            </Typography>
            <Typography variant="h6" component="h6">
              Venue name: {teamInfo.venue_name}
            </Typography>
            <Typography variant="h6" component="h6">
              Venue addres: {teamInfo.venue_address}
            </Typography>
            <Typography variant="h6" component="h6">
              Venue city: {teamInfo.venue_city}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

Fixtures.propTypes = {
  classes: PropTypes.object,
}

const mapStateToProps = state => {
  return {
    teamInfo: state.team
  }
}

const mapDispatchToProps = dispatch => {
  return  {
    getTeamInfo: id => {dispatch(fetchTeamByIdAction(id))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Fixtures));