import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { PresentationT } from './private/redux/models';
import { actionCreators } from './private/redux/player.actions';
import PresentationGridItemComponent from './private/components/PresentationGridItemComponent';

type OwnPropsT = {
  presentation: PresentationT;
};

type DispatchToPropsT = {
  requestLoadPresentation: (presentation: PresentationT) => void;
};

type PropsT = OwnPropsT & DispatchToPropsT;

class PresentationGridItem extends React.PureComponent<PropsT> {
  render() {
    const { presentation, requestLoadPresentation } = this.props;
    return <PresentationGridItemComponent presentation={presentation} onStart={requestLoadPresentation} />;
  }
}

const mapDispatchToProps = (dispatch: Dispatch<{}>) => ({
  requestLoadPresentation: (presentation: PresentationT) => dispatch(actionCreators.startPresentation(presentation.id))
});

export default connect<null, DispatchToPropsT, OwnPropsT>(null, mapDispatchToProps)(PresentationGridItem);