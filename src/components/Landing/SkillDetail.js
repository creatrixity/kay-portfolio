import React, { useRef } from 'react';
import cx from 'classnames';
import { useIntersectionObserver, useSiteMetadata } from '../../hooks';
import { getIcon } from '../../utils';
import { useLanding } from '../../hooks/useLanding';
import styles from './Landing.module.scss';
import Entries from './Entries/Entries';
import EntryCard from './Entries/EntryCard';
import Icon from '../Icon/Icon';

const SkillDetail = ({ slug, selectedSkill, idx, label, title, description }) => {
  const detailRef = useRef();
  const [{ isSkillDetailOpen }, setLandingStateValue] = useLanding();
  const entry = useIntersectionObserver(detailRef, { freezeOnceVisible: true });
  const animateDetail = !!entry?.isIntersecting;
  const animateClasses = `animate__fadeInUp animate__animated`;

  return (
    <section
      className={cx([
        styles.Skills__detail,
        styles[`Skills__detail__${slug}`],
        {
          [styles.Skills__detailSelected]: selectedSkill === slug,
        },
      ])}
      style={{
        left: `${idx * 100}%`,
      }}
    >
      <button
        aria-label="menu"
        onClick={() => setLandingStateValue({ isSkillDetailOpen: !isSkillDetailOpen })}
        className={styles.Hamburger__button}
      >
        <span className={cx([styles.Hamburger, { [styles.Hamburger__closed]: isSkillDetailOpen }])}>
          <span className={styles.Hamburger__inner}></span>
        </span>
      </button>

      <div className={cx([styles.Skills__stuff])} ref={detailRef}>
        <p
          className={cx(styles.Skills__detail__subtitle, {
            [animateClasses]: animateDetail,
          })}
        >
          About {label}
        </p>
        <h2 className={cx([styles.Skills__detail__title, { [animateClasses]: animateDetail }])}>{title}</h2>
        <p className={cx([styles.Skills__detail__desc, { [animateClasses]: animateDetail }])}>{description}</p>
      </div>
    </section>
  );
};

export default SkillDetail;
