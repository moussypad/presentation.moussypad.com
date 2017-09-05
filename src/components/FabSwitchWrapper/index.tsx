import * as React from 'react';

type PropsT = {
  on: boolean;
};

class FabSwitchWrapper extends React.PureComponent<PropsT> {
  render() {
    const { on, children } = this.props;
    const style: React.CSSProperties = { transition: 'stroke-dashoffset 300ms linear' };
    const circumference = 2 * 25 * Math.PI;
    return (
      <div style={{ display: 'inline-flex', position: 'relative', width: 56, height: 56 }}>
        {children}
        <svg xmlns="http://www.w3.org/2000/svg" height="56" width="56" style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none' }}>
          <circle
            cx="28"
            cy="28"
            r="25"
            fill="transparent"
            strokeWidth="3"
            stroke="YellowGreen"
          />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" height="56" width="56" style={{ position: 'absolute', transform: 'rotate(-90deg)', top: 0, left: 0, pointerEvents: 'none' }}>
          <circle
            style={style}
            cx="28"
            cy="28"
            r="25"
            fill="transparent"
            strokeWidth="3"
            strokeDasharray={circumference}
            strokeDashoffset={on === false ? 0 : circumference}
            stroke="OrangeRed"
          />
        </svg>
      </div>
    );
  }
}

export default FabSwitchWrapper;