import React from 'react';
import styled, { css } from 'react-emotion';

const StyledFooter = styled('footer')`
  display: flex;
  width: 100vw;
  height: 100px;
  justify-content: space-around;
`;

// A grid with 3 equal columns and two equal rows
const footerSection = css`
  display: grid;
  width: auto;
  grid-template-columns: 33% 33% 33%;
  grid-template-rows: 50% 50%;
`;

const FooterLeft = <div className={footerSection}>x</div>;

const Footer = () => {
  return (
    <StyledFooter>
      {FooterLeft}
      {FooterLeft}
    </StyledFooter>
  );
};

export default Footer;
