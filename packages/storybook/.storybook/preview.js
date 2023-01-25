export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

import { addParameters } from '@storybook/react';

addParameters({
  stylesheetToggle: {
    stylesheets: [
      {
        id: 'first',
        title: 'Blickpunkt:Film',
        url: 'https://raw.githack.com/m4rcus/figma-tokens/main/css/bf.css',
      },
      {
        id: 'second',
        title: 'Musikwoche',
        url: 'https://raw.githack.com/m4rcus/figma-tokens/main/css/mw.css',
      },
    ],
  },
});