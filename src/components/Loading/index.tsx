import * as React from 'react';

class Loading extends React.Component {
  shouldComponentUpdate() {
    return false;
  }
  render() {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
        <h1 style={{ fontStyle: 'italic' }}>Loading...</h1>
      </div>
    );
  }
}

export default Loading;