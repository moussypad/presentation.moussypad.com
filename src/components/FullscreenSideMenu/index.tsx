import * as React from 'react';
import Grid, { GridDirection, GridJustification, GridAlignment } from 'material-ui/Grid';

export type PositionT = 'top' | 'bottom' | 'left' | 'right';
export type AlignT = 'start' | 'center' | 'end';

type PropsT = {
  position: PositionT;
  align: AlignT;
  duration?: number;
};

type StateT = {
  open: boolean
};

class FullscreenSideMenu extends React.PureComponent<PropsT, StateT> {
  static defaultProps: Partial<PropsT> = {
    duration: 300,
  };

  state = { open: false };

  render() {
    const { duration, position, align, children } = this.props;
    const { open } = this.state;

    const config = configMap.get(position.concat(align) as PositionAlignT)!;

    const numOfChild = React.Children.count(children);

    const display = React.Children.map(children, (child, index) => {
      const inc = duration! / numOfChild;
      const _duration = (open ? numOfChild - index : index + 1) * inc;
      const _delay = (!open ? numOfChild - index - 1 : index) * inc;
      return (
        <Grid item style={{ transition: `transform ${_duration}ms linear ${_delay}ms`, transform: open ? 'scale(1)' : 'scale(0)' }}>
          {child}
        </Grid>
      );
    });

    return (
      <div>
        <div onMouseLeave={this.handleMouseLeave}>
          <Grid
            container
            direction={config.direction}
            justify={config.justify}
            align={config.align}
            style={{ ...config.gridStyle, padding: 20, pointerEvents: open ? 'auto' : 'none' }}
          >
            {display}
          </Grid>
        </div>
        <div style={config.triggerStyle} onMouseEnter={this.handleMouseEnter} />
      </div>
    );
  }

  handleMouseEnter = () => this.setState({ open: true });
  handleMouseLeave = () => this.setState({ open: false });

}

type PositionAlignT = 'topstart'
  | 'topcenter'
  | 'topend'
  | 'bottomstart'
  | 'bottomcenter'
  | 'bottomend'
  | 'leftstart'
  | 'leftcenter'
  | 'leftend'
  | 'rightstart'
  | 'rightcenter'
  | 'rightend';

type ConfigT = {
  direction: GridDirection;
  justify: GridJustification;
  align: GridAlignment;
  gridStyle: React.CSSProperties;
  triggerStyle: React.CSSProperties;
};

const configMap = new Map<PositionAlignT, ConfigT>();
configMap.set('topstart', {
  direction: 'row',
  justify: 'flex-start',
  align: 'center',
  gridStyle: { position: 'fixed', top: 0, left: 0, width: '100vw', height: 'auto' },
  triggerStyle: { position: 'fixed', top: 0, left: 0, width: '100vw', height: 1 }
});

configMap.set('topcenter', {
  direction: 'row',
  justify: 'center',
  align: 'center',
  gridStyle: { position: 'fixed', top: 0, left: 0, width: '100vw', height: 'auto' },
  triggerStyle: { position: 'fixed', top: 0, left: 0, width: '100vw', height: 1 }
});

configMap.set('topend', {
  direction: 'row',
  justify: 'flex-end',
  align: 'center',
  gridStyle: { position: 'fixed', top: 0, left: 0, width: '100vw', height: 'auto' },
  triggerStyle: { position: 'fixed', top: 0, left: 0, width: '100vw', height: 1 }
});

configMap.set('bottomstart', {
  direction: 'row',
  justify: 'flex-start',
  align: 'center',
  gridStyle: { position: 'fixed', bottom: 0, left: 0, width: '100vw', height: 'auto' },
  triggerStyle: { position: 'fixed', bottom: 0, left: 0, width: '100vw', height: 1 }
});

configMap.set('bottomcenter', {
  direction: 'row',
  justify: 'center',
  align: 'center',
  gridStyle: { position: 'fixed', bottom: 0, left: 0, width: '100vw', height: 'auto' },
  triggerStyle: { position: 'fixed', bottom: 0, left: 0, width: '100vw', height: 1 }
});

configMap.set('bottomend', {
  direction: 'row',
  justify: 'flex-end',
  align: 'center',
  gridStyle: { position: 'fixed', bottom: 0, left: 0, width: '100vw', height: 'auto' },
  triggerStyle: { position: 'fixed', bottom: 0, left: 0, width: '100vw', height: 1 }
});

configMap.set('leftstart', {
  direction: 'column',
  justify: 'flex-start',
  align: 'center',
  gridStyle: { position: 'fixed', top: 0, left: 0, width: 'auto', height: '100vh' },
  triggerStyle: { position: 'fixed', top: 0, left: 0, width: 1, height: '100vh' }
});

configMap.set('leftcenter', {
  direction: 'column',
  justify: 'center',
  align: 'center',
  gridStyle: { position: 'fixed', top: 0, left: 0, width: 'auto', height: '100vh' },
  triggerStyle: { position: 'fixed', top: 0, left: 0, width: 1, height: '100vh' }
});

configMap.set('leftend', {
  direction: 'column',
  justify: 'flex-end',
  align: 'center',
  gridStyle: { position: 'fixed', top: 0, left: 0, width: 'auto', height: '100vh' },
  triggerStyle: { position: 'fixed', top: 0, left: 0, width: 1, height: '100vh' }
});

configMap.set('rightstart', {
  direction: 'column',
  justify: 'flex-start',
  align: 'center',
  gridStyle: { position: 'fixed', top: 0, right: 0, width: 'auto', height: '100vh' },
  triggerStyle: { position: 'fixed', top: 0, right: 0, width: 1, height: '100vh' }
});

configMap.set('rightcenter', {
  direction: 'column',
  justify: 'center',
  align: 'center',
  gridStyle: { position: 'fixed', top: 0, right: 0, width: 'auto', height: '100vh' },
  triggerStyle: { position: 'fixed', top: 0, right: 0, width: 1, height: '100vh' }
});

configMap.set('rightend', {
  direction: 'column',
  justify: 'flex-end',
  align: 'center',
  gridStyle: { position: 'fixed', top: 0, right: 0, width: 'auto', height: '100vh' },
  triggerStyle: { position: 'fixed', top: 0, right: 0, width: 1, height: '100vh' }
});

export default FullscreenSideMenu;