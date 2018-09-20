// Assorted values for text styles
import styled, { css } from 'react-emotion';
import mq from './breakpoints';

// See the following for excellent CSS lock math:
// https://fvsch.com/css-locks/#toc-1-b
const generateQueries = (fontDefault, fontIncrease, breakMin, breakMax) => {
  const fontSlope = fontIncrease / (breakMax - breakMin);
  return `font-size: ${fontDefault}rem;

    @media screen and (min-width: ${breakMin}px) {
      font-size: calc(${fontDefault}rem + ${fontSlope * 100}vw + ${0 -
    fontSlope * breakMin}px);
    }

    @media screen and (min-width: ${breakMax}px) {
      font-size: calc(${fontDefault}rem + ${fontIncrease}px);
  }`;
};

// Object containing common text styles
const text = {
  default: {
    typeface: 'Roboto Slab',
  },
  header: styled('h1')`
    display: flex;
    margin: 10px 0;
    max-width: 550px;

    ${generateQueries(2.5, 30, mq[0], mq[1])};
  `,
  subheader: css`
    margin: 0;

    ${generateQueries(1.75, 20, mq[0], mq[1])};
  `,
  colors: {
    primary: '#e0dfd5',
  },
};

export default text;
