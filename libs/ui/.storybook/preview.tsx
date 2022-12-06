import { createTheme, NextUIProvider } from '@nextui-org/react';
import { DecoratorFn } from '@storybook/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ComponentProps } from 'react';

export const lightTheme = createTheme({
  type: 'light',
  className: 'light-theme',
});

export const darkTheme = createTheme({
  type: 'dark',
  className: 'dark-theme',
});

const nextThemeValue: ComponentProps<typeof NextThemesProvider>['value'] = {
  light: lightTheme.className,
  dark: darkTheme.className,
};

export const decorators: DecoratorFn[] = [
  (Story) => {
    return (
      <NextThemesProvider
        attribute="class"
        defaultTheme="light"
        value={nextThemeValue}
      >
        <NextUIProvider>
          <Story />
        </NextUIProvider>
      </NextThemesProvider>
    );
  },
];
