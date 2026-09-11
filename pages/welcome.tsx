import Head from 'next/head';
import { useState } from 'react';
import { triggerHapticFeedback } from '../lib/haptics';

export default function Welcome() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [0, 1, 2];

  const handleNext = () => {
    triggerHapticFeedback('light');
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handlePrev = () => {
    triggerHapticFeedback('light');
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleStart = () => {
    triggerHapticFeedback('medium');
    // Navigate to main app
    window.location.href = '/dashboard';
  };

  return (
    <>
      <Head>
        <title>Footprints - HIG</title>
        <meta name="description" content="Journal your sales journey with Footprints" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </Head>

      <div className="flex flex-col h-screen bg-gray-900 text-white">
        {/* Header */}
        <div className="px-6 pt-8 pb-6">
          <h2 className="text-sm font-semibold text-gray-400">Footprints — by HIG</h2>
          <h1 className="text-3xl font-bold mt-4">Journal your sales journey</h1>
        </div>

        {/* Main Content - Slides */}
        <div className="flex-1 flex flex-col items-center justify-center px-6">
          {/* Slide Container */}
          <div className="w-full max-w-sm">
            <div className="aspect-video bg-gray-800 rounded-lg border border-gray-700 flex items-center justify-center mb-6">
              <div className="text-center">
                <div className="text-6xl font-bold text-gray-700 mb-2">{currentSlide + 1}</div>
                <p className="text-gray-600">Slide {currentSlide + 1}</p>
              </div>
            </div>

            {/* Slide Navigation */}
            <div className="flex gap-2 justify-center mb-8">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    triggerHapticFeedback('light');
                    setCurrentSlide(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-blue-500 w-8' : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <div className="flex gap-3 justify-center">
              <button
                onClick={handlePrev}
                disabled={currentSlide === 0}
                className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                aria-label="Previous slide"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={handleNext}
                disabled={currentSlide === slides.length - 1}
                className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                aria-label="Next slide"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="px-6 pb-8">
          <button
            onClick={handleStart}
            className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold py-3 rounded-lg transition-colors duration-200"
          >
            Start your journey
          </button>
        </div>

        {/* Footer */}
        <div className="px-6 pb-6 border-t border-gray-800 pt-4">
          <p className="text-center text-sm text-gray-500">Footprints — by HIG</p>
        </div>
      </div>
    </>
  );
}
