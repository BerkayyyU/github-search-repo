export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

import '../src/index.css';
import '../src/assets/styles/global.css';
import '../src/assets/styles/variables.css';
import '../src/utils.ts';
