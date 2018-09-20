import React from 'react';

import Layout from '../components/layout';
import text from '../constants/text';

const IndexPage = () => (
  <Layout>
    <h2 className={text.subheader}>Hi. I&apos;m Cody.</h2>
    <p>
      My passion is software engineering. Right now, I work on websites,
      experiments, procedural art, and all manner of applications.
    </p>
    <p>
      My tools of choice include (but are certainly not limited to): (P)React,
      Redux (when necessary), PostgreSQL, Webpack, moral support from my cat, an
      obsession with Vim, and whatever &quot;gets the job done.&quot;
    </p>
  </Layout>
);

export default IndexPage;
