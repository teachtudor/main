'use client';

import React from 'react';

export default function OnScreenControls({ setControl }) {
  const press = (action) => () => setControl(action, true);
  const release = (action) => () => setControl(action, false);

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
          ⬆️
        </button>
        <div className="flex gap-2">
          <button
            className="arrow-button"
            onPointerDown={press('left')}
            onPointerUp={release('left')}
            onPointerLeave={release('left')}
          >
            ⬅️
          </button>
          <button
            className="arrow-button"
            onPointerDown={press('right')}
            onPointerUp={release('right')}
            onPointerLeave={release('right')}
          >
            ➡️
          </button>
        </div>
        <button
          className="arrow-button"
          onPointerDown={press('backward')}
          onPointerUp={release('backward')}
          onPointerLeave={release('backward')}
        >
          ⬇️
        </button>
      </div>

      {/* RIGHT: Run + Jump */}
      <div className="absolute bottom-10 right-6 flex flex-col gap-8 pointer-events-auto">
        <button
          className="action-button bg-green-500"
          onPointerDown={press('run')}
          onPointerUp={release('run')}
          onPointerLeave={release('run')}
        >
          🏃
        </button>
        <button
          className="action-button bg-green-500"
          onPointerDown={press('jump')}
          onPointerUp={release('jump')}
          onPointerLeave={release('jump')}
        >
          🦘
        </button>
      </div>

      {/* Inline styles */}
      <style jsx>{`
        .arrow-button,
        .action-button {
          color: white;
          border: 2px solid white;
          border-radius: 9999px;
          width: 60px;
          height: 60px;
          font-size: 24px;
          font-weight: bold;
          touch-action: none;
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
