// @flow strict
import React, { useRef } from 'react';
import cx from 'classnames';
import { useIntersectionObserver } from '../../hooks';
import styles from './Landing.module.scss';
import Header from './Header';

type Props = {
  children: React.ReactChildren,
};

const Hero = ({ children }: Props) => {
  const heroRef = useRef();
  const entry = useIntersectionObserver(heroRef, { freezeOnceVisible: true });
  const animateHeroTextIn = !!entry?.isIntersecting;

  return (
    <section className={styles.Hero}>
      <Header animateLinksIn={animateHeroTextIn} />

      <section className={cx([styles.container])} ref={heroRef}>
        <p
          className={cx([
            styles.Hero__text,
            { 'animate__fadeInUp animate__animated animate__delay-4s': animateHeroTextIn },
          ])}
        >
          Hello pardner,
        </p>
        <hgroup className={styles.Hero__headingGroup}>
          <h1
            className={cx([
              styles.Hero__title,
              { 'animate__fadeInUp animate__animated animate__delay-5s': animateHeroTextIn },
            ])}
          >
            I’m Caleb Mathew.
          </h1>
          <h2
            className={cx([
              styles.Hero__subtitle,
              { 'animate__fadeInUp animate__animated animate__delay-5s': animateHeroTextIn },
            ])}
          >
            I help improve mankind’s greatest invention.
          </h2>
        </hgroup>
        <p
          className={cx([
            styles.Hero__intro,
            { 'animate__fadeInUp animate__animated animate__delay-5s': animateHeroTextIn },
          ])}
        >
          I’m a software engineer that enjoys designing and building helpful products. My current adventure is building
          financial products at{' '}
          <a className="with-underline" href="https://kudi.ai">
            Kudi
          </a>
        </p>
        <a
          href={'/articles'}
          className="btn-primary btn-primary--xxl animate__fadeInUp animate__animated animate__delay-5s"
        >
          See my articles
        </a>
      </section>
    </section>
  );
};

export default Hero;
