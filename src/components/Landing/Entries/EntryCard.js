// @flow strict
import React from 'react';
import cx from 'classnames';
import { getIcon } from '../../../utils';
import Icon from '../../Icon/Icon';
import styles from './Entries.module.scss';

type NavItem = {
  label: string,
  selected: Boolean,
  idx: Number,
  animateCard: Boolean,
  children?: React.ReactElement,
};

type Props = {};

const EntryCard = (props: Props) => {
  const { label, slug, selected, onSelectEntry, idx, animateCard, children } = props;
  const animateClasses = `animate__fadeInUp animate__animated animate__delay-${idx}s`;

  return (
    <div>
      <input
        type="radio"
        id={`entry-${slug}`}
        checked={selected}
        onChange={() => onSelectEntry(props)}
        className={cx(styles.EntryCard__radio)}
      />
      <label htmlFor={`entry-${slug}`} className={cx(styles.EntryCard, { [animateClasses]: animateCard })}>
        <section>
          <h4 className={cx(styles.EntryCard__title)}>{label}</h4>
          <a className={cx([styles.EntryCard__link, 'with-underline'])} href="#">
            Read more
          </a>
        </section>
        {children}
      </label>
    </div>
  );
};

export default EntryCard;
