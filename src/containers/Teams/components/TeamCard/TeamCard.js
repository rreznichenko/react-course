import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

const styles = theme => ({
  card: {
    maxWidth: 345,
    paddingTop: "25px"
  },
  logo: {
    objectFit: "contain"
  },
  link: {
    textDecoration: "none",
    color: "#3f51b5"
  }
});

class TeamCard extends Component {
  render() {
    const { classes, team } = this.props;
    return(
      <Card className={classes.card}>
        <CardMedia
          component="img"
          alt="team logo"
          height="140"
          image={team.logo}
          title="team logo"
          className={classes.logo}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {team.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Country: {team.country}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            <Link className={classes.link} to={`team/${team.team_id}`}>
              Details
            </Link>
          </Button>
        </CardActions>
      </Card>
    );
  }
}

TeamCard.propTypes = {
  setIsMenuOpen: PropTypes.func
}

export default withStyles(styles)(TeamCard);
