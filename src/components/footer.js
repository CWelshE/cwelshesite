import React from 'react';
import styled, { css } from 'react-emotion';

const StyledFooter = styled('footer')`
  display: flex;
  width: 100%;
  height: 100px;
`;

// A grid with 3 equal columns and two equal rows
const section = css`
  display: grid;
  width: 100%;
  grid-template-columns: 50% 50%;
  > span:first-of-type {
    border: 1px solid red;
  }
`;

const FooterSection = (
  <div className={section}>
    <span>
      Copyright &copy; Cody Welsh, 2018 and onwards. All rights reserved.
    </span>
    <span>If nothing else, please try to be kind to other people.</span>
  </div>
);

const Footer = () => {
  return <StyledFooter>{FooterSection}</StyledFooter>;
};

export default Footer;
