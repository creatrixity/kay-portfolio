// @flow strict
import React from 'react';
import styles from './Icon.module.scss';

type Props = {
  name: string,
  icon: {
    viewBox?: string,
    path?: string,
  },
};

const Icon = ({ name, className, icon, ...props }: Props) => {
  const pathProps = {
    ...(typeof icon.path === 'string' ? { d: icon.path } : icon.path),
  };

  return (
    <svg className={className} viewBox={icon.viewBox} {...props}>
      <title>{name}</title>
      {Array.isArray(icon.path) ? (
        icon.path.map((pathProps) => <path key={pathProps.d} {...pathProps} />)
      ) : (
        <path {...pathProps} />
      )}
    </svg>
  );
};

Icon.defaultProps = {
  className: styles['icon'],
};

export default Icon;
