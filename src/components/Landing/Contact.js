// @flow strict
import React, { useRef } from 'react';
import cx from 'classnames';
import { useIntersectionObserver } from '../../hooks';
import styles from './Landing.module.scss';

type Props = {
  children: React.ReactChildren,
};

const Contact = ({ children }: Props) => {
  const contactRef = useRef();
  const entry = useIntersectionObserver(contactRef, { freezeOnceVisible: true });
  const animateContactTextIn = !!entry?.isIntersecting;

  return (
    <section className={cx(styles.Contact)} ref={contactRef}>
      <section className={cx([styles.container, styles['container--fullHeight']])}>
        <div className={styles.landing__Contact}>
          <section>
            <h1
              className={cx([styles.Contact__title, { 'animate__fadeInUp animate__animated': animateContactTextIn }])}
              data-label="04."
            >
              Let's chat.
            </h1>
            <p
              className={cx([
                styles.Contact__intro,
                { 'animate__fadeInUp animate__animated animate__delay-1s': animateContactTextIn },
              ])}
            >
              Got a question or proposal for me? Let’s get in touch! I have a personal rule of returning responses
              within a 3-hour window.
            </p>
            <p
              className={cx([
                styles.Contact__intro,
                { 'animate__fadeInUp animate__animated animate__delay-2s': animateContactTextIn },
              ])}
            >
              Start by{' '}
              <a className="with-underline" href="#">
                saying hi
              </a>{' '}
            </p>
          </section>
        </div>
      </section>
    </section>
  );
};

export default Contact;
