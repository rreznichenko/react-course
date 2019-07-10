import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTeamByIdAction } from './actions';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';


const styles = theme => ({
  root: {}
});

class Team extends Component {

  componentDidMount() {
    const { getTeamInfo, match } = this.props;
    const teamId = match.params.id;
    getTeamInfo(teamId);
  }

  render() {
    const { classes, teamInfo } = this.props;
    return (<div>
      
    </div>);
  }
}

Team.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Team));