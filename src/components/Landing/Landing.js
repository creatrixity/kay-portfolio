// @flow strict
import React from 'react';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Stints from './Stints';
import Contact from './Contact';
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
    <Skills />
    <Stints />
    <Contact />
  </section>
);

export default Landing;
