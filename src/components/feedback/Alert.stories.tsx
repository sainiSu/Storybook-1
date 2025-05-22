import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from './Alert';

const meta: Meta<typeof Alert> = {
  title: 'Feedback/Alert',
  component: Alert,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Success: Story = {
  args: {
    type: 'success',
    message: 'Operation successful!',
  },
};

export const Error: Story = {
  args: {
    type: 'error',
    message: 'Something went wrong.',
  },
};

export const Warning: Story = {
  args: {
    type: 'warning',
    message: 'Be careful with this action.',
  },
};

export const Info: Story = {
  args: {
    type: 'info',
    message: 'Here is some important information.',
  },
};
