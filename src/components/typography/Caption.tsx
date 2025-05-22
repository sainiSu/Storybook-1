// src/components/typography/Caption.tsx

import React from 'react';

type CaptionProps = {
  children: React.ReactNode;
  color?: string;
  fontSize?: string;
  fontStyle?: 'italic' | 'normal';
  textAlign?: 'left' | 'center' | 'right';
};

export const Caption: React.FC<CaptionProps> = ({
  children,
  color,
  fontSize = '0.875rem',
  fontStyle = 'normal',
  textAlign,
}) => {
  const style: React.CSSProperties = {
    color: color || '#666',
    fontSize,
    fontStyle,
    textAlign,
    lineHeight: '1.4',
  };

  return <span style={style}>{children}</span>;
};
