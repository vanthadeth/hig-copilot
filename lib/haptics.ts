/**
 * Haptic Feedback Utility
 * Provides cross-platform haptic feedback for mobile devices
 */

type HapticFeedbackType = 'light' | 'medium' | 'heavy' | 'success' | 'warning' | 'error';

const hapticPatterns = {
  light: { duration: 10 },
  medium: { duration: 20 },
  heavy: { duration: 30 },
  success: { pattern: [30, 50, 30] },
  warning: { pattern: [50, 30, 50, 30, 50] },
  error: { pattern: [100, 50, 100] },
};

export const triggerHapticFeedback = (type: HapticFeedbackType = 'medium') => {
  // iOS Haptic Engine support
  if ('vibrate' in navigator) {
    const pattern = hapticPatterns[type];
    if ('pattern' in pattern) {
      navigator.vibrate(pattern.pattern);
    } else {
      navigator.vibrate(pattern.duration);
    }
  }

  // Fallback: Web Haptics API for future support
  if ('HapticFeedback' in window) {
    (window as any).HapticFeedback.perform(type);
  }
};

/**
 * Add haptic feedback to button or interactive elements
 */
export const withHapticFeedback = (
  callback: () => void,
  hapticType: HapticFeedbackType = 'medium'
) => {
  return () => {
    triggerHapticFeedback(hapticType);
    callback();
  };
};

/**
 * Hook for haptic feedback in React components
 */
export const useHapticFeedback = () => {
  return {
    trigger: triggerHapticFeedback,
    withFeedback: withHapticFeedback,
  };
};
