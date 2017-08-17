import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { AppStateT } from './store';
import { actionCreators } from './private/redux/actions';
import { LoginStateT } from './private/redux/reducers';

import Button from 'material-ui/Button';

type OwnPropsT = {
  style?: React.CSSProperties;
};

type StateToPropsT = {
  loginState: LoginStateT
};

type DispatchToPropsT = {
  requestLogin: () => void;
};

type PropsT = OwnPropsT & StateToPropsT & DispatchToPropsT;

class LoginButton extends React.PureComponent<PropsT> {
  render() {
    return (
      <div>
        <h1>{this.props.loginState.current}</h1>
        <Button raised color="primary" onClick={this.handleClick}>Login</Button>
      </div>
    );
  }

  handleClick = () => {
    this.props.requestLogin();
  }
}

const mapStateToProps = (appState: AppStateT) => ({
  loginState: appState.auth.login
});
const mapDispatchToProps = (dispatch: Dispatch<{}>) => ({
  requestLogin: () => dispatch(actionCreators.requestLogin())
});

export default connect<StateToPropsT, DispatchToPropsT, OwnPropsT>(mapStateToProps, mapDispatchToProps)(LoginButton);