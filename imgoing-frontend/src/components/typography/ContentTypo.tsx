import React from 'react';
import BaseTypo, { TypoProps } from './BaseTypo';

const typoHeight = {
  ko: '19px',
  en: '15px',
};

const ContentTypo = (props: TypoProps) => {
  const { children, en, bold, color } = props;
  return (
    <BaseTypo fontSize="13px" typoHeight={typoHeight} en={en} bold={bold} color={color}>
      {children}
    </BaseTypo>
  );
};

export default ContentTypo;