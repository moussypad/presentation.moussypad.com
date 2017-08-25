import * as React from 'react';
import Grid from 'material-ui/Grid';

import { PresentationT } from '../redux/models';
export { PresentationT };

type PropsT = {
  presentations: PresentationT[]
};

class PresentationGridComp extends React.PureComponent<PropsT> {
  render() {
    const { presentations } = this.props;
    return (
      <Grid container style={{ flexGrow: 1 }} justify="center">
        <Grid item xs={10}>
          <Grid container spacing={8}>
            {presentations.map(presentation => (
              <Grid key={presentation.id} item xs={6} sm={4} md={3} >
                <img src={presentation.thumbnailURL} style={{ width: '100%' }} alt="presentation thumbnail" />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default PresentationGridComp;