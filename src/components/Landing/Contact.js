// @flow strict
import React, { useRef } from 'react';
import cx from 'classnames';
import { useIntersectionObserver, useSiteMetadata } from '../../hooks';
import styles from './Landing.module.scss';
import Icon from '../Icon/Icon';
import { getIcon } from '../../utils';

type Props = {
  children: React.ReactChildren,
};

const Contact = ({ children }: Props) => {
  const {
    author: {
      contacts: { email, twitter },
    },
  } = useSiteMetadata();
  const contactRef = useRef();
  const entry = useIntersectionObserver(contactRef, { freezeOnceVisible: true });
  const animateContactTextIn = !!entry?.isIntersecting;

  return (
    <section className={cx(styles.Contact)} ref={contactRef} id="contact">
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
              <a className="with-underline" href={`mailto:${email}`}>
                saying hi
              </a>{' '}
            </p>
            <section className={styles.Contact__footer}>
              <a href={`https://twitter.com/${twitter}`} className={cx([styles.Contact__footer__link])}>
                <Icon name="twitter" icon={getIcon('twitter')} />
                <span className={cx(['with-underline', 'ml-5'])}>twitter.com/{twitter}</span>
              </a>
              <p>Designed & developed by Kay Mathew</p>
            </section>
          </section>
        </div>
      </section>
    </section>
  );
};

export default Contact;
