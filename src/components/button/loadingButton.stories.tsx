import type { Meta, StoryObj } from '@storybook/react';

import Button from './';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Components/Buttons/Loading Button',
};

export default meta;
type Story = StoryObj<typeof Button>;

export const LoadingButtonStory: Story = {
  args: {
    //👇 The args you need here will depend on your component
    isLoading: true,
    title: 'Click',
    rounded: true,
    style: {},
  },
};
