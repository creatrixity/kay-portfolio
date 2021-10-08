// @flow strict
import React from 'react';
import cx from 'classnames';
import { getIcon } from '../../../utils';
import Icon from '../../Icon/Icon';
import styles from './Entries.module.scss';
import EntryCard from './EntryCard';

type Entry = {
  label: string,
  path: string,
};

type Props = {
  items: Entry[],
};

const Entries = ({ items, children }: Props) =>
  items?.length ? (
    <section className={styles.Entries}>
      {items.map(({ label }) => (
        <EntryCard label={label} />
      ))}
    </section>
  ) : (
    <section className={styles.Entries}>{children}</section>
  );

export default Entries;
