import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number } from '@storybook/addon-knobs';
import { v4 } from 'node-uuid';
import ReactionFlowComponent, { FlowT } from '../components/ReactionFlowComponent';
import ReactionsControllerComponent from '../components/ReactionsControllerComponent';
import ReactionsPanel from '../../ReactionsPanel';
// import Reaction from '../../Reaction';

storiesOf('reactions', module)
  .addDecorator(withKnobs)
  .add('<ReactionFlowComponent />', () => {
    const top = number('top', 30);
    const depth = number('depth', 30);
    const size = number('size', 3);
    const delay = number('delay', 2000);
    const duration = number('duration', 5000);

    const flow: FlowT = {
      uid: v4(),
      type: 'Like',
      top,
      depth,
      size,
      delay,
      duration,
      pathFactors: [Math.random(), Math.random(), Math.random(), Math.random(), Math.random()]
    };

    const style: React.CSSProperties = {
      position: 'fixed',
      top: `${top}vh`,
      left: 0,
      width: '100vw',
      height: `${depth}vh`,
      backgroundColor: 'skyblue',
      opacity: 0.3,
      pointerEvents: 'none'
    };

    return (
      <div>
        <ReactionFlowComponent flow={flow}>
          <img src={require('../assets/Like.svg')} alt="like" />
        </ReactionFlowComponent>
        <div style={style} />
      </div>
    );
  })
  .add('<ReactionsControllerComponent />', () => {
    const numOfReactions = number('accumulated reactions', 1);

    const style: React.CSSProperties = {
      position: 'fixed',
      top: '30vh',
      left: 0,
      width: '100vw',
      height: '30vh',
      backgroundColor: 'skyblue',
      opacity: 0.3,
      pointerEvents: 'none'
    };

    const flows: FlowT[] = [];
    Array(numOfReactions).fill(0).map(() => {
      flows.push({
        uid: v4(),
        type: 'Like',
        top: 30,
        depth: 30,
        size: 3,
        delay: 1000,
        duration: 5000,
        pathFactors: [Math.random(), Math.random(), Math.random(), Math.random(), Math.random()]
      });
    });

    return (
      <div>
        <ReactionsControllerComponent flows={flows} />
        <div style={style} />
      </div>
    );
  })
  .add('<ReactionsPanel />', () => {
    const top = number('top', 30);
    const depth = number('depth', 30);
    const size = number('size', 3);
    const duration = number('duration', 5000);

    const style: React.CSSProperties = {
      position: 'fixed',
      top: `${top}vh`,
      left: 0,
      width: '100vw',
      height: `${depth}vh`,
      backgroundColor: 'skyblue',
      opacity: 0.3,
      pointerEvents: 'none'
    };

    return (
      <div>
        <ReactionsPanel top={top} depth={depth} size={size} duration={duration} />
        <div style={style} />
      </div>
    );
  });