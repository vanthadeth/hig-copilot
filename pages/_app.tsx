import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Register service worker
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/sw.js')
        .then((reg) => console.log('Service Worker registered'))
        .catch((err) => console.log('Service Worker registration failed'));
    }

    // Request notification permission for haptic feedback
    if ('Notification' in window && Notification.permission === 'default') {
      Notification.requestPermission();
    }
  }, []);

  return <Component {...pageProps} />;
}
