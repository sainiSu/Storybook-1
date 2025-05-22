// src/components/typography/Heading.tsx
import React from 'react';
import { getTextStyles } from './textStyles';

type HeadingProps = {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
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

export const Heading: React.FC<HeadingProps> = ({
  level = 1,
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
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  const baseStyles = getTextStyles({ bold, italic, underline, color });

  const additionalStyles: React.CSSProperties = {
    fontSize,
    fontFamily,
    letterSpacing,
    textAlign,
  };

  const style = { ...baseStyles, ...additionalStyles };

  return <Tag style={style}>{children}</Tag>;
};
