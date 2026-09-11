import { useRouter } from 'next/router';
import { triggerHapticFeedback } from '../lib/haptics';

interface BottomNavBarProps {
  activePage: string;
}

export default function BottomNavBar({ activePage }: BottomNavBarProps) {
  const router = useRouter();

  const handleNavigation = (page: string) => {
    triggerHapticFeedback('light');
    router.push(`/${page}`);
  };

  const navItems = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: (
        <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-3m0 0l7-4 7 4M5 9v10a1 1 0 001 1h12a1 1 0 001-1V9m-9 5h4" />
        </svg>
      ),
    },
    {
      id: 'checkin',
      label: 'Check In',
      icon: (
        <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      ),
    },
    {
      id: 'footprints',
      label: 'My Footprints',
      icon: (
        <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C6.5 6.253 2 10.998 2 17s4.5 10.747 10 10.747c5.5 0 10-4.998 10-10.747 0-6.002-4.5-10.747-10-10.747z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="bg-gray-800 border-t border-gray-700 flex items-center justify-around">
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => handleNavigation(item.id)}
          className={`flex-1 flex flex-col items-center justify-center py-4 transition-colors ${
            activePage === item.id
              ? 'text-blue-500 border-t-2 border-blue-500'
              : 'text-gray-400 hover:text-gray-300'
          }`}
        >
          {item.icon}
          <span className="text-xs font-medium">{item.label}</span>
        </button>
      ))}
    </div>
  );
}
