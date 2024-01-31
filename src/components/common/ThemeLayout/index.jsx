'use client';
import { Theme } from '@radix-ui/themes';

const ThemeLayout = ({ children }) => (
  <Theme accentColor='#000000' appearance='dark'>
    {children}
  </Theme>
);

export default ThemeLayout;
