import React from 'react';
import './grid-system.css';

export const GridWrapper = ({ children, gap = 3 }) => {
  return (
    <div data-grid data-gap={gap}>
      {children}
    </div>
  );
};

export const GridItem = ({
  children,
  xs,
  sm,
  md,
  lg,
  xl,
  hideXs,
  hideSm,
  hideMd,
  hideLg,
  hideXl
}) => {
  const visibilityAttrs = {
    ...(hideXs && { 'data-hide-xs': true }),
    ...(hideSm && { 'data-hide-sm': true }),
    ...(hideMd && { 'data-hide-md': true }),
    ...(hideLg && { 'data-hide-lg': true }),
    ...(hideXl && { 'data-hide-xl': true }),
  };

  return (
    <div
      data-grid-item
      data-xs={xs}
      data-sm={sm}
      data-md={md}
      data-lg={lg}
      data-xl={xl}
      {...visibilityAttrs}
    >
      {children}
    </div>
  );
};
