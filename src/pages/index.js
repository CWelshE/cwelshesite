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
    <p>
      I live by these principles, and they serve me well in software
      development, friendships, and also just life in general, too:
    </p>
    <ul>
      <li>Leave things better than they were;</li>
      <li>Exercise critical thinking as much as possible;</li>
      <li>Be mindful of others, and their feelings;</li>
      <li>Have more patience than needed;</li>
      <li>Greet conflicting viewpoints with empathy;</li>
      <li>Communicate more than you perceive you need to;</li>
      <li>Improve skills and learn new things every day;</li>
      <li>
        Imagine the world as a better place, and make your own impact on the
        world to reach it.
      </li>
    </ul>
    <p>Life is short, and no one person can learn everything, but I can try!</p>
    <p>
      I hope you can find what you&apos;re looking for in my tiny slice of the
      Internet. If not, you can always send me a message. Collaboration is a
      welcome inquiry.
    </p>
  </Layout>
);

export default IndexPage;
