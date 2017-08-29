import * as React from 'react';
import FullscreenSideMenu from '../../../../components/FullscreenSideMenu';

import Button from 'material-ui/Button';
import Poll from 'material-ui-icons/Poll';
import ThumbsUpDown from 'material-ui-icons/ThumbsUpDown';
import QuestionAnswer from 'material-ui-icons/QuestionAnswer';

class FullscreenSideMenuContainer extends React.PureComponent {
  render() {
    return (
      <FullscreenSideMenu position="right" align="start">
        <Button fab color="primary" aria-label="add">
          <ThumbsUpDown />
        </Button>
        <Button fab color="accent" aria-label="add">
          <Poll />
        </Button>
        <Button fab style={{ backgroundColor: 'rgb(248, 167, 36)' }} aria-label="add">
          <QuestionAnswer />
        </Button>
      </FullscreenSideMenu>
    );
  }
}

export default FullscreenSideMenuContainer;
