import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Toast } from './Toast';

const meta: Meta<typeof Toast> = {
  title: 'Feedback/Toast',
  component: Toast,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Default: Story = {
  args: {
    message: 'This is a toast notification.',
    onClose: () => alert('Toast closed!'),
  },
};
export const Success: Story = {
  args: {
    message: 'Operation successful!',
    onClose: () => alert('Toast closed!'),
  },
};