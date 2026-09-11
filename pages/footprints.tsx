import Head from 'next/head';
import TitleBar from '../components/TitleBar';
import BottomNavBar from '../components/BottomNavBar';

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

      <div className="flex flex-col h-screen bg-gray-900 text-white">
        <TitleBar />

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto px-6 py-8">
        </div>

        <BottomNavBar activePage="footprints" />
      </div>
    </>
  );
}
