import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

import Fixtures from '../Fixtures';

const styles = theme => ({
  root: {
    flexGrow: 1,
  }
});

class Main extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid container>
        <Grid item xs={5}>
            <CardContent>
                  <Fixtures />
            </CardContent>
        </Grid>  
        <Grid item xs={3}>
          <Card className={classes.card}>
              <CardContent>
                <Grid container justify="space-around">
                  <Grid xs={3} item>
                    <Typography gutterBottom variant="h5" component="span">
                      some text
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
          </Card>
        </Grid>  
        <Grid item xs={4}>
          <Card className={classes.card}>
              <CardContent>
                <Grid container justify="space-around">
                  <Grid xs={3} item>
                    <Typography gutterBottom variant="h5" component="span">
                      some text
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
          </Card>
        </Grid>  
      </Grid>
    );
  }
}

Main.propTypes = {
  classes: PropTypes.object,
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return  {}
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Main));
