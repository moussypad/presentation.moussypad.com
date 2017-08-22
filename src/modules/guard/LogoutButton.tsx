import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { actionCreators } from './private/redux/logout.actions';
// import { LogoutStateT } from './private/redux/logout.reducers';

import Button from 'material-ui/Button';

type OwnPropsT = {
  style?: React.CSSProperties;
};

type DispatchToPropsT = {
  requestLogout: () => void;
};

type PropsT = OwnPropsT & DispatchToPropsT;

class LoginButton extends React.PureComponent<PropsT> {
  render() {
    return (
      <div>
        <Button raised color="primary" onClick={this.handleClick}>Logout</Button>
      </div>
    );
  }

  handleClick = () => {
    this.props.requestLogout();
  }
}

const mapDispatchToProps = (dispatch: Dispatch<{}>) => ({
  requestLogout: () => dispatch(actionCreators.requestLogout())
});

export default connect<null, DispatchToPropsT, OwnPropsT>(null, mapDispatchToProps)(LoginButton);