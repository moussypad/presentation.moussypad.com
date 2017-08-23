import * as React from 'react';
import styled, { keyframes } from 'styled-components';

// type PropsT = {
//   uid: string;
//   duration: number;
//   containerTop: number;
//   containerHeight: number;
//   reactionSize: number;
//   onAnimationEnd?: () => void;
// };

export type ParamsT = {
  uid: string;
  duration: number;
  top: number;
  height: number;
  size: number;
  startTopFactor: number;
  startLeftFactor: number;
  translateY50Factor: number;
  translateYUpDownFactor: number;
  translateX100Factor: number;
};

type PropsT = {
  params: ParamsT;
  onAnimationComplete?: () => void;
};

class ReactionFlow extends React.Component<PropsT> {
  static TotalKeyFrames = 4;
  private animationOnProcess = ReactionFlow.TotalKeyFrames;

  shouldComponentUpdate(nextProps: Readonly<PropsT>) {
    return this.props.params.uid !== nextProps.params.uid;
  }

  componentWillUpdate() {
    this.animationOnProcess = ReactionFlow.TotalKeyFrames;
  }

  render() {
    // const { containerTop, containerHeight, reactionSize, duration, children } = this.props;

    const { duration, top, height, startTopFactor, startLeftFactor, 
      translateY50Factor, translateX100Factor, translateYUpDownFactor, size } = this.props.params;
    const children = this.props.children;

    // we have to minus the reactionSize to prevent moving out of the bondary
    // but the reactionSize is in different scale, so we have to do (1 - r)CT + r(CT + CH) - r(RS)
    // const r = startTopFactor;
    const startTop = `calc(${(1 - startTopFactor) * top + startTopFactor * (top + height)}vh - ${startTopFactor * size}vmax)`;
    const startLeft = `${startLeftFactor * 87.5 + (1 - startLeftFactor) * 92.5}vw`;

    // r = Math.random();
    const translateX100 = `${translateX100Factor * 100 + (1 - translateX100Factor) * 200}vw`;
    console.log(Math.round(translateYUpDownFactor));
    const translateY50 = Math.round(translateYUpDownFactor) === 0
      ? `calc(${translateY50Factor} * (${top}vh - ${startTop}))`
      : `calc(${translateY50Factor} * (${top + height}vh - ${startTop} - ${size}vmax))`;

    console.log(translateY50);

    const horizontalKeyFrames = keyframes`
      from {
        transform: translateX(0);
      }

      to {
        transform: translateX(-${translateX100});
      }
    `;

    const Horizontal = styled.div`
      animation: ${horizontalKeyFrames} ${duration}ms cubic-bezier(0.5, 0, 1, 1) 800ms 1 forwards;
    `;

    const verticalKeyFrames = keyframes`
      0% {
        animation-timing-function: ease-in-out;
        transform: translateY(0);
      }

      50% {
        animation-timing-function: ease-in-out;
        transform: translateY(${translateY50});
      }

      100% {
        transform: translateY(0);
      }
    `;

    const Vertical = styled.div`
      animation: ${verticalKeyFrames} ${duration}ms ease-in-out 800ms 1 forwards;
    `;

    const expandKeyFrames = keyframes`
      0% {
        transform: scale(0);
      }

      85% {
        transform: scale(1.3);
      }

      100% {
        transform: scale(1);
      }
    `;

    const Expand = styled.div`
      animation: ${expandKeyFrames} 300ms ease-in-out 0s 1 forwards;
    `;

    const diminishKeyFrames = keyframes`
      0% {
        transform: scale(1);
      }

      50% {
        transform: scale(1);
      }

      100% {
        transform: scale(0.3);
      }
    `;

    const Diminish = styled.div`
      animation: ${diminishKeyFrames} ${duration}ms ease-in-out 800ms 1 forwards;
    `;

    return (
      // <div style={{ position: 'fixed', top: reactionTop, left: reactionLeft }} onAnimationEnd={this.handleAnimationEnd}>
      <div style={{ position: 'fixed', top: startTop, left: startLeft }} onAnimationEnd={this.handleAnimationEnd}>
        <Horizontal>
          <Vertical>
            <Diminish>
              <Expand>
                {React.cloneElement(React.Children.only(children), {
                  style: { ...React.Children.only(children).props.style, width: `${size}vmax`, height: `${size}vmax` }
                })}
              </Expand>
            </Diminish>
          </Vertical>
        </Horizontal>
      </div>
    );
  }

  private handleAnimationEnd = () => {
    this.animationOnProcess--;
    if (this.animationOnProcess === 0) {
      if (this.props.onAnimationComplete) {
        this.props.onAnimationComplete();
      }
    }
  }
}

// function getRndInteger(min: number, max: number) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

export default ReactionFlow;