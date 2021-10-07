// @flow strict
import React, { useRef, useState } from 'react';
import cx from 'classnames';
import { useIntersectionObserver, useSiteMetadata } from '../../hooks';
import { getIcon } from '../../utils';
import styles from './Landing.module.scss';
import Entries from './Entries/Entries';
import EntryCard from './Entries/EntryCard';
import Icon from '../Icon/Icon';
import StintDetail from './StintDetail';

type Props = {
  children: React.ReactChildren,
};

const Stints = ({ children }: Props) => {
  const [selectedStint, setSelectedStint] = useState({ stint: 'kudi', idx: 0 });
  const { stints } = useSiteMetadata();
  const stintsRef = useRef();
  const entry = useIntersectionObserver(stintsRef, { freezeOnceVisible: true });
  const animateStintsTextIn = !!entry?.isIntersecting;

  return (
    <section className={cx(styles.Stints)} id="experience">
      <div className={styles.Stints__details}>
        <section
          className={cx([styles.Stints__wrapper])}
          style={{
            height: '100%',
            width: `${stints.length * 100}%`,
            transform: `translateX(-${selectedStint.idx * 100}%)`,
            transition: 'transform 1s ease',
          }}
        >
          {stints.map(({ label, epoch, designation, slug, highlights }, idx) => (
            <StintDetail
              slug={slug}
              selectedSkill={selectedStint.skill}
              idx={idx}
              label={label}
              highlights={highlights}
              epoch={epoch}
              designation={designation}
            />
          ))}
        </section>
      </div>
      <div className={styles.Stints__list}>
        <section className={styles.Stints__list__inner} ref={stintsRef}>
          <h1
            className={cx([styles.Stints__title, { 'animate__fadeInUp animate__animated': animateStintsTextIn }])}
            data-label="03."
          >
            Experience.
          </h1>

          <Entries>
            {stints.map(({ label, slug }, idx) => (
              <EntryCard
                selected={selectedStint.stint === slug}
                onSelectEntry={() => setSelectedStint({ stint: slug, idx })}
                animateCard={animateStintsTextIn}
                idx={idx}
                label={label}
                slug={slug}
              >
                <img src={`/media/${slug}.png`} className={styles.Stints__icon} />
              </EntryCard>
            ))}
          </Entries>
        </section>
      </div>
    </section>
  );
};

export default Stints;
