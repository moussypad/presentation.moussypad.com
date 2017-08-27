import * as React from 'react';
import Grid from 'material-ui/Grid';
import PresentationItem from '../../PresentationItem';

import { PresentationT } from '../redux/models';
export { PresentationT };

type PropsT = {
  presentations: PresentationT[],
  style?: React.CSSProperties
};

class PresentationGridComp extends React.PureComponent<PropsT> {
  render() {
    const { presentations, style } = this.props;
    return (
      <Grid container style={{ ...style, flexGrow: 1 }} justify="center">
        <Grid item xs={10}>
          <Grid container spacing={8}>
            {presentations.map(presentation => (
              <Grid key={presentation.id} item xs={6} sm={4} md={3} >
                <PresentationItem presentation={presentation} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default PresentationGridComp;