import React from 'react';
import styled, { css } from 'react-emotion';
import text from '../constants/text';

const StyledFooter = styled('footer')`
  font-size: smaller;
  background: rgba(0, 0, 0, 0.2);
  padding: 0 calc(13vw - 35px);
`;

// A grid with 3 equal columns and 3 equal rows
const section = css`
  font-family: ${text.default.typeface};
  color: ${text.colors.primary};
  display: grid;
  width: 100%;
  grid-template: 1fr 1fr 1fr / 1fr 1fr 1fr;
  > span {
    margin: auto 0;
  }
  > span:first-of-type {
    grid-area: 2 / 1 / 3 / 2;
  }
  > span:last-of-type {
    grid-area: 2 / 3 / 3 / 4;
  }
`;

const FooterSection = (
  <div className={section}>
    <span>
      Copyright &copy; Cody Welsh, 2018 and onwards. All rights reserved.
    </span>
    <span>
      If nothing else, please try to be kind to other people. Everyone is
      fighting their own battle in life.
    </span>
  </div>
);

const Footer = () => {
  return <StyledFooter>{FooterSection}</StyledFooter>;
};

export default Footer;
