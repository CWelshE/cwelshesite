// Assorted values for text styles
import styled, { css } from 'react-emotion';
import mq from './breakpoints';
import generateQueries from './helperfuncs';

// Object containing common text styles
const text = {
  default: {
    typeface: 'Roboto Slab',
  },
  header: styled('h1')`
    display: flex;
    margin: 10px 0;
    border-bottom: 5px solid;

    ${generateQueries(2.5, 30, mq[0], mq[1])};

    @keyframes blink {
      50% {
        opacity: 0;
      }
    }

    &:after {
      content: '_';
      animation: blink 1s step-start infinite;
    }
  `,
  subheader: css`
    margin: 0;

    ${generateQueries(1.75, 20, mq[0], mq[1])};
  `,
  colors: {
    primary: 'rgba(255,255,255)',
  },
};

export default text;
