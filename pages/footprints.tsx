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
        <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col items-center justify-center">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-300 mb-2">My Footprints</h2>
            <p className="text-gray-500">Your footprints content goes here</p>
          </div>
        </div>

        <BottomNavBar activePage="footprints" />
      </div>
    </>
  );
}
