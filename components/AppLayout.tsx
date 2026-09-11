import { ReactNode } from 'react';
import TitleBar from './TitleBar';
import BottomNavBar from './BottomNavBar';

interface AppLayoutProps {
  children: ReactNode;
  activePage: string;
}

export default function AppLayout({ children, activePage }: AppLayoutProps) {
  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white">
      <TitleBar />
      
      {/* Content Area */}
      <div className="flex-1 overflow-y-auto px-6 py-8">
        {children}
      </div>
      
      <BottomNavBar activePage={activePage} />
    </div>
  );
}
