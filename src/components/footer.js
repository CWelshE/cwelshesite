import React from 'react';
import styled, { css } from 'react-emotion';
import text from '../constants/text';

const StyledFooter = styled('footer')`
  font-size: 0.75rem;
  background: rgba(0, 0, 0, 0.2);
`;

const section = css`
  display: flex;
  font-family: ${text.default.typeface};
  color: ${text.colors.primary};
  flex-wrap: wrap;
  max-width: 600px;
  padding: 2rem;
`;

const FooterSection = (
  <div className={section}>
    <p>Copyright &copy; Cody Welsh, 2018 and onwards. All rights reserved.</p>
    <p>
      If nothing else, please try to be kind to other people. Everyone is
      fighting their own battle in life.
    </p>
  </div>
);

const Footer = () => {
  return <StyledFooter>{FooterSection}</StyledFooter>;
};

export default Footer;
