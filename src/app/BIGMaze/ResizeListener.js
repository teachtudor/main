'use client';

import { useEffect, useState } from 'react';

export default function ResizeListener({ onResize }) {
  useEffect(() => {
    const handleResize = () => {
      const { innerWidth, innerHeight } = window;
      if (onResize) onResize({ width: innerWidth, height: innerHeight });
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial call

    return () => window.removeEventListener('resize', handleResize);
  }, [onResize]);

  return null; // this is a logic-only component
}
