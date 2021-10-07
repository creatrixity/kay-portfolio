// @flow strict
import React, { useRef, useState } from 'react';
import cx from 'classnames';
import { useSiteMetadata, useIntersectionObserver } from '../../hooks';
import { getIcon } from '../../utils';
import Icon from '../Icon/Icon';
import styles from './Landing.module.scss';
import NavList from './NavList';
import { useLanding } from '../../hooks/useLanding';

type Props = {
  name: string,
  icon: {
    viewBox?: string,
    path?: string,
  },
};

const Header = ({ animateLinksIn }) => {
  const {
    menu,
    author: { resumeUrl },
  } = useSiteMetadata();

  const [{ isMobileMenuOpen }, setLandingStateValue] = useLanding();

  return (
    <section className={styles.landing__header}>
      <Icon
        name="caret"
        icon={getIcon('logo')}
        width="59"
        height="40"
        fill="none"
        className={cx([styles.landing__logo, 'animate__fadeIn animate__animated animate__delay-2s'])}
      />

      <section className={cx(styles.landing__nav__container)}>
        <NavList navItems={menu} animateLinksIn={animateLinksIn} />
        <a
          href={resumeUrl}
          target="_blank"
          className="btn-primary animate__fadeInDown animate__animated animate__delay-5s"
        >
          My Resume
        </a>
      </section>
      <button
        aria-label="menu"
        onClick={() => setLandingStateValue({ isMobileMenuOpen: !isMobileMenuOpen })}
        className={styles.Hamburger__button}
      >
        <span className={styles.Hamburger}>
          <span className={styles.Hamburger__inner}></span>
        </span>
      </button>

      <aside
        aria-hidden="false"
        tabIndex="1"
        className={cx([styles.MobileMenu, { [styles.MobileMenu__open]: isMobileMenuOpen }])}
      >
        <nav>
          <ol>
            {menu.map(({ label, path }) => (
              <li key={path}>
                <a href={path}>{label}</a>
              </li>
            ))}
          </ol>

          <a
            href={resumeUrl}
            target="_blank"
            className="btn-primary animate__fadeInDown animate__animated animate__delay-5s"
          >
            My Resume
          </a>
        </nav>
      </aside>
    </section>
  );
};

export default Header;
