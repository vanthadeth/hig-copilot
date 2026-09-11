import { useRouter } from 'next/router';
import { triggerHapticFeedback } from '../lib/haptics';

interface ProfileBadgeProps {
  onLogout?: () => void;
}

export default function ProfileBadge({ onLogout }: ProfileBadgeProps) {
  const router = useRouter();

  const handleLogout = () => {
    triggerHapticFeedback('medium');
    if (onLogout) {
      onLogout();
    } else {
      router.push('/login');
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center hover:bg-blue-600 transition-colors"
      title="Logout"
    >
      <span className="text-sm font-semibold text-white">U</span>
    </button>
  );
}
