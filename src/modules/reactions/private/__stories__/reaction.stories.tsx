import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { v4 } from 'node-uuid';
import ReactionFlowComponent, { ReactionFlowT } from '../components/ReactionFlowComponent';
import ReactionsControllerComponent from '../components/ReactionsControllerComponent';
import ReactionsPanelComponent from '../components/ReactionsPanelComponent';

storiesOf('reactions', module)
  .addDecorator(withKnobs)
  .add('<ReactionFlowComponent />', () => {
    const type = 'Like';
    const top = number('top', 30);
    const depth = number('depth', 30);
    const size = number('size', 3);
    const delay = number('delay', 2000);
    const duration = number('duration', 5000);

    const reactionFlow: ReactionFlowT = {
      id: v4(),
      type,
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
        <ReactionFlowComponent reactionFlow={reactionFlow}>
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

    const reactionFlows: ReactionFlowT[] = [];
    Array(numOfReactions).fill(0).map(() => {
      reactionFlows.push({
        id: v4(),
        type: 'Like',
        pathFactors: [Math.random(), Math.random(), Math.random(), Math.random(), Math.random()],
        top: 30, depth: 30, size: 3, duration: 5000, delay: 1000
      });
    });

    return (
      <div>
        <ReactionsControllerComponent  reactionFlows={reactionFlows}/>
        <div style={style} />
      </div>
    );
  })
  .add('<ReactionsPanelComponent />', () => {
    return <ReactionsPanelComponent onClick={type => action(type)()} />;
  });