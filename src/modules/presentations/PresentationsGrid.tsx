import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { RootStateT } from './reduxConnect';
import { actionCreators } from './private/redux/presentations.actions';
import { PresentationsStateT } from './private/redux/presentations.reducers';

import PresentationsGridComponent from './private/components/PresentationsGridComponent';
import PresentationPlayer from './PresentationPlayer';
import Loading from '../../components/Loading';

type OwnPropsT = {
  style?: React.CSSProperties;
};

type StateToPropsT = {
  presentationsState: PresentationsStateT
};

type DispatchToPropsT = {
  requestFetchPresentations: () => void;
};

type PropsT = StateToPropsT & DispatchToPropsT & OwnPropsT;

class PresentationsGrid extends React.PureComponent<PropsT> {
  componentWillMount() {
    this.props.requestFetchPresentations();
  }

  render() {
    const { presentationsState, style } = this.props;
    if (presentationsState.current === 'OnSucceed') {
      return (
        <div style={style}>
          <PresentationsGridComponent presentations={presentationsState.presentations} />
          <PresentationPlayer />
        </div>
      );
    } else {
      return (
        <div style={style}>
          <Loading />
        </div>
      );
    }
  }
}

const mapStateToProps = (appState: RootStateT) => ({
  presentationsState: appState.presentationSuite.presentationsState
});

const mapDispatchToProps = (dispatch: Dispatch<{}>) => ({
  requestFetchPresentations: () => dispatch(actionCreators.requestFetchPresentations())
});

export default connect<StateToPropsT, DispatchToPropsT, OwnPropsT>(mapStateToProps, mapDispatchToProps)(PresentationsGrid);