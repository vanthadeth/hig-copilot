import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { triggerHapticFeedback } from '../lib/haptics';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    triggerHapticFeedback('medium');
    setIsLoading(true);
    setError('');

    try {
      // TODO: Integrate with Supabase authentication
      // const { data, error: authError } = await supabase.auth.signInWithPassword({
      //   email,
      //   password,
      // });

      // For now, just simulate login
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Redirect to dashboard on successful login
      triggerHapticFeedback('success');
      router.push('/dashboard');
    } catch (err: any) {
      triggerHapticFeedback('error');
      setError(err.message || 'Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Login - Footprints</title>
        <meta name="description" content="Login to Footprints" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </Head>

      <div className="flex flex-col h-screen bg-gray-900 text-white">
        {/* Header */}
        <div className="px-6 pt-8 pb-8 border-b border-gray-800">
          <h1 className="text-3xl font-bold">Login</h1>
        </div>

        {/* Login Form */}
        <div className="flex-1 flex flex-col items-center justify-center px-6 py-8">
          <div className="w-full max-w-sm">
            <form onSubmit={handleLogin} className="space-y-6">
              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                />
              </div>

              {/* Password Input */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                />
              </div>

              {/* Error Message */}
              {error && (
                <div className="p-3 bg-red-900 border border-red-700 rounded-lg text-red-100 text-sm">
                  {error}
                </div>
              )}

              {/* Login Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-lg transition-colors duration-200"
              >
                {isLoading ? 'Logging in...' : 'Login'}
              </button>
            </form>
          </div>
        </div>

        {/* Footer - Support Links */}
        <div className="px-6 pb-8 border-t border-gray-800 pt-6">
          <div className="text-center space-y-3">
            <p className="text-sm text-gray-400">
              Need help? Contact admin for registration or password reset.
            </p>
            <div className="flex gap-4 justify-center text-sm">
              <a
                href="mailto:admin@hig.com"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                Contact Admin
              </a>
              <span className="text-gray-600">•</span>
              <button
                onClick={() => {
                  triggerHapticFeedback('light');
                  // TODO: Implement forgot password flow
                  alert('Contact admin for password reset');
                }}
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                Reset Password
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
