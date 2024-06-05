import React from 'react';
import type { Preview } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

const preview: Preview = {
  decorators: [
    (Story, context) => (
      <ThemeProvider theme={{ theme: context.globals.theme }}>
        <Story />
      </ThemeProvider>
    ),
  ],
  globalTypes: {
    theme: {
      description: 'Global color scheme for components.',
      defaultValue: 'light',
      toolbar: {
        title: 'Color Scheme',
        icon: 'mirror',
        items: [
          { value: 'light', right: '🌞', title: 'Light Mode' },
          { value: 'dark', right: '🌚', title: 'Dark Mode' },
        ],
        dynamicTitle: true,
      },
    },
  },
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#ffffff',
        },
        {
          name: 'dark',
          value: 'black',
        },
      ],
    },
    darkMode: {
      current: 'light',
    },
  },
};

export default preview;
