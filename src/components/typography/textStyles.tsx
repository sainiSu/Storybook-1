export const getTextStyles = ({
  bold,
  italic,
  underline,
  color,
}: {
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  color?: string;
}): React.CSSProperties => ({
  fontWeight: bold ? 'bold' : 'normal',
  fontStyle: italic ? 'italic' : 'normal',
  textDecoration: underline ? 'underline' : 'none',
  color: color || '#000000',
});
export const getTextClasses = ({
  bold,
  italic,
  underline,
  color,
}: {
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  color?: string;
}): string => {
  const classes = [];
  if (bold) classes.push('font-bold');
  if (italic) classes.push('italic');
  if (underline) classes.push('underline');
  if (color) classes.push(`text-${color}`);
  return classes.join(' ');
};