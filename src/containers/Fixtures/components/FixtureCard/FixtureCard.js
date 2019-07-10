import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

const styles = theme => ({
  card: {
    maxWidth: "100%",
    paddingTop: "25px",
    marginBottom: "15px"
  },
  logo: {
    width: "64px",
    display: "inline-block",
    verticalAlign: "middle",
    margin: " 0 15px"
  },
  score: {
    display: "inline-block",
    height: "100%",
    verticalAlign: "middle",
    lineHeight: "3"
  },
  link: {
    textDecoration: "none",
    color: "#3f51b5"
  }
});

class FixtureCard extends Component {
  render() {
    const { classes, fixture } = this.props;
    return(
      <Card className={classes.card}>
        <CardContent>
          <Grid container justify="space-around">
            <Grid xs={3} item>
              <Typography gutterBottom variant="h5" component="span">
                {fixture.homeTeam.team_name}
              </Typography>
              <Link to={`team/${fixture.homeTeam.team_id}`}>
                <img className={classes.logo} src={fixture.homeTeam.logo} alt="home team" />
              </Link>
            </Grid>
            <Grid xs={1} item>
              <Typography className={classes.score} variant="h5" component="span">
                {fixture.goalsHomeTeam} - {fixture.goalsAwayTeam}
              </Typography>
            </Grid>
            <Grid xs={3} item>
              <Link to={`team/${fixture.awayTeam.team_id}`}>
                <img className={classes.logo} src={fixture.awayTeam.logo} alt="away team" />
              </Link>
              <Typography gutterBottom variant="h5" component="span">
                {fixture.awayTeam.team_name}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
              Details
          </Button>
        </CardActions>
      </Card>
    );
  }
}

FixtureCard.propTypes = {
  setIsMenuOpen: PropTypes.func
}

export default withStyles(styles)(FixtureCard);
