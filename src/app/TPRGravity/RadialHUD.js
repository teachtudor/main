// 'use client';
// import { useState } from 'react';
// import { animationList } from './animationList';

// export default function RadialHUD({ onSelect }) {
//   const [open, setOpen] = useState(false);

//   const radius = 120;

//   return (
//     <div style={{ position: 'absolute', bottom: 80, right: 80 }}>
//       <button
//         onClick={() => setOpen(!open)}
//         style={{
//           width: 60,
//           height: 60,
//           borderRadius: '50%',
//           background: '#444',
//           color: '#fff',
//           fontSize: 20,
//           cursor: 'pointer',
//         }}
//       >
//         🎮
//       </button>

//       {open &&
//         animationList.map((file, index) => {
//           const angle = (index / animationList.length) * 2 * Math.PI;
//           const x = Math.cos(angle) * radius;
//           const y = Math.sin(angle) * radius;
//           const name = file.replace('.fbx', '');

//           return (
//             <button
//               key={name}
//               onClick={() => {
//                 onSelect(name);
//                 setOpen(false);
//               }}
//               style={{
//                 position: 'absolute',
//                 left: 30 + x,
//                 top: 30 - y,
//                 transform: 'translate(-50%, -50%)',
//                 borderRadius: '50%',
//                 padding: '10px',
//                 background: '#88e',
//                 color: '#fff',
//                 border: 'none',
//                 cursor: 'pointer',
//                 whiteSpace: 'nowrap',
//               }}
//             >
//               {name}
//             </button>
//           );
//         })}
//     </div>
//   );
// }


//CODE 2 right
// 'use client';
// import { useState } from 'react';

// const animations = [
//   'run',
//   'idle',
//   'jump',
//   'getUp',
//   'sit',
//   'cry',
//   'laugh',
//   'leftTurn',
//   'rightTurn',
// ];

// export default function RadialHUD({ onSelect }) {
//   const [open, setOpen] = useState(false);
//   const radius = 120;

//   return (
//     <div style={{ position: 'absolute', bottom: 160, right: 80, zIndex: 999 }}>
//       <button
//         onClick={() => setOpen(!open)}
//         style={{
//           width: 70,
//           height: 70,
//           borderRadius: '50%',
//           background: '#333',
//           color: '#fff',
//           fontSize: 26,
//           cursor: 'pointer',
//           touchAction: 'manipulation',
//         }}
//       >
//         🎮
//       </button>

//       {open &&
//         animations.map((name, index) => {
//           const angle = (index / animations.length) * 2 * Math.PI;
//           const x = Math.cos(angle) * radius;
//           const y = Math.sin(angle) * radius;

//           return (
//             <button
//               key={name}
//               onClick={() => {
//                 onSelect(name);
//                 setOpen(false);
//               }}
//               style={{
//                 position: 'absolute',
//                 left: 35 + x,
//                 top: 35 - y,
//                 transform: 'translate(-50%, -50%)',
//                 borderRadius: '50%',
//                 padding: '12px 18px',
//                 background: '#559',
//                 color: '#fff',
//                 border: '2px solid #fff',
//                 fontSize: 16,
//                 cursor: 'pointer',
//                 touchAction: 'manipulation',
//               }}
//             >
//               {name}
//             </button>
//           );
//         })}
//     </div>
//   );
// }


//code 3 left
'use client';
import { useState, useEffect, useRef } from 'react';

const animations = [
  'run',
  'idle',
  'jump',
  'getUp',
  'sit',
  'cry',
  'laugh',
  'leftTurn',
  'rightTurn',
];

export default function RadialHUD({ onSelect }) {
  const [open, setOpen] = useState(false);
  const hudRef = useRef(null);
  const radius = 100;

  // ✅ Close if clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (hudRef.current && !hudRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [open]);

  return (
    <div
      ref={hudRef}
      style={{
        position: 'fixed',
        left: 40,
        bottom: 120,
        zIndex: 9999,
        pointerEvents: 'auto',
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: 70,
          height: 70,
          borderRadius: '50%',
          background: '#444',
          color: '#fff',
          fontSize: 30,
          cursor: 'pointer',
          boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
          border: '2px solid #888',
          touchAction: 'manipulation',
        }}
      >
        🎮
      </button>

      {open &&
        animations.map((name, index) => {
          const angle = (index / animations.length) * 2 * Math.PI - Math.PI / 2;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <button
              key={name}
              onClick={() => {
                onSelect(name);
                setOpen(false);
              }}
              style={{
                position: 'absolute',
                left: 35 + x,
                top: 35 + y,
                transform: 'translate(-50%, -50%)',
                borderRadius: '50%',
                padding: '10px 16px',
                background: '#3366cc',
                color: '#fff',
                border: '1px solid #fff',
                fontSize: 14,
                cursor: 'pointer',
                boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
                whiteSpace: 'nowrap',
                touchAction: 'manipulation',
                transition: 'transform 0.2s ease',
              }}
            >
              {name}
            </button>
          );
        })}
    </div>
  );
}


//code 4
// 'use client';
// import { useState, useEffect, useRef } from 'react';

// const animations = [
//   'run',
//   'idle',
//   'jump',
//   'getUp',
//   'sit',
//   'cry',
//   'laugh',
//   'turnLeft',
//   'turnRight',
//   // 'R',
//   // 'I',
//   // 'J',
//   // 'G',
//   // 'S',
//   // 'C',
//   // 'L',
//   // 'LT',
//   // 'RT',
// ];

// export default function RadialHUD({ onSelect, setHudOpen }) {
//   const [open, setOpen] = useState(false);
//   const hudRef = useRef(null);
//   const radius = 140;

//   // Auto close on outside click
//   useEffect(() => {
//     function handleClickOutside(event) {
//       if (hudRef.current && !hudRef.current.contains(event.target)) {
//         setOpen(false);
//       }
//     }
    

//     document.addEventListener('mousedown', handleClickOutside);
//     document.addEventListener('touchstart', handleClickOutside);

//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//       document.removeEventListener('touchstart', handleClickOutside);
//     };
//   }, []);

//   return (
//     <div
//       ref={hudRef}
//       style={{
//         position: 'fixed',
//         right: 150,
//         bottom: 120,
//         zIndex: 9999,
//         pointerEvents: 'auto',
//       }}
//     >
//       <button
//         // onClick={() => setOpen(!open)}
//         onClick={() =>
//           setOpen((prev) => {
//             const newState = !prev;
//             setHudOpen?.(newState); // notify parent about open/close state
//             return newState;
//           })
//         }
//         style={{
//           width: 80,
//           height: 80,
//           borderRadius: '50%',
//           background: 'radial-gradient(circle, #00faff, #005577)',
//           color: '#fff',
//           fontSize: 30,
//           cursor: 'pointer',
//           boxShadow: '0 0 20px #00faff',
//           border: '2px solid #00faff',
//           touchAction: 'manipulation',
//         }}
//       >
//         🎮
//       </button>

//       {open &&
//         animations.map((name, index) => {
//           const angle = (index / animations.length) * 2 * Math.PI - Math.PI / 2;
//           const x = Math.cos(angle) * radius;
//           const y = Math.sin(angle) * radius;

//           return (
//             <button
//               // key={name}
//               // onClick={() => {
//               //   console.log('Selected animation', name);
//               //   onSelect(name);
//               //   setOpen(false);
//               // }}
//               key={name}
//               onMouseDown={(e) => {
//                 e.preventDefault();
//                 onSelect(name);     // start animation
//               }}
//               onTouchStart={(e) => {
//                 e.preventDefault();
//                 onSelect(name);     // start animation
//               }}
//               // onMouseUp={(e) => {
//               //   e.preventDefault();
//               //   onSelect('idle');   // return to idle
//               // }}
//               // onMouseLeave={(e) => {
//               //   e.preventDefault();
//               //   onSelect('idle');   // also stop on mouse leave
//               // }}
//               onTouchEnd={(e) => {
//                 e.preventDefault();
//                 onSelect('idle');   // stop on touch release
//               }}
//               style={{
//                 position: 'absolute',
//                 left: 40 + x,
//                 top: 40 + y,
//                 transform: 'translate(-50%, -50%) scale(1)',
//                 borderRadius: '50%',
//                 padding: '12px 18px',
//                 background: 'radial-gradient(circle, #00e0ff, #005077)',
//                 color: '#fff',
//                 border: '2px solid #00faff',
//                 fontSize: 13,
//                 cursor: 'pointer',
//                 boxShadow: '0 0 10px #00faff',
//                 whiteSpace: 'nowrap',
//                 touchAction: 'manipulation',
//                 transition: 'transform 0.2s ease, background 0.2s ease',
//               }}
//               onMouseEnter={(e) => (e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1.2)')}
//               onMouseLeave={(e) => (e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1)')}
//             >
//               {name}
//             </button>
//           );
//         })}
//     </div>
//   );
// }
