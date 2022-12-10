import 'styled-components';
import defaultTheme from './defaultTheme';
import darkTheme from './darkTheme';

declare module 'styled-components' {
  type ThemeType = typeof defaultTheme;
  type ThemeType = typeof darkTheme;

  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends ThemeType {}
  export interface DarktTheme extends ThemeType {}
}
