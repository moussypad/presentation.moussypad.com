import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { Route, RouteProps, Redirect } from 'react-router-dom';
import { actionCreators } from './private/redux/auth.actions';
import { AuthStateT } from './private/redux/auth.reducers';
import { RootStateT } from './reduxConnect';

type OwnPropsT = {
  redirect: string,
  inverse?: boolean
} & RouteProps;

type StateToPropsT = {
  authState: AuthStateT
};

type DispatchToPropsT = {
  requestAuth: () => void;
};

type PropsT = StateToPropsT & DispatchToPropsT & OwnPropsT;

class GuardRoute extends React.PureComponent<PropsT> {
  static defaultProps: Partial<PropsT> = {
    inverse: false
  };

  componentDidMount() {
    if (this.props.authState.current === 'OnInit') {
      this.props.requestAuth();
    }
  }

  render() {
    const current = this.props.authState.current;
    const inverse = this.props.inverse!;
    
    switch (current) {
      case 'OnInit':
      case 'OnProcess':
        return <h1>Loading...</h1>;
      case 'OnSucceed':
        return inverse
          ? <Redirect to={{ pathname: this.props.redirect, state: { from: this.props.location } }} />
          : <Route component={this.props.component} />;
      case 'OnFailure':
        return inverse
          ? <Route component={this.props.component} />
          : <Redirect to={{ pathname: this.props.redirect, state: { from: this.props.location } }} />;
      default:
        return null;
    }
  }
}

const mapStateToProps = (appState: RootStateT) => ({
  authState: appState.guard.auth,
});

const mapDispatchToProps = (dispatch: Dispatch<{}>) => ({
  requestAuth: () => dispatch(actionCreators.requestAuth())
});

export default connect<StateToPropsT, DispatchToPropsT, OwnPropsT>(mapStateToProps, mapDispatchToProps)(GuardRoute);