import 'styled-components';
import defaultTheme from './defaultTheme';

export type ThemeType = typeof defaultTheme;

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
