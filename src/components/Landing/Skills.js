// @flow strict
import React, { useRef, useState } from 'react';
import cx from 'classnames';
import { useIntersectionObserver, useSiteMetadata } from '../../hooks';
import { getIcon } from '../../utils';
import styles from './Landing.module.scss';
import Entries from './Entries/Entries';
import EntryCard from './Entries/EntryCard';
import Icon from '../Icon/Icon';
import SkillDetail from './SkillDetail';
import { useLanding } from '../../hooks/useLanding';

type Props = {
  children: React.ReactChildren,
};

const Skills = ({ children }: Props) => {
  const [selectedSkill, setSelectedSkill] = useState({ skill: 'javascript', idx: 0 });
  const [{ isSkillDetailOpen }, setLandingStateValue] = useLanding();

  const { skills } = useSiteMetadata();
  const skillsRef = useRef();
  const entry = useIntersectionObserver(skillsRef, { freezeOnceVisible: true });
  const animateSkillsTextIn = !!entry?.isIntersecting;

  return (
    <section className={cx(styles.Skills)} id="skills">
      <div className={styles.Skills__list}>
        <section className={styles.Skills__list__inner} ref={skillsRef}>
          <h1
            className={cx([styles.Skills__title, { 'animate__fadeInUp animate__animated': animateSkillsTextIn }])}
            data-label="02."
          >
            Skills.
          </h1>

          <Entries>
            {skills.map(({ label, slug }, idx) => (
              <EntryCard
                selected={selectedSkill.skill === slug}
                onSelectEntry={() => {
                  setLandingStateValue({ isSkillDetailOpen: true });
                  setSelectedSkill({ skill: slug, idx });
                }}
                animateCard={animateSkillsTextIn}
                idx={idx}
                key={slug}
                label={label}
                slug={slug}
              >
                {slug === 'rust' ? (
                  <Icon
                    name="caret"
                    icon={getIcon('rustLogo')}
                    width="64"
                    height="64"
                    className={styles.NavList__link__icon}
                  />
                ) : (
                  <img
                    src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${slug}/${slug}-original.svg`}
                    width="64"
                  />
                )}
              </EntryCard>
            ))}
          </Entries>
        </section>
      </div>
      <div className={cx([styles.Skills__details, { [styles.Skills__details__open]: isSkillDetailOpen }])}>
        <section
          className={cx([styles.Skills__wrapper])}
          style={{
            height: '100%',
            width: `${skills.length * 100}%`,
            transform: `translateX(-${selectedSkill.idx * 100}%)`,
            transition: 'transform 1s ease',
          }}
        >
          {skills.map(({ label, title, description, slug }, idx) => (
            <SkillDetail
              key={slug}
              slug={slug}
              selectedSkill={selectedSkill.skill}
              idx={idx}
              label={label}
              title={title}
              description={description}
            />
          ))}
        </section>
      </div>
    </section>
  );
};

export default Skills;
