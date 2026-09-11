import Head from 'next/head';
import { useEffect, useState } from 'react';
import { triggerHapticFeedback } from '../lib/haptics';

export default function Home() {
  const [isInstallable, setIsInstallable] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsInstallable(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstall = async () => {
    triggerHapticFeedback('medium');
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        setIsInstallable(false);
        triggerHapticFeedback('success');
      }
    }
  };

  return (
    <>
      <Head>
        <title>HIG Copilot</title>
        <meta name="description" content="Welcome to HIG Copilot" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </Head>

      <div className="min-h-screen w-screen bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center p-4">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Hello!</h1>
          <p className="text-xl text-blue-100 mb-8">Welcome to HIG Copilot</p>
          
          {isInstallable && (
            <button
              onClick={handleInstall}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg"
            >
              Install App
            </button>
          )}
        </div>
      </div>
    </>
  );
}
