import * as React from 'react';
import { PresentationT } from './private/redux/models';
import PresentationItemComp from './private/components/PresentationItemComp';

type OwnPropsT = {
  presentation: PresentationT;
};

type PropsT = OwnPropsT;

class PresentationItem extends React.PureComponent<PropsT> {
  render() {
    const { presentation } = this.props;
    return <PresentationItemComp presentation={presentation}/>;
  }
}

export default PresentationItem;