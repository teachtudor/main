'use client';
import { useThree } from '@react-three/fiber';
import { useEffect } from 'react';

export default function ResizeListener() {
  const { setSize } = useThree();

  useEffect(() => {
    const handleResize = () => setSize(window.innerWidth, window.innerHeight);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [setSize]);

  return null;
}
