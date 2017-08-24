import * as React from 'react';
import styled, { keyframes } from 'styled-components';

type StartTop = number;
type StartLeft = number;
type TranslateYUpDown = number;
type TranslateY50 = number;
type TranslateX100 = number;

export type ParamsT = {
  uid: string;
  top: number;
  depth: number;
  size: number;
  delay: number;
  duration: number;
  pathFactors: [StartTop, StartLeft, TranslateYUpDown, TranslateY50, TranslateX100]
};

type PropsT = {
  params: ParamsT;
  onAnimationComplete?: () => void;
};

class ReactionFlow extends React.PureComponent<PropsT> {
  static TotalKeyFrames = 4;
  private animationOnProcess = ReactionFlow.TotalKeyFrames;

  shouldComponentUpdate(nextProps: Readonly<PropsT>) {
    return this.props.params.uid !== nextProps.params.uid;
  }

  componentWillUpdate() {
    this.animationOnProcess = ReactionFlow.TotalKeyFrames;
  }

  render() {
    const { top, depth, size, delay, duration, pathFactors } = this.props.params;
    const [startTopFactor, startLeftFactor, translateYUpDownFactor, translateY50Factor, translateX100Factor] = pathFactors;
    const children = this.props.children;

    // we have to minus the reactionSize to prevent moving out of the bondary
    // but the reactionSize is in different scale, so we have to do (1 - r)CT + r(CT + CH) - r(RS)
    // const r = startTopFactor;
    const startTop = `calc(${(1 - startTopFactor) * top + startTopFactor * (top + depth)}vh - ${startTopFactor * size}vmax)`;
    const startLeft = `${startLeftFactor * 87.5 + (1 - startLeftFactor) * 92.5}vw`;

    // r = Math.random();
    const translateX100 = `${translateX100Factor * 100 + (1 - translateX100Factor) * 200}vw`;
    const translateY50 = Math.round(translateYUpDownFactor) === 0
      ? `calc(${translateY50Factor} * (${top}vh - ${startTop}))`
      : `calc(${translateY50Factor} * (${top + depth}vh - ${startTop} - ${size}vmax))`;

    const horizontalKeyFrames = keyframes`
      from {
        transform: translateX(0);
      }

      to {
        transform: translateX(-${translateX100});
      }
    `;

    const Horizontal = styled.div`
      animation: ${horizontalKeyFrames} ${duration}ms cubic-bezier(0.5, 0, 1, 1) ${delay + 300}ms 1 forwards;
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
      animation: ${verticalKeyFrames} ${duration}ms ease-in-out ${delay + 300}ms 1 forwards;
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
      animation: ${expandKeyFrames} 300ms ease-in-out 0ms 1 forwards;
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
      animation: ${diminishKeyFrames} ${duration}ms ease-in-out ${delay + 300}ms 1 forwards;
    `;

    return (
      <div style={{ position: 'fixed', top: startTop, left: startLeft, transition: 's' }} onAnimationEnd={this.handleAnimationEnd}>
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

export default ReactionFlow;