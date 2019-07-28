import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSagaFixturesAction } from './actions';
import { withStyles } from '@material-ui/core/styles';
import FixtureCard from './components/FixtureCard';
import  Container  from '@material-ui/core/Container';
import  Grid  from '@material-ui/core/Grid';
import PropTypes from 'prop-types';


const styles = theme => ({
  root: {
    marginTop: "25px",
  },
  title: {
    margin: "25px 0 15px 0"
  },
  cardGrid: {
    width: "100%",
  }
});

class Fixtures extends Component {

  componentDidMount() {
    const { getFixturesList } = this.props;
    getFixturesList();
  }

  render() {
    const { classes, fixturesList } = this.props;
    return (
      <Container className={classes.root}>
        <Grid container direction="column" justify="center" alignItems="center" >
          {
            fixturesList && fixturesList.map(fixture => (
              <Grid className={classes.cardGrid} key={fixture.fixture_id} item >
                <FixtureCard fixture={fixture} />
              </Grid>
            ))
          }
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
    fixturesList: state.fixtures.fixturesList
  }
}

const mapDispatchToProps = dispatch => {
  return  {
    getFixturesList: () => {dispatch(fetchSagaFixturesAction())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Fixtures));