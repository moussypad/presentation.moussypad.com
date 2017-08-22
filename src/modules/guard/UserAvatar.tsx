import * as React from 'react';
import { connect } from 'react-redux';
import { RootStateT } from './reduxConnect';
import { AuthStateT } from './private/redux/auth.reducers';

import Avatar from 'material-ui/Avatar';

type OwnPropsT = {
  style?: React.CSSProperties;
};

type StateToPropsT = {
  authState: AuthStateT
};

type PropsT = StateToPropsT & OwnPropsT;

class UserAvatar extends React.PureComponent<PropsT> {
  render() {
    const { authState, style } = this.props;
    if (authState.current === 'OnSucceed') {
      return (
        <div style={style}>
          <Avatar alt="User Avatar" src={authState.userProfile.thumbnailURL} />
        </div>
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = (appState: RootStateT) => ({
  authState: appState.guard.auth,
  // loginState: appState.guard.login,
  // logoutState: appState.guard.logout
});

export default connect(mapStateToProps)(UserAvatar);