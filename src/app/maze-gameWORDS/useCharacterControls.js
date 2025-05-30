// //code 2
// 'use client';

// import { useEffect, useState } from 'react';

// export default function useCharacterControls() {
//   const [keys, setKeys] = useState({
//     forward: false,
//     backward: false,
//     left: false,
//     right: false,
//     jump: false,
//     run: false, // ✅ NEW
//   });

//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       switch (e.key.toLowerCase()) {
//         case 'w': setKeys((k) => ({ ...k, forward: true })); break;
//         case 's': setKeys((k) => ({ ...k, backward: true })); break;
//         case 'a': setKeys((k) => ({ ...k, left: true })); break;
//         case 'd': setKeys((k) => ({ ...k, right: true })); break;
//         case 'j': setKeys((k) => ({ ...k, jump: true })); break;
//         case 'r': setKeys((k) => ({ ...k, run: true })); break; // ✅ NEW
//       }
//     };

//     const handleKeyUp = (e) => {
//       switch (e.key.toLowerCase()) {
//         case 'w': setKeys((k) => ({ ...k, forward: false })); break;
//         case 's': setKeys((k) => ({ ...k, backward: false })); break;
//         case 'a': setKeys((k) => ({ ...k, left: false })); break;
//         case 'd': setKeys((k) => ({ ...k, right: false })); break;
//         case 'j': setKeys((k) => ({ ...k, jump: false })); break;
//         case 'r': setKeys((k) => ({ ...k, run: false })); break; // ✅ NEW
//       }
//     };

//     window.addEventListener('keydown', handleKeyDown);
//     window.addEventListener('keyup', handleKeyUp);

//     return () => {
//       window.removeEventListener('keydown', handleKeyDown);
//       window.removeEventListener('keyup', handleKeyUp);
//     };
//   }, []);

//   return keys;
// }


//code 2 works great
// 'use client';

// import { useEffect, useState } from 'react';

// export default function useCharacterControls() {
//   const [keys, setKeys] = useState({
//     forward: false,
//     backward: false,
//     left: false,
//     right: false,
//     jump: false,
//     run: false,
//   });

//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       switch (e.key) {
//         case 'ArrowUp':
//           setKeys((k) => ({ ...k, forward: true }));
//           break;
//         case 'ArrowDown':
//           setKeys((k) => ({ ...k, backward: true }));
//           break;
//         case 'ArrowLeft':
//           setKeys((k) => ({ ...k, left: true }));
//           break;
//         case 'ArrowRight':
//           setKeys((k) => ({ ...k, right: true }));
//           break;
//         case 'j':
//         case 'J':
//           setKeys((k) => ({ ...k, jump: true }));
//           break;
//         case 'r':
//         case 'R':
//           setKeys((k) => ({ ...k, run: true }));
//           break;
//       }
//     };

//     const handleKeyUp = (e) => {
//       switch (e.key) {
//         case 'ArrowUp':
//           setKeys((k) => ({ ...k, forward: false }));
//           break;
//         case 'ArrowDown':
//           setKeys((k) => ({ ...k, backward: false }));
//           break;
//         case 'ArrowLeft':
//           setKeys((k) => ({ ...k, left: false }));
//           break;
//         case 'ArrowRight':
//           setKeys((k) => ({ ...k, right: false }));
//           break;
//         case 'j':
//         case 'J':
//           setKeys((k) => ({ ...k, jump: false }));
//           break;
//         case 'r':
//         case 'R':
//           setKeys((k) => ({ ...k, run: false }));
//           break;
//       }
//     };

//     window.addEventListener('keydown', handleKeyDown);
//     window.addEventListener('keyup', handleKeyUp);

//     return () => {
//       window.removeEventListener('keydown', handleKeyDown);
//       window.removeEventListener('keyup', handleKeyUp);
//     };
//   }, []);

//   return keys;
// }

//code 3
'use client';

import { useEffect, useState, useCallback } from 'react';

export default function useCharacterControls() {
  const [keys, setKeys] = useState({
    forward: false,
    backward: false,
    left: false,
    right: false,
    jump: false,
    run: false,
  });

  // ✅ Public setters for touchscreen/mouse controls
  const setControl = useCallback((action, state) => {
    setKeys((k) => ({ ...k, [action]: state }));
  }, []);

  // ✅ Keyboard input
  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'ArrowUp':
          setControl('forward', true);
          break;
        case 'ArrowDown':
          setControl('backward', true);
          break;
        case 'ArrowLeft':
          setControl('left', true);
          break;
        case 'ArrowRight':
          setControl('right', true);
          break;
        case 'j':
        case 'J':
          setControl('jump', true);
          break;
        case 'r':
        case 'R':
          setControl('run', true);
          break;
      }
    };

    const handleKeyUp = (e) => {
      switch (e.key) {
        case 'ArrowUp':
          setControl('forward', false);
          break;
        case 'ArrowDown':
          setControl('backward', false);
          break;
        case 'ArrowLeft':
          setControl('left', false);
          break;
        case 'ArrowRight':
          setControl('right', false);
          break;
        case 'j':
        case 'J':
          setControl('jump', false);
          break;
        case 'r':
        case 'R':
          setControl('run', false);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [setControl]);

  return { keys, setControl }; // ✅ return both
}
