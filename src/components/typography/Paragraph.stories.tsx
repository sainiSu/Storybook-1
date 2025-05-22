// src/components/typography/Paragraph.stories.tsx

import React from 'react';
import { Paragraph } from './Paragraph';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Paragraph> = {
  title: 'Typography/Paragraph',
  component: Paragraph,
  argTypes: {
    bold: { control: 'boolean' },
    italic: { control: 'boolean' },
    underline: { control: 'boolean' },
    color: { control: 'color' },
    fontSize: { control: 'text' },
    fontFamily: { control: 'text' },
    letterSpacing: { control: 'text' },
    textAlign: { control: 'select', options: ['left', 'center', 'right', 'justify'] },
  },
};

export default meta;
type Story = StoryObj<typeof Paragraph>;

export const Default: Story = {
  args: {
    children: 'This is a paragraph of text for demonstration.',
    bold: false,
    italic: false,
    underline: false,
    color: '#000000',
    fontSize: '',
    fontFamily: '',
    letterSpacing: '',
    textAlign: 'left',
  },
};
