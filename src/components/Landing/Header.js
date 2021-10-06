// @flow strict
import React, { useRef } from 'react';
import cx from 'classnames';
import { useSiteMetadata, useIntersectionObserver } from '../../hooks';
import { getIcon } from '../../utils';
import Icon from '../Icon/Icon';
import styles from './Landing.module.scss';
import NavList from './NavList';

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

  return (
    <section className={styles.landing__header}>
      <Icon
        name="caret"
        icon={getIcon('logo')}
        width="59"
        height="40"
        fill="none"
        className={cx([styles.landing__logo, 'animate__fadeIn animate__animated'])}
      />

      <section>
        <NavList navItems={menu} animateLinksIn={animateLinksIn} />
        <a
          href={resumeUrl}
          target="_blank"
          className="btn-primary animate__fadeInDown animate__animated animate__delay-5s"
        >
          My Resume
        </a>
      </section>
    </section>
  );
};

export default Header;
