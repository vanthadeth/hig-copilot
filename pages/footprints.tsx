import Head from 'next/head';
import AppLayout from '../components/AppLayout';

export default function Footprints() {
  return (
    <>
      <Head>
        <title>My Footprints - Footprints</title>
        <meta name="description" content="My Footprints" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link rel="icon" href="/logos/hig_logo_dark.svg" />
        <link rel="apple-touch-icon" href="/logos/hig_logo_dark.svg" />
      </Head>

      <AppLayout activePage="footprints">
        <div />
      </AppLayout>
    </>
  );
}
