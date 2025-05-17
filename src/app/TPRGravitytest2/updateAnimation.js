// //code 5 this works with code 8 character.js except occasional t freeze
// import * as THREE from 'three';

// export function updateAnimation(keys, animations, mixerRef, currentAction, animationStarted, ref, modelRef) {
//   if (!mixerRef.current || !animationStarted.current || !animations) return;

//   const {
//     walk = null,
//     run = null,
//     idle = null,
//     turnLeft = null,
//     turnRight = null,
//     jump = null,
//     getUp = null,
//     sit = null,
//     cry = null,
//     laugh = null
//   } = animations;

//   const fadeDuration = 0.2;
//   let originalY = null;

//   const playOnce = (action, yOffset = 0, keyHeld = false) => {
//     if (!action || currentAction.current === action) return;

//     if (currentAction.current) {
//       currentAction.current.fadeOut(fadeDuration);
//     }

//     // ✅ SAFE offset on modelRef only (not ref)
//     if (keyHeld && modelRef?.current && originalY === null) {
//       originalY = modelRef.current.position.y;
//       modelRef.current.position.y += yOffset;
//     }

//     action.reset().setLoop(THREE.LoopOnce, 1).fadeIn(fadeDuration).play();
//     currentAction.current = action;
//     action.clampWhenFinished = true;

//     action.onFinished = () => {
//       if (keyHeld && modelRef?.current && originalY !== null) {
//         modelRef.current.position.y = originalY;
//         originalY = null;
//       }

//       if (idle && !Object.values(keys).some(Boolean)) {
//         currentAction.current = idle;
//         idle.reset().fadeIn(fadeDuration).play();
//       } else if (idle && currentAction.current === action) {
//         currentAction.current.fadeOut(fadeDuration);
//         idle.reset().fadeIn(fadeDuration).play();
//         currentAction.current = idle;
//       }
//     };
//   };

//   if (keys['j']) return playOnce(jump);
//   if (keys['g']) return playOnce(getUp);
//   if (keys['s']) return playOnce(sit);
//   if (keys['c']) return playOnce(cry, 0.1, keys['c']);
//   if (keys['l']) return playOnce(laugh, 0.1, keys['l']);

//   const isRunning = keys['r'] || keys['b'];
//   const isWalking = keys['ArrowUp'] || keys['ArrowDown'];
//   const isTurning = keys['ArrowLeft'] || keys['ArrowRight'];
//   const isMoving = isWalking || isRunning;
//   const noMovement = !isMoving && !isTurning;

//   if (isTurning && !isMoving) {
//     const turnAction = keys['ArrowLeft'] ? turnLeft : turnRight;
//     if (turnAction && currentAction.current !== turnAction) {
//       currentAction.current?.fadeOut(fadeDuration);
//       turnAction.reset().fadeIn(fadeDuration).play();
//       currentAction.current = turnAction;
//     }
//     return;
//   }

//   if (isMoving) {
//     const newAction = isRunning ? run : walk;
//     const direction = keys['ArrowDown'] || keys['b'] ? -1 : 1;

//     if (newAction && currentAction.current !== newAction) {
//       currentAction.current?.fadeOut(fadeDuration);
//       newAction.reset().setLoop(THREE.LoopRepeat, Infinity).fadeIn(fadeDuration).play();
//       currentAction.current = newAction;
//     }

//     if (currentAction.current && currentAction.current.timeScale !== direction) {
//       currentAction.current.timeScale = direction;
//     }
//     return;
//   }

//   if (noMovement && !Object.values(keys).some(Boolean) && idle && currentAction.current !== idle) {
//     currentAction.current?.fadeOut(fadeDuration);
//     idle.reset().setLoop(THREE.LoopRepeat, Infinity).fadeIn(fadeDuration).play();
//     currentAction.current = idle;
//   }
// }

//code 2
// import * as THREE from 'three';

// export function updateAnimation(keys, animations, mixerRef, currentAction, animationStarted, ref, modelRef) {
//   if (!mixerRef.current || !animationStarted.current || !animations) return;

//   const fadeDuration = 0.2;
//   let originalY = null;

//   const playOnce = (action, yOffset = 0, keyHeld = false) => {
//     if (!action || currentAction.current === action) return;

//     currentAction.current?.fadeOut(fadeDuration);

//     if (keyHeld && modelRef?.current && originalY === null) {
//       originalY = modelRef.current.position.y;
//       modelRef.current.position.y += yOffset;
//     }

//     action.reset().setLoop(THREE.LoopOnce, 1).fadeIn(fadeDuration).play();
//     currentAction.current = action;
//     action.clampWhenFinished = true;

//     action.onFinished = () => {
//       if (keyHeld && modelRef?.current && originalY !== null) {
//         modelRef.current.position.y = originalY;
//         originalY = null;
//       }

//       const idle = animations['idle'] || animations['m'];
//       if (idle && !Object.values(keys).some(Boolean)) {
//         currentAction.current = idle;
//         idle.reset().fadeIn(fadeDuration).play();
//       } else if (idle && currentAction.current === action) {
//         currentAction.current.fadeOut(fadeDuration);
//         idle.reset().fadeIn(fadeDuration).play();
//         currentAction.current = idle;
//       }
//     };
//   };

//   // ✅ First priority: named action keys (dropdown)
//   for (const key in keys) {
//     if (keys[key] && animations[key]) {
//       return playOnce(animations[key], 0.1, keys[key]); // optional yOffset
//     }
//   }

//   // ✅ Handle movement keys
//   const walk = animations.walk;
//   const run = animations.run;
//   const turnLeft = animations.leftTurn || animations['s'];
//   const turnRight = animations.rightTurn || animations['one'];
//   const idle = animations.idle || animations['m'];

//   const isRunning = keys['r'] || keys['b'];
//   const isWalking = keys['ArrowUp'] || keys['ArrowDown'];
//   const isTurning = keys['ArrowLeft'] || keys['ArrowRight'];
//   const isMoving = isWalking || isRunning;
//   const noMovement = !isMoving && !isTurning;

//   if (isTurning && !isMoving) {
//     const turnAction = keys['ArrowLeft'] ? turnLeft : turnRight;
//     if (turnAction && currentAction.current !== turnAction) {
//       currentAction.current?.fadeOut(fadeDuration);
//       turnAction.reset().fadeIn(fadeDuration).play();
//       currentAction.current = turnAction;
//     }
//     return;
//   }

//   if (isMoving) {
//     const newAction = isRunning ? run : walk;
//     const direction = keys['ArrowDown'] || keys['b'] ? -1 : 1;

//     if (newAction && currentAction.current !== newAction) {
//       currentAction.current?.fadeOut(fadeDuration);
//       newAction.reset().setLoop(THREE.LoopRepeat, Infinity).fadeIn(fadeDuration).play();
//       currentAction.current = newAction;
//     }

//     if (currentAction.current && currentAction.current.timeScale !== direction) {
//       currentAction.current.timeScale = direction;
//     }
//     return;
//   }

//   if (noMovement && idle && currentAction.current !== idle) {
//     currentAction.current?.fadeOut(fadeDuration);
//     idle.reset().setLoop(THREE.LoopRepeat, Infinity).fadeIn(fadeDuration).play();
//     currentAction.current = idle;
//   }
// }

//code 3 
import * as THREE from 'three';

export function updateAnimation(keys, animations, mixerRef, currentAction, animationStarted, ref, modelRef) {
  if (!mixerRef.current || !animationStarted.current || !animations) return;

  const fadeDuration = 0.2;
  let originalY = null;

  const {
    walk = null,
    run = null,
    idle = null,
    turnLeft = null,
    turnRight = null,
    jump = null,
    getUp = null,
    sit = null,
    cry = null,
    laugh = null,
  } = animations;

  const playOnce = (action, yOffset = 0, keyHeld = false) => {
    if (!action || currentAction.current === action) return;

    currentAction.current?.fadeOut(fadeDuration);

    if (keyHeld && modelRef?.current && originalY === null) {
      originalY = modelRef.current.position.y;
      modelRef.current.position.y += yOffset;
    }

    action.reset().setLoop(THREE.LoopOnce, 1).fadeIn(fadeDuration).play();
    currentAction.current = action;
    action.clampWhenFinished = true;

    action.onFinished = () => {
      if (keyHeld && modelRef?.current && originalY !== null) {
        modelRef.current.position.y = originalY;
        originalY = null;
      }

      if (idle && !Object.values(keys).some(Boolean)) {
        currentAction.current = idle;
        idle.reset().fadeIn(fadeDuration).play();
      } else if (idle && currentAction.current === action) {
        currentAction.current.fadeOut(fadeDuration);
        idle.reset().fadeIn(fadeDuration).play();
        currentAction.current = idle;
      }
    };
  };

  // ✅ Priority: one-shot special animations first
  const exclusiveKeys = ['j', 'g', 's', 'c', 'l'];
  for (const key of exclusiveKeys) {
    if (keys[key] && animations[key]) {
      return playOnce(animations[key], 0.1, keys[key]);
    }
  }

  // ✅ Extended one-shot animations from dropdown
  const movementKeys = ['walk', 'run', 'idle', 'leftTurn', 'rightTurn'];
  for (const key in keys) {
    if (movementKeys.includes(key)) continue;
    if (keys[key] && animations[key] && !exclusiveKeys.includes(key)) {
      return playOnce(animations[key], 0.1, keys[key]);
    }
  }

  // ✅ Movement logic (walk/run/turn)
  const isRunning = keys['r'] || keys['b'];
  const isWalking = keys['ArrowUp'] || keys['ArrowDown'];
  const isTurning = keys['ArrowLeft'] || keys['ArrowRight'];
  const isMoving = isWalking || isRunning;
  const noMovement = !isMoving && !isTurning;

  if (isTurning && !isMoving) {
    const turnAction = keys['ArrowLeft'] ? turnLeft : turnRight;
    if (turnAction && currentAction.current !== turnAction) {
      currentAction.current?.fadeOut(fadeDuration);
      turnAction.reset().fadeIn(fadeDuration).play();
      currentAction.current = turnAction;
    }
    return;
  }

  if (isMoving) {
    const newAction = isRunning ? run : walk;
    const direction = keys['ArrowDown'] || keys['b'] ? -1 : 1;

    if (newAction && currentAction.current !== newAction) {
      currentAction.current?.fadeOut(fadeDuration);
      newAction.reset().setLoop(THREE.LoopRepeat, Infinity).fadeIn(fadeDuration).play();
      currentAction.current = newAction;
    }

    if (currentAction.current && currentAction.current.timeScale !== direction) {
      currentAction.current.timeScale = direction;
    }
    return;
  }

  if (noMovement && idle && currentAction.current !== idle) {
    currentAction.current?.fadeOut(fadeDuration);
    idle.reset().setLoop(THREE.LoopRepeat, Infinity).fadeIn(fadeDuration).play();
    currentAction.current = idle;
  }
}
