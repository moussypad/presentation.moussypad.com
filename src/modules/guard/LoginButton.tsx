import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { actionCreators } from './private/redux/login.actions';

// tslint:disable-next-line:no-any
const googleSignInButton = require('./private/assets/googleSignInButton.png') as any;

type OwnPropsT = {
  style?: React.CSSProperties;
};

type DispatchToPropsT = {
  requestLogin: () => void;
};

type PropsT = OwnPropsT & DispatchToPropsT;

class LoginButton extends React.PureComponent<PropsT> {
  render() {
    const { style } = this.props;
    return (
      <div style={style}>
        <img style={{ padding: 20 }} onClick={this.handleClick} src={googleSignInButton} alt="sign-in-button" />
      </div>
    );
  }

  handleClick = () => {
    this.props.requestLogin();
  }
}

const mapDispatchToProps = (dispatch: Dispatch<{}>) => ({
  requestLogin: () => dispatch(actionCreators.requestLogin())
});

export default connect<null, DispatchToPropsT, OwnPropsT>(null, mapDispatchToProps)(LoginButton);