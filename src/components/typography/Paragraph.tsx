// src/components/typography/Paragraph.tsx

import React from 'react';
import { getTextStyles } from './textStyles';

type ParagraphProps = {
  children: React.ReactNode;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  color?: string;
  fontSize?: string;
  fontFamily?: string;
  letterSpacing?: string;
  textAlign?: 'left' | 'center' | 'right' | 'justify';
};

export const Paragraph: React.FC<ParagraphProps> = ({
  children,
  bold,
  italic,
  underline,
  color,
  fontSize,
  fontFamily,
  letterSpacing,
  textAlign,
}) => {
  const baseStyles = getTextStyles({ bold, italic, underline, color });

  const style: React.CSSProperties = {
    ...baseStyles,
    fontSize: fontSize || '1rem',
    fontFamily,
    letterSpacing,
    textAlign,
    lineHeight: '1.6',
  };

  return <p style={style}>{children}</p>;
};
