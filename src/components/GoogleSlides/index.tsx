import * as React from 'react';

type PropsT = {
  id: string | null;
  style?: React.CSSProperties;
  iframeRef?: React.Ref<HTMLIFrameElement>;
  onExit?: () => void;
};

class GoogleSlide extends React.PureComponent<PropsT> {
  render() {
    const { id, style, iframeRef } = this.props;
    const subId = id ? id.split('@')[1] : null;
    return (
      <div style={{ width: '100%', height: '100%', ...style, position: 'relative' }}>
        <iframe
          style={{ width: '100%', height: '100%' }}
          ref={iframeRef}
          src={subId ? `https://docs.google.com/presentation/d/${subId}/embed` : ''}
          frameBorder={0}
        />
      </div>
    );
  }
}

export default GoogleSlide;