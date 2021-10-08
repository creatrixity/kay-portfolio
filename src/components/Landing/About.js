// @flow strict
import React, { useRef } from 'react';
import cx from 'classnames';
import { useIntersectionObserver } from '../../hooks';
import styles from './Landing.module.scss';

type Props = {
  children: React.ReactChildren,
};

const About = ({ children }: Props) => {
  const aboutRef = useRef();
  const entry = useIntersectionObserver(aboutRef, { freezeOnceVisible: true });
  const animateAboutTextIn = !!entry?.isIntersecting;

  return (
    <section className={cx(styles.About)} ref={aboutRef} id="about">
      <section className={cx([styles.container, styles['container--fullHeight']])}>
        <div className={styles.landing__About}>
          <section>
            <h1
              className={cx([styles.About__title, { 'animate__fadeInUp animate__animated': animateAboutTextIn }])}
              data-label="01."
            >
              About me
            </h1>
            <p
              className={cx([
                styles.About__intro,
                { 'animate__fadeInUp animate__animated animate__delay-1s': animateAboutTextIn },
              ])}
            >
              I’m Caleb (sometimes referred to as Kay) and I enjoy solving problems through code and design. I took an
              interest in web development in the aftermath of interest in gaming and the first moment I made Sonic run
              on my little 65k color Nokia mobile browser way back in early 2008 was magical for me.
            </p>
            <p
              className={cx([
                styles.About__intro,
                { 'animate__fadeInUp animate__animated animate__delay-1s': animateAboutTextIn },
              ])}
            >
              Over the last couple of years, I've had the good fortune of working on a variety of interesting projects,
              from building terminal management systems for POS devices to onboarding software for the military. My main
              focus these days is building products that help us solve more problems for financially underrepresented
              people at Kudi.{' '}
            </p>
            <p
              className={cx([
                styles.About__intro,
                { 'animate__fadeInUp animate__animated animate__delay-2s': animateAboutTextIn },
              ])}
            >
              Recently, I've taken a keener interest in sharing my knowledge and you really should{' '}
              <a className="with-underline" href="/articles">
                read my blog
              </a>{' '}
              where I write about React and Node.js.
            </p>
          </section>
        </div>
      </section>
    </section>
  );
};

export default About;
