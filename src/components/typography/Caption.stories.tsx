import { Caption } from './Caption';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Caption> = {
  title: 'Typography/Caption',
  component: Caption,
  argTypes: {
    color: { control: 'color' },
    fontSize: { control: 'text' },
    fontStyle: { control: 'radio', options: ['normal', 'italic'] },
    textAlign: { control: 'select', options: ['left', 'center', 'right'] },
  },
};

export default meta;
type Story = StoryObj<typeof Caption>;

export const Default: Story = {
  args: {
    children: 'This is a cation / helper text',
    color: '#666666',
    fontSize: '',
    fontStyle: 'normal',
    textAlign: 'left',
  },
};
export const Italic: Story = {
  args: {
    children: 'This is an italic caption / helper text',
    color: '#666666',
    fontSize: '',
    fontStyle: 'italic',
    textAlign: 'left',
  },
};
export const Centered: Story = {
  args: {
    children: 'The caption is centered',
    color: '#666666',
    fontSize: '',
    fontStyle: 'normal',
    textAlign: 'center',
  },
};
export const RightAligned: Story = {
  args: {
    children: 'This is a right-aligned caption / helper text',
    color: '#666666',
    fontSize: '',
    fontStyle: 'normal',
    textAlign: 'right',
  },
};
export const CustomFontSize: Story = {
  args: {
    children: 'This is a caption with custom font size',
    color: '#666666',
    fontSize: '1.2rem',
    fontStyle: 'normal',
    textAlign: 'left',
  },
};
export const CustomColor: Story = {
  args: {
    children: 'This is a caption with custom color',
    color: '#FF5733',
    fontSize: '',
    fontStyle: 'normal',
    textAlign: 'left',
  },
};