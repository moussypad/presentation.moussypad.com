import * as React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

import UserAvatar from '../../modules/guard/UserAvatar';
import LogoutButton from '../../modules/guard/LogoutButton';

class Dashboard extends React.PureComponent {
  render() {
    return (
      <div>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography type="title" color="inherit" style={{ flex: 1 }}>Moussypad</Typography>
            <UserAvatar style={{ marginRight: 10 }}/>
            <LogoutButton />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Dashboard;