import * as React from 'react';

const style: React.CSSProperties = {
  width: '100vw',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

class FourDotsLoading extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div style={style}>
        <img style={{ width: '20vmax' }} src={require('./private/assets/fourDotsLoading.gif')} alt="loading" />
      </div>
    );
  }
}

export default FourDotsLoading;