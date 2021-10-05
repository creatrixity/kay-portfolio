// @flow strict
import React from 'react';
import cx from 'classnames';
import { getIcon } from '../../utils';
import Icon from '../Icon/Icon';
import styles from './Landing.module.scss';

type NavItem = {
  label: string,
  path: string,
};

type Props = {
  navItems: NavItem[],
  animateLinksIn: Boolean,
};

const NavList = ({ navItems, animateLinksIn }: Props) =>
  navItems.length ? (
    <ul className={styles.NavList}>
      {navItems.map(({ label, path }: NavItem, idx) => {
        const animateClasses = `animate__fadeInDown animate__animated animate__delay-${idx + 1}s`;
        return (
          <li key={label} className={cx(styles.NavList__item, { [animateClasses]: animateLinksIn })}>
            <a className={styles.NavList__link} href={path}>
              <Icon
                name="caret"
                icon={getIcon('caretRight')}
                width="11"
                height="13"
                fill="none"
                className={styles.NavList__link__icon}
              />
              {label}
            </a>
          </li>
        );
      })}
    </ul>
  ) : null;

export default NavList;
