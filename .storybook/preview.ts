// .storybook/preview.ts
import type { Preview } from '@storybook/react';

import '../src/index.css'; // for Tailwind or global styles

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
