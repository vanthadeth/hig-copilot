import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { triggerHapticFeedback } from '../lib/haptics';

export default function AppLayout() {
  const router = useRouter();
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [activePage, setActivePage] = useState('dashboard');

  const handleNavigation = (page: string) => {
    triggerHapticFeedback('light');
    setActivePage(page);
    router.push(`/${page}`);
  };

  const handleLogout = () => {
    triggerHapticFeedback('medium');
    router.push('/login');
  };

  const handleProfileClick = () => {
    triggerHapticFeedback('light');
    setShowProfileMenu(!showProfileMenu);
  };

  return (
    <>
      <Head>
        <title>Footprints - Dashboard</title>
        <meta name="description" content="Footprints Dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link rel="icon" href="/logos/hig_logo_dark.svg" />
        <link rel="apple-touch-icon" href="/logos/hig_logo_dark.svg" />
      </Head>

      <div className="flex flex-col h-screen bg-gray-900 text-white">
        {/* Title Bar */}
        <div className="bg-gray-800 border-b border-gray-700 px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Footprints</h1>
          
          {/* Profile Badge */}
          <div className="relative">
            <button
              onClick={handleProfileClick}
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                <span className="text-sm font-semibold">U</span>
              </div>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>

            {/* Dropdown Menu */}
            {showProfileMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-gray-700 rounded-lg shadow-lg border border-gray-600 z-50">
                <button
                  onClick={() => {
                    triggerHapticFeedback('light');
                    setShowProfileMenu(false);
                    // TODO: Navigate to profile page
                  }}
                  className="w-full text-left px-4 py-3 hover:bg-gray-600 transition-colors text-sm"
                >
                  Profile Settings
                </button>
                <button
                  onClick={() => {
                    triggerHapticFeedback('light');
                    setShowProfileMenu(false);
                    // TODO: Navigate to preferences
                  }}
                  className="w-full text-left px-4 py-3 hover:bg-gray-600 transition-colors text-sm border-t border-gray-600"
                >
                  Preferences
                </button>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-3 hover:bg-red-600 transition-colors text-sm border-t border-gray-600 text-red-300"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col items-center justify-center">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-300 mb-2">Dashboard</h2>
            <p className="text-gray-500">Welcome to your dashboard</p>
          </div>
        </div>

        {/* Bottom Navigation Bar */}
        <div className="bg-gray-800 border-t border-gray-700 flex items-center justify-around">
          {/* Dashboard */}
          <button
            onClick={() => handleNavigation('dashboard')}
            className={`flex-1 flex flex-col items-center justify-center py-4 transition-colors ${
              activePage === 'dashboard'
                ? 'text-blue-500 border-t-2 border-blue-500'
                : 'text-gray-400 hover:text-gray-300'
            }`}
          >
            <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-3m0 0l7-4 7 4M5 9v10a1 1 0 001 1h12a1 1 0 001-1V9m-9 5h4" />
            </svg>
            <span className="text-xs font-medium">Dashboard</span>
          </button>

          {/* Check In */}
          <button
            onClick={() => handleNavigation('checkin')}
            className={`flex-1 flex flex-col items-center justify-center py-4 transition-colors ${
              activePage === 'checkin'
                ? 'text-blue-500 border-t-2 border-blue-500'
                : 'text-gray-400 hover:text-gray-300'
            }`}
          >
            <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            <span className="text-xs font-medium">Check In</span>
          </button>

          {/* My Footprints */}
          <button
            onClick={() => handleNavigation('footprints')}
            className={`flex-1 flex flex-col items-center justify-center py-4 transition-colors ${
              activePage === 'footprints'
                ? 'text-blue-500 border-t-2 border-blue-500'
                : 'text-gray-400 hover:text-gray-300'
            }`}
          >
            <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C6.5 6.253 2 10.998 2 17s4.5 10.747 10 10.747c5.5 0 10-4.998 10-10.747 0-6.002-4.5-10.747-10-10.747z" />
            </svg>
            <span className="text-xs font-medium">My Footprints</span>
          </button>
        </div>
      </div>
    </>
  );
}
