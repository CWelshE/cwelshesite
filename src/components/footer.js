import React from 'react';
import styled, { css } from 'react-emotion';
import text from '../constants/text';

const StyledFooter = styled('footer')`
  display: flex;
  width: 100%;
  height: 100px;
  font-size: smaller;
  background: rgba(0, 0, 0, 0.2);
`;

// A grid with 3 equal columns and two equal rows
const section = css`
  font-family: ${text.default.typeface};
  color: ${text.colors.primary};
  display: grid;
  width: 100%;
  grid-template-columns: 33% 33% 33%;
  > span {
    padding-top: 2rem;
  }
  > span:first-of-type {
    vertical-align: middle;
    padding-left: calc(13vw - 35px);
  }
`;

const FooterSection = (
  <div className={section}>
    <span>
      Copyright &copy; Cody Welsh, 2018 and onwards. All rights reserved.
    </span>
    <span />
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
