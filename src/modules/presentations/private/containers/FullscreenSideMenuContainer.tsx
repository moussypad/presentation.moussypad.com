import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { PlayerStateT } from '../redux/player.reducers';
import { RootStateT } from '../../reduxConnect';
import { actionCreators } from '../redux/player.actions';
import FullscreenSideMenu from '../../../../components/FullscreenSideMenu';

import Button from 'material-ui/Button';
import Poll from 'material-ui-icons/Poll';
import ThumbsUpDown from 'material-ui-icons/ThumbsUpDown';
import QuestionAnswer from 'material-ui-icons/QuestionAnswer';
import FabSwitchWrapper from '../../../../components/FabSwitchWrapper';

type StateToPropsT = {
  playerState: PlayerStateT
};

type DispatchToPropsT = {
  activateReactionFlows: () => void,
  deactivateReactionFlows: () => void
};

type PropsT = StateToPropsT & DispatchToPropsT;

class FullscreenSideMenuContainer extends React.PureComponent<PropsT> {
  render() {
    const { isReactionFlowsActive } = this.props.playerState;
    return (
      <FullscreenSideMenu position="right" align="start">
        <FabSwitchWrapper on={isReactionFlowsActive}>
          <Button fab color="primary" aria-label="ThumbsUpDown" onClick={this.handleClickThumbsUpDown}>
            <ThumbsUpDown />
          </Button>
        </FabSwitchWrapper>
        <Button fab color="accent" aria-label="Poll">
          <Poll />
        </Button>
        <Button fab style={{ backgroundColor: 'rgb(248, 167, 36)' }} aria-label="QuestionAnswer">
          <QuestionAnswer />
        </Button>
      </FullscreenSideMenu>
    );
  }

  handleClickThumbsUpDown = () => {
    const { activateReactionFlows, deactivateReactionFlows, playerState } = this.props;
    const { isReactionFlowsActive } = playerState;
    isReactionFlowsActive ? deactivateReactionFlows() : activateReactionFlows();
  }
}

const mapStateToProps = (appState: RootStateT) => ({
  playerState: appState.presentationSuite.playerState
});

const mapDispatchToProps = (dispatch: Dispatch<{}>) => ({
  activateReactionFlows: () => dispatch(actionCreators.activateReactionFlows()),
  deactivateReactionFlows: () => dispatch(actionCreators.deactivateReactionFlows())
});

export default connect<StateToPropsT, DispatchToPropsT, null>(mapStateToProps, mapDispatchToProps)(FullscreenSideMenuContainer);
