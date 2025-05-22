import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Data Entry/Input',
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  render: (args) => {
    const InputWithState = (props: typeof args) => {
      const [value, setValue] = useState('');
      return <Input {...props} value={value} onChange={(e) => setValue(e.target.value)} />;
    };
    return <InputWithState {...args} />;
  },
  args: {
    placeholder: 'Enter text...',
    type: "dsdsdsd",
    value: ""
  },
};