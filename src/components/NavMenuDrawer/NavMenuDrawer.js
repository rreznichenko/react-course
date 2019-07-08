import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import PropTypes from 'prop-types';

const styles = {
  list: {
    width: 250
  },
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
    const{ classes, isMenuOpen } = this.props;
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
              {['Inbox', 'Starred', 'Send email', 'Drafts'].map(
                (text, index) => (
                  <ListItem button key={text}>
                    <ListItemText primary={text} />
                  </ListItem>
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
