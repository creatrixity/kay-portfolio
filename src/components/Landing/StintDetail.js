import React, { useRef } from 'react';
import cx from 'classnames';
import { useIntersectionObserver, useSiteMetadata } from '../../hooks';
import { useLanding } from '../../hooks/useLanding';
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
  const [{ isStintDetailOpen }, setLandingStateValue] = useLanding();

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
      <button
        aria-label="menu"
        onClick={() => setLandingStateValue({ isStintDetailOpen: !isStintDetailOpen })}
        className={styles.Hamburger__button}
      >
        <span className={cx([styles.Hamburger, { [styles.Hamburger__closed]: isStintDetailOpen }])}>
          <span className={styles.Hamburger__inner}></span>
        </span>
      </button>

      <div className={cx([styles.Stints__stuff])} ref={detailRef}>
        <hgroup>
          <h2 className={cx([styles.Stints__detail__title, { [animateClasses]: animateDetail }])}>{label}</h2>
          <h3 className={cx([styles.Stints__detail__desc, { [animateClasses]: animateDetail }])}>{designation}</h3>
        </hgroup>
        <time
          className={cx([styles.Stints__detail__epoch], {
            [`${animateClasses} animate__delay-1s`]: animateDetail,
          })}
        >
          {epoch}
        </time>

        {highlights.length ? (
          <ul className={cx([styles.Stints__detail__highlights, { [animateClasses]: animateDetail }])}>
            {highlights.map((highlight, idx) => {
              return (
                <li
                  key={highlight}
                  className={cx([
                    styles.Stints__detail__highlight,
                    { [`${animateClasses} animate__delay-${idx + 1}s`]: animateDetail },
                  ])}
                >
                  <Icon
                    name="caret"
                    icon={getIcon('caretRight')}
                    width="24.42"
                    height="16"
                    fill="none"
                    className={cx([styles.Stints__detail__highlight__icon])}
                  />

                  {highlight}
                </li>
              );
            })}
          </ul>
        ) : null}
      </div>
    </section>
  );
};

export default StintDetail;
