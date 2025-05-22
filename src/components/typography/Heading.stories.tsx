// src/components/typography/Heading.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Heading } from './Heading';

const meta: Meta<typeof Heading> = {
  title: 'Typography/Heading',
  component: Heading,
  tags: ['autodocs'],
  argTypes: {
    level: {
      control: { type: 'select' },
      options: [1, 2, 3, 4, 5, 6],
    },
    textAlign: {
      control: 'inline-radio',
      options: ['left', 'center', 'right', 'justify'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const Default: Story = {
  args: {
    level: 2,
    children: 'Hello World From Storybook.',
    bold: true,
    italic: false,
    underline: false,
    color: 'purple',
    fontSize: '2rem',
    textAlign: 'center',
    letterSpacing: '0.05em',
  },
};
export const Italic: Story = {
  args: {
    level: 3,
    children: 'This is an italic heading',
    bold: false,
    italic: true,
    underline: false,
    color: 'blue',
    fontSize: '1.5rem',
    textAlign: 'left',
    letterSpacing: '0.02em',
  },
};
export const Underlined: Story = {
  args: {
    level: 4,
    children: 'This is an underlined heading',
    bold: false,
    italic: false,
    underline: true,
    color: 'green',
    fontSize: '1.2rem',
    textAlign: 'right',
    letterSpacing: '0.01em',
  },
};
export const CustomFontSize: Story = {
  args: {
    level: 5,
    children: 'This is a heading with custom font size',
    bold: false,
    italic: false,
    underline: false,
    color: 'red',
    fontSize: '3rem',
    textAlign: 'justify',
    letterSpacing: '0.03em',
  },
};
