// Export helper functions for other files from this one.

// See the following for excellent CSS lock math:
// https://fvsch.com/css-locks/#toc-1-b
const generateQueries = (sizeDefault, sizeIncrease, breakMin, breakMax) => {
  const sizeSlope = sizeIncrease / (breakMax - breakMin);
  return `font-size: ${sizeDefault}rem;

    @media screen and (min-width: ${breakMin}px) {
      font-size: calc(${sizeDefault}rem + ${sizeSlope * 100}vw + ${0 -
    sizeSlope * breakMin}px);
    }

    @media screen and (min-width: ${breakMax}px) {
      font-size: calc(${sizeDefault}rem + ${sizeIncrease}px);
  }`;
};

export default generateQueries;
