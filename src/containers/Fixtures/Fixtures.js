import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSagaFixturesAction, fetchSagaFixturesLiveAction } from './actions';
import { withStyles } from '@material-ui/core/styles';
import FixtureCard from './components/FixtureCard';
import  Container  from '@material-ui/core/Container';
import  Typography  from '@material-ui/core/Typography';
import  Grid  from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
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
    const { getFixturesList, getLiveFixturesList } = this.props;
    if(!this.props.location) {
      getLiveFixturesList();
    } else {
      getFixturesList();
    };
  }

  renderFixtures() {
    const { fixturesList, classes, loading } = this.props;
    if(loading || !fixturesList) {
      return <CircularProgress />
    }
    if (!fixturesList.length) {
      return <Typography>There is no matches yet  :( </Typography>
    }
    return fixturesList.map(fixture => (
      <Grid className={classes.cardGrid} key={fixture.fixture_id} item >
        <FixtureCard fixture={fixture} />
      </Grid> 
    ));
  }

  render() {
    const { classes } = this.props;
    return (
      <Container className={classes.root}>
        <Grid container direction="column" justify="center" alignItems="center" >
          {this.renderFixtures.bind(this)()}
        </Grid>
      </Container>
    );
  }
}

Fixtures.propTypes = {
  classes: PropTypes.object,
}

const mapStateToProps = (state, ownProps) => {
  return {
    fixturesList: state.fixtures.fixturesList,
    loading: state.fixtures.loading,
  }
}

const mapDispatchToProps = dispatch => {
  return  {
    getFixturesList: () => {dispatch(fetchSagaFixturesAction())},
    getLiveFixturesList: () => {dispatch(fetchSagaFixturesLiveAction())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Fixtures));