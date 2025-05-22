import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
  title: 'Feedback/Modal',
  component: Modal,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Open: Story = {
  args: {
    isOpen: true,
    title: 'Modal Title',
    content: 'This is modal content.',
    onClose: () => alert('Modal closed!'),
  },
};

export const Closed: Story = {
  args: {
    isOpen: false,
    title: '',
    content: '',
    onClose: () => {},
  },
};
