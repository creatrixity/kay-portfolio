// @flow strict
import React from 'react';
import cx from 'classnames';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Stints from './Stints';
import Contact from './Contact';
import styles from './Landing.module.scss';
import { useLanding } from '../../hooks/useLanding';

type Props = {
  name: string,
  icon: {
    viewBox?: string,
    path?: string,
  },
};

const Landing = () => {
  const [{ isMobileMenuOpen }, setLandingStateValue] = useLanding();

  return (
    <section className={styles.landing}>
      <Hero />
      <About />
      <Skills />
      <Stints />
      <Contact />
      <div
        className={cx([styles.landing__overlay, { [styles.landing__overlay__open]: isMobileMenuOpen }])}
        onClick={() => setLandingStateValue({ isMobileMenuOpen: false })}
      ></div>
    </section>
  );
};

export default Landing;
