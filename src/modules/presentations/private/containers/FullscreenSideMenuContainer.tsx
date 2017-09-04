import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { actionCreators } from '../redux/player.actions';
import FullscreenSideMenu from '../../../../components/FullscreenSideMenu';

import Button from 'material-ui/Button';
import Poll from 'material-ui-icons/Poll';
import ThumbsUpDown from 'material-ui-icons/ThumbsUpDown';
import QuestionAnswer from 'material-ui-icons/QuestionAnswer';

type DispatchToPropsT = {
  activateReactionFlows: () => void,
  deactivateReactionFlows: () => void
};

type PropsT = DispatchToPropsT;

type StateT = {
  thumbsUpDownToggle: boolean;
};

class FullscreenSideMenuContainer extends React.PureComponent<PropsT, StateT> {
  state = { thumbsUpDownToggle: false };
  render() {
    return (
      <FullscreenSideMenu position="right" align="start">
        <Button fab color="primary" aria-label="ThumbsUpDown" onClick={this.handleClickThumbsUpDown}>
          <ThumbsUpDown />
        </Button>
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
    const { activateReactionFlows, deactivateReactionFlows } = this.props;
    const { thumbsUpDownToggle } = this.state;
    !thumbsUpDownToggle ? activateReactionFlows() : deactivateReactionFlows();
    this.setState({ thumbsUpDownToggle: !thumbsUpDownToggle });
  }
}

const mapDispatchToProps = (dispatch: Dispatch<{}>) => ({
  activateReactionFlows: () => dispatch(actionCreators.activateReactionFlows()),
  deactivateReactionFlows: () => dispatch(actionCreators.deactivateReactionFlows())
});

export default connect<null, DispatchToPropsT, null>(null, mapDispatchToProps)(FullscreenSideMenuContainer);
