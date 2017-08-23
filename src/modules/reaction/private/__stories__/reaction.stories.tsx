import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number } from '@storybook/addon-knobs';
import { v4 } from 'node-uuid';
import ReactionFlow, { ParamsT } from '../ReactionFlow';
import ReactionController, { ManifestT, ConfigT } from '../../ReactionController';
import ReactionPanel from '../../ReactionPanel';

storiesOf('reaction', module)
  .addDecorator(withKnobs)
  .add('<ReactionFlow /> (private)', () => {
    const duration = number('duration', 5000);
    const top = number('top', 30);
    const height = number('height', 30);
    const size = number('size', 3);

    const params: ParamsT = {
      uid: v4(),
      duration,
      top,
      height,
      size,
      startTopFactor: Math.random(),
      startLeftFactor: Math.random(),
      translateY50Factor: Math.random(),
      translateYUpDownFactor: Math.random(),
      translateX100Factor: Math.random()
    };

    const style: React.CSSProperties = {
      position: 'fixed',
      top: `${top}vh`,
      left: 0,
      width: '100vw',
      height: `${height}vh`,
      backgroundColor: 'skyblue',
      opacity: 0.3,
      pointerEvents: 'none'
    };

    return (
      <div>
        <ReactionFlow params={params}>
          <img src={require('../assets/Like.svg')} alt="like" />
        </ReactionFlow>
        <div style={style} />
      </div>
    );
  })
  .add('<ReactionController />', () => {
    const numOfReactions = number('number of reactions', 1);

    const config: ConfigT = {
      duration: 5000,
      top: 30,
      height: 30,
      size: 3,
    };

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

    const manifests: ManifestT[] = [];
    Array(numOfReactions).fill(0).map(() => {
      manifests.push({
        uid: v4(),
        reactionType: 'Happy',
        factors: [Math.random(), Math.random(), Math.random(), Math.random(), Math.random()]
      });
    });

    return (
      <div>
        <ReactionController manifests={manifests} config={config} />
        <div style={style} />
      </div>
    );
  })
  .add('<ReactionPanel />', () => {
    const config: ConfigT = {
      duration: 5000,
      top: 30,
      height: 30,
      size: 3
    };

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

    return (
      <div>
        <ReactionPanel config={config} />
        <div style={style} />
      </div>
    );
  });