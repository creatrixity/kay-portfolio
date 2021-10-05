// @flow strict
import React from 'react';
import Hero from './Hero';
import About from './About';
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
    <Hero />
    <About />
  </section>
);

export default Landing;
