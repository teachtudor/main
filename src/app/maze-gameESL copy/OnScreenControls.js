// 'use client';

// import React from 'react';

// export default function OnScreenControls({ setControl }) {
//   const press = (action) => () => setControl(action, true);
//   const release = (action) => () => setControl(action, false);

//   return (
//     <div className="pointer-events-none fixed inset-0 z-50">
//       {/* LEFT: Arrows */}
//       <div className="absolute bottom-10 left-6 flex flex-col items-center gap-2 pointer-events-auto">
//         <button
//           className="arrow-button"
//           onPointerDown={press('forward')}
//           onPointerUp={release('forward')}
//           onPointerLeave={release('forward')}
//         >
//           ⬆️
//         </button>
//         <div className="flex gap-2">
//           <button
//             className="arrow-button"
//             onPointerDown={press('left')}
//             onPointerUp={release('left')}
//             onPointerLeave={release('left')}
//           >
//             ⬅️
//           </button>
//           <button
//             className="arrow-button"
//             onPointerDown={press('right')}
//             onPointerUp={release('right')}
//             onPointerLeave={release('right')}
//           >
//             ➡️
//           </button>
//         </div>
//         <button
//           className="arrow-button"
//           onPointerDown={press('backward')}
//           onPointerUp={release('backward')}
//           onPointerLeave={release('backward')}
//         >
//           ⬇️
//         </button>
//       </div>

//       {/* RIGHT: Run + Jump */}
//       <div className="absolute bottom-10 right-6 flex flex-col gap-8 pointer-events-auto">
//         <button
//           className="action-button bg-green-500"
//           onPointerDown={press('run')}
//           onPointerUp={release('run')}
//           onPointerLeave={release('run')}
//         >
//           🏃
//         </button>
//         <button
//           className="action-button bg-green-500"
//           onPointerDown={press('jump')}
//           onPointerUp={release('jump')}
//           onPointerLeave={release('jump')}
//         >
//           🦘
//         </button>
//       </div>

//       {/* Inline styles */}
//       <style jsx>{`
//         .arrow-button,
//         .action-button {
//           color: white;
//           border: 2px solid white;
//           border-radius: 9999px;
//           width: 60px;
//           height: 60px;
//           font-size: 24px;
//           font-weight: bold;
//           touch-action: none;
//         }

//         .action-button {
//           width: 90px;
//         }

//         button:active {
//           background: rgba(255, 255, 255, 0.3);
//         }
//       `}</style>
//     </div>
//   );
// }

//code 2 works great
// 'use client';

// import React from 'react';

// export default function OnScreenControls({ setControl }) {
//   const press = (action) => () => setControl(action, true);
//   const release = (action) => () => setControl(action, false);

//   return (
//     <div className="pointer-events-none fixed inset-0 z-50">
//       {/* LEFT: Arrows */}
//       <div className="absolute bottom-10 left-6 flex flex-col items-center gap-2 pointer-events-auto">
//         <button
//           className="arrow-button"
//           onPointerDown={press('forward')}
//           onPointerUp={release('forward')}
//           onPointerLeave={release('forward')}
//         >
//           ⬆️
//         </button>
//         <div className="flex gap-2">
//           <button
//             className="arrow-button"
//             onPointerDown={press('left')}
//             onPointerUp={release('left')}
//             onPointerLeave={release('left')}
//           >
//             ⬅️
//           </button>
//           <button
//             className="arrow-button"
//             onPointerDown={press('right')}
//             onPointerUp={release('right')}
//             onPointerLeave={release('right')}
//           >
//             ➡️
//           </button>
//         </div>
//         <button
//           className="arrow-button"
//           onPointerDown={press('backward')}
//           onPointerUp={release('backward')}
//           onPointerLeave={release('backward')}
//         >
//           ⬇️
//         </button>
//       </div>

//       {/* RIGHT: Run + Jump */}
//       <div className="absolute bottom-10 right-6 flex flex-col gap-8 pointer-events-auto">
//         <button
//           className="action-button bg-green-500"
//           onPointerDown={press('run')}
//           onPointerUp={release('run')}
//           onPointerLeave={release('run')}
//         >
//           🏃
//         </button>
//         <button
//           className="action-button bg-green-500"
//           onPointerDown={press('jump')}
//           onPointerUp={release('jump')}
//           onPointerLeave={release('jump')}
//         >
//           🦘
//         </button>
//       </div>

//       {/* Inline styles */}
//       <style jsx>{`
//         .arrow-button,
//         .action-button {
//           color: white;
//           border: 2px solid white;
//           border-radius: 9999px;
//           width: 60px;
//           height: 60px;
//           font-size: 24px;
//           font-weight: bold;
//           touch-action: none;
//           user-select: none;           /* ✅ prevents text selection */
//           -webkit-user-select: none;   /* ✅ for Safari/Chrome */
//         }

//         .action-button {
//           width: 90px;
//         }

//         button:active {
//           background: rgba(255, 255, 255, 0.3);
//         }
//       `}</style>
//     </div>
//   );
// }


//code 3 works great
// 'use client';

// import React from 'react';
// import { ArrowUp, ArrowDown, ArrowLeft, ArrowRight, Zap as Run, Activity as Jump } from 'lucide-react';

// export default function OnScreenControls({ setControl }) {
//   const press = (action) => (e) => {
//     e.preventDefault(); // ✅ blocks long-press menu
//     setControl(action, true);
//   };

//   const release = (action) => (e) => {
//     e.preventDefault();
//     setControl(action, false);
//   };

//   return (
//     <div className="pointer-events-none fixed inset-0 z-50">
//       {/* LEFT: Arrows */}
//       <div className="absolute bottom-10 left-6 flex flex-col items-center gap-2 pointer-events-auto">
//         <button
//           className="arrow-button"
//           onPointerDown={press('forward')}
//           onPointerUp={release('forward')}
//           onPointerLeave={release('forward')}
//         >
//           <ArrowUp size={28} />
//         </button>
//         <div className="flex gap-2">
//           <button
//             className="arrow-button"
//             onPointerDown={press('left')}
//             onPointerUp={release('left')}
//             onPointerLeave={release('left')}
//           >
//             <ArrowLeft size={28} />
//           </button>
//           <button
//             className="arrow-button"
//             onPointerDown={press('right')}
//             onPointerUp={release('right')}
//             onPointerLeave={release('right')}
//           >
//             <ArrowRight size={28} />
//           </button>
//         </div>
//         <button
//           className="arrow-button"
//           onPointerDown={press('backward')}
//           onPointerUp={release('backward')}
//           onPointerLeave={release('backward')}
//         >
//           <ArrowDown size={28} />
//         </button>
//       </div>

//       {/* RIGHT: Run + Jump */}
//       <div className="absolute bottom-10 right-6 flex flex-col gap-8 pointer-events-auto">
//         <button
//           className="action-button bg-green-500"
//           onPointerDown={press('run')}
//           onPointerUp={release('run')}
//           onPointerLeave={release('run')}
//         >
//           <Run size={28} />
//         </button>
//         <button
//           className="action-button bg-green-500"
//           onPointerDown={press('jump')}
//           onPointerUp={release('jump')}
//           onPointerLeave={release('jump')}
//         >
//           <Jump size={28} />
//         </button>
//       </div>

//       {/* Inline styles */}
//       <style jsx>{`
//         .arrow-button,
//         .action-button {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           color: white;
//           background-color: rgba(0, 0, 0, 0.5);
//           border: 2px solid white;
//           border-radius: 9999px;
//           width: 60px;
//           height: 60px;
//           font-size: 24px;
//           font-weight: bold;
//           touch-action: none;
//           user-select: none;
//           -webkit-user-select: none;
//         }

//         .action-button {
//           width: 90px;
//         }

//         button:active {
//           background: rgba(255, 255, 255, 0.3);
//         }
//       `}</style>
//     </div>
//   );
// }

//code 4
'use client';

import React from 'react';
import {
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  Zap as Run,
  Activity as Jump,
  Footprints as Walk // optional icon for walk
} from 'lucide-react';

export default function OnScreenControls({ setControl }) {
  const press = (action) => (e) => {
    e.preventDefault();
    setControl(action, true);
  };

  const release = (action) => (e) => {
    e.preventDefault();
    setControl(action, false);
  };

  return (
    <div className="pointer-events-none fixed inset-0 z-50">
      {/* LEFT: Arrows */}
      <div className="absolute bottom-10 left-6 flex flex-col items-center gap-2 pointer-events-auto">
        <button
          className="arrow-button"
          onPointerDown={press('forward')}
          onPointerUp={release('forward')}
          onPointerLeave={release('forward')}
        >
          <ArrowUp size={28} />
        </button>
        <div className="flex gap-2">
          <button
            className="arrow-button"
            onPointerDown={press('left')}
            onPointerUp={release('left')}
            onPointerLeave={release('left')}
          >
            <ArrowLeft size={28} />
          </button>
          <button
            className="arrow-button"
            onPointerDown={press('right')}
            onPointerUp={release('right')}
            onPointerLeave={release('right')}
          >
            <ArrowRight size={28} />
          </button>
        </div>
        <button
          className="arrow-button"
          onPointerDown={press('backward')}
          onPointerUp={release('backward')}
          onPointerLeave={release('backward')}
        >
          <ArrowDown size={28} />
        </button>
      </div>

      {/* RIGHT: Run + Jump + Walk (Same as Forward) */}
      <div className="absolute bottom-10 right-6 flex flex-col gap-8 pointer-events-auto">
        <button
          className="action-button bg-green-500"
          onPointerDown={press('run')}
          onPointerUp={release('run')}
          onPointerLeave={release('run')}
        >
          <Run size={28} />
        </button>
        <button
          className="action-button bg-green-500"
          onPointerDown={press('jump')}
          onPointerUp={release('jump')}
          onPointerLeave={release('jump')}
        >
          <Jump size={28} />
        </button>
        <button
          className="action-button bg-green-500"
          onPointerDown={press('forward')}
          onPointerUp={release('forward')}
          onPointerLeave={release('forward')}
        >
          <Walk size={28} />
        </button>
      </div>

      {/* Inline styles */}
      <style jsx>{`
        .arrow-button,
        .action-button {
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          background-color: rgba(0, 0, 0, 0.5);
          border: 2px solid white;
          border-radius: 9999px;
          width: 60px;
          height: 60px;
          font-size: 24px;
          font-weight: bold;
          touch-action: none;
          user-select: none;
          -webkit-user-select: none;
        }

        .action-button {
          width: 90px;
        }

        button:active {
          background: rgba(255, 255, 255, 0.3);
        }
      `}</style>
    </div>
  );
}
