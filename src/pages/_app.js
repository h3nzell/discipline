import '@radix-ui/themes/styles.css';

import { ThemeLayout } from '@/components/common';

import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <ThemeLayout>
      <Component {...pageProps} /> ;
    </ThemeLayout>
  );
}
