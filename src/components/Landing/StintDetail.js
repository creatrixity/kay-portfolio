import React, { useRef } from 'react';
import cx from 'classnames';
import { useIntersectionObserver, useSiteMetadata } from '../../hooks';
import { getIcon } from '../../utils';
import styles from './Landing.module.scss';
import Entries from './Entries/Entries';
import EntryCard from './Entries/EntryCard';
import Icon from '../Icon/Icon';

const StintDetail = ({ slug, selected, idx, label, epoch, designation, highlights }) => {
  const detailRef = useRef();
  const entry = useIntersectionObserver(detailRef, { freezeOnceVisible: true });
  const animateDetail = !!entry?.isIntersecting;
  const animateClasses = `animate__fadeInUp animate__animated`;

  return (
    <section
      className={cx([
        styles.Stints__detail,
        styles[`Stints__detail__${slug}`],
        {
          [styles.Stints__detailSelected]: selected,
        },
      ])}
      style={{
        left: `${idx * 100}%`,
      }}
    >
      <div className={cx([styles.Stints__stuff])} ref={detailRef}>
        <hgroup>
          <h2 className={cx([styles.Stints__detail__title, { [animateClasses]: animateDetail }])}>{label}</h2>
          <h3 className={cx([styles.Stints__detail__desc, { [animateClasses]: animateDetail }])}>{designation}</h3>
        </hgroup>
        <time>{epoch}</time>

        {highlights.length ? (
          <ul>
            {highlights.map((highlight) => {
              return <li key={highlight}>{highlight}</li>;
            })}
          </ul>
        ) : null}
      </div>
    </section>
  );
};

export default StintDetail;
