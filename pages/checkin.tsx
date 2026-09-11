import Head from 'next/head';
import { useRouter } from 'next/router';
import BottomNavBar from '../components/BottomNavBar';
import ProfileBadge from '../components/ProfileBadge';

export default function CheckIn() {
  const router = useRouter();

  const handleLogout = () => {
    router.push('/login');
  };

  return (
    <>
      <Head>
        <title>Check In - Footprints</title>
        <meta name="description" content="Check In - Footprints" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link rel="icon" href="/logos/hig_logo_dark.svg" />
        <link rel="apple-touch-icon" href="/logos/hig_logo_dark.svg" />
      </Head>

      <div className="flex flex-col h-screen bg-gray-900 text-white">
        {/* Title Bar */}
        <div className="bg-gray-800 border-b border-gray-700 px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Footprints</h1>
          <ProfileBadge onLogout={handleLogout} />
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col items-center justify-center">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-300 mb-2">Check In</h2>
            <p className="text-gray-500">Your check in content goes here</p>
          </div>
        </div>

        {/* Bottom Navigation Bar */}
        <BottomNavBar activePage="checkin" />
      </div>
    </>
  );
}
