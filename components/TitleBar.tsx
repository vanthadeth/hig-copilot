import { useRouter } from 'next/router';
import ProfileBadge from './ProfileBadge';

interface TitleBarProps {
  onLogout?: () => void;
}

export default function TitleBar({ onLogout }: TitleBarProps) {
  const router = useRouter();

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    } else {
      router.push('/login');
    }
  };

  return (
    <div className="bg-gray-800 border-b border-gray-700 px-4 py-3 flex items-center justify-between">
      <h1 className="text-xl font-bold">Footprints</h1>
      <ProfileBadge onLogout={handleLogout} />
    </div>
  );
}
