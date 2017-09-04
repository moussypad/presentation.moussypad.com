import * as React from 'react';
import LoginButton from '../../modules/guard/LoginButton';
import './private/Home.css';

import ReactionsPanel from '../../modules/reactions/ReactionsPanel';

// tslint:disable-next-line:no-any
const logo = require('./private/logo.svg') as any;

class Home extends React.PureComponent {
  render() {
    return (
      <div className="Home">
        <div className="Home-header">
          <img src={logo} className="Home-logo" alt="logo" />
          <h2>Welcome to Moussypad (version 0.1)</h2>
        </div>
        <LoginButton />
        <ReactionsPanel top={0} depth={30} size={3} duration={5000} delay={0} /> 
      </div>
    );
  }
}

export default Home;