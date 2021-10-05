// @flow strict
import React from 'react';
import cx from 'classnames';
import { useSiteMetadata } from '../../hooks';
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

const Header = () => {
  const { menu } = useSiteMetadata();

  return (
    <section className={styles.landing__header}>
      <Icon
        useDefaultStyles={false}
        name="caret"
        icon={getIcon('logo')}
        width="59"
        height="40"
        fill="none"
        className={cx([styles.landing__logo, 'animate__fadeInDown animate__animated animate__delay-1s'])}
      />

      <section>
        <NavList navItems={menu} animateLinksIn={true} />
        <a className="btn-primary animate__fadeInDown animate__animated animate__delay-5s">My Resume</a>
      </section>
    </section>
  );
};

export default Header;
