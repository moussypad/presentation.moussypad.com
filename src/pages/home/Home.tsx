import * as React from 'react';
import LoginButton from '../../modules/guard/LoginButton';
import './private/Home.css';

const logo = require('./private/logo.svg');

class Home extends React.PureComponent {
  render() {
    return (
      <div className="Home">
        <div className="Home-header">
          <img src={logo} className="Home-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <LoginButton />
      </div>
    );
  }
}

export default Home;