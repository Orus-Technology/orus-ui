import type { Preview } from "@storybook/react";
import { withThemeByClassName } from '@storybook/addon-themes'
import '@orustecnologia/ui/src/styles.css'
import { themes } from '@storybook/theming';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },   
    docs: {
      theme: themes.dark,
  }
  },
  
};
// export const decorators = [
//   withThemeByClassName({
//     themes: {
//       light: 'light',
//       dark: 'dark',
//     },
//     defaultTheme: 'dark',
//   }),
// ];

export default preview;
