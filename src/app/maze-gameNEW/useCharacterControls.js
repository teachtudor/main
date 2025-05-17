// //code 2 useCharacterControls.js
'use client';

import { useEffect, useState } from 'react';

export default function useCharacterControls() {
  const [keys, setKeys] = useState({
    forward: false,
    backward: false,
    left: false,
    right: false,
    jump: false,
    run: false, // ✅ NEW
  });

  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key.toLowerCase()) {
        case 'w': setKeys((k) => ({ ...k, forward: true })); break;
        case 's': setKeys((k) => ({ ...k, backward: true })); break;
        case 'a': setKeys((k) => ({ ...k, left: true })); break;
        case 'd': setKeys((k) => ({ ...k, right: true })); break;
        case 'j': setKeys((k) => ({ ...k, jump: true })); break;
        case 'r': setKeys((k) => ({ ...k, run: true })); break; // ✅ NEW
      }
    };

    const handleKeyUp = (e) => {
      switch (e.key.toLowerCase()) {
        case 'w': setKeys((k) => ({ ...k, forward: false })); break;
        case 's': setKeys((k) => ({ ...k, backward: false })); break;
        case 'a': setKeys((k) => ({ ...k, left: false })); break;
        case 'd': setKeys((k) => ({ ...k, right: false })); break;
        case 'j': setKeys((k) => ({ ...k, jump: false })); break;
        case 'r': setKeys((k) => ({ ...k, run: false })); break; // ✅ NEW
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return keys;
}


