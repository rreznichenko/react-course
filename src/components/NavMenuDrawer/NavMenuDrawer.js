import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import PropTypes from 'prop-types';

const styles = {
  list: {
    width: 250
  },
  link: {
    color: "rgba(0, 0, 0, 0.87)",
    textDecoration: "none"
  }
};



class NavMenuDrawer extends Component {
  constructor(props) {
    super(props);
    this.closeMenu = this.closeMenu.bind(this);
  }

 closeMenu() {
    const { setIsMenuOpen } = this.props;
    setIsMenuOpen(false)
 }

  render() {
    const{ classes, isMenuOpen, routes } = this.props;
    return (
      <div>
        <Drawer open={isMenuOpen} onClose={this.closeMenu}>
          <div
            className={classes.list}
            role="presentation"
            onClick={this.closeMenu}
            onKeyDown={this.closeMenu}
          >
            <List>
              {routes.map(
                (route, index) => (
                  route.path && route.showInNavBar && 
                  <Link key={index} className={classes.link} to={route.path}>
                    <ListItem button>
                        <ListItemText primary={route.name} />
                    </ListItem>
                  </Link>
                )
              )}
            </List>
          </div>
        </Drawer>
      </div>
    );
  }
}

NavMenuDrawer.propTypes = {
    setIsMenuOpen: PropTypes.func,
    isMenuOpen: PropTypes.bool,
};


export default withStyles(styles)(NavMenuDrawer);
