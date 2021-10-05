// @flow strict
import React from 'react';
import cx from 'classnames';
import styles from './Landing.module.scss';

type Props = {
  children: React.ReactChildren,
};

const Hero = ({ children }: Props) => (
  <section className={styles.landing__hero}>
    {children}
    <section className={styles.Hero__container}>
      <p className={cx([styles.Hero__text, 'animate__fadeInUp animate__animated animate__delay-3s'])}>Hello pardner,</p>
      <hgroup className={styles.Hero__headingGroup}>
        <h1 className={cx([styles.Hero__title, 'animate__fadeInUp animate__animated animate__delay-4s'])}>
          I’m Caleb Mathew.
        </h1>
        <h2 className={cx([styles.Hero__subtitle, 'animate__fadeInUp animate__animated animate__delay-4s'])}>
          I help improve mankind’s greatest invention.
        </h2>
      </hgroup>
      <p className={cx([styles.Hero__intro, 'animate__fadeInUp animate__animated animate__delay-5s'])}>
        I’m a software engineer that enjoys designing and building helpful products. My current adventure is building
        financial products at{' '}
        <a className="with-underline" href="#">
          Kudi
        </a>
      </p>
      <a className="btn-primary btn-primary--xxl animate__fadeInUp animate__animated animate__delay-5s">
        See my articles
      </a>
    </section>
  </section>
);

export default Hero;
