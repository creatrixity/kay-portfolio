// @flow strict
import React from 'react';
import Hero from './Hero';
import Header from './Header';
import styles from './Landing.module.scss';

type Props = {
  name: string,
  icon: {
    viewBox?: string,
    path?: string,
  },
};

const Landing = () => (
  <section className={styles.landing}>
    <Hero>
      <Header />
    </Hero>
  </section>
);

export default Landing;
