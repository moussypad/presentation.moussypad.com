import * as React from 'react';

type PropsT = {
  id: string;
  style?: React.CSSProperties;
};

class GoogleSlide extends React.PureComponent<PropsT> {
  render() {
    const { id, style } = this.props;
    const subId = id.split('@')[1];
    return (
      <div style={{ ...style, position: 'relative' }}>
        <iframe
          style={{ width: '100%', height: '100%' }}
          src={`https://docs.google.com/presentation/d/${subId}/embed`}
          frameBorder={0}
        />
        <img
          style={{ position: 'absolute', bottom: 2, left: 272, width: 26, height: 26, backgroundColor: '#323232' }}
          src={require('./private/assets/exit.png')}
          alt="exit"
        />
      </div>
    );
  }
}

export default GoogleSlide;